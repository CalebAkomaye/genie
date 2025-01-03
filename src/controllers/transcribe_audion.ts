import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import multer from 'multer';
import axios from 'axios';

/*
todo: {
todo: |the fetch API doesn't accept Node.js ReadStream as the 
todo: |request body. By reading the file into a buffer or switching
todo: |to axios, you can resolve the type mismatch and successfully
todo: |upload the audio file to AssemblyAI.
todo: }
 */

// Configure multer for file uploads
const upload = multer({ dest: 'uploads/' });

const ASSEMBLYAI_API_KEY = process.env.ASSEMBLYAI_API_KEY;

export const transcribeAudio = [
  upload.single('audio'),
  async (req: Request, res: Response): Promise<void> => {
    try {
      const file = req.file;
      console.log(file);
      if (!file) {
        res.status(400).json({ error: 'No audio file uploaded.' });
        return;
      }

      // Create a read stream
      const fileStream = fs.createReadStream(file.path);

      // Upload the audio file to AssemblyAI
      const uploadResponse = await axios.post(
        'https://api.assemblyai.com/v2/upload',
        fileStream,
        {
          headers: {
            authorization: ASSEMBLYAI_API_KEY || '',
            'Content-Type': 'application/octet-stream',
          },
        }
      );

      const uploadData = uploadResponse.data;

      // Clean up the uploaded file
      fs.unlink(file.path, (err) => {
        if (err) console.error('Error deleting uploaded file:', err);
      });

      if (uploadData.error) {
        res.status(500).json({ error: uploadData.error });
        return;
      }

      const audio_url = uploadData.upload_url;

      // Request transcription
      const transcriptResponse = await axios.post(
        'https://api.assemblyai.com/v2/transcript',
        {
          audio_url: audio_url,
        },
        {
          headers: {
            authorization: ASSEMBLYAI_API_KEY || '',
            'Content-Type': 'application/json',
          },
        }
      );

      const transcriptData = transcriptResponse.data;

      if (transcriptData.error) {
        res.status(500).json({ error: transcriptData.error });
        return;
      }

      const transcriptId = transcriptData.id;

      // Poll for transcription completion
      let completed = false;
      let attempts = 0;
      const maxAttempts = 400;
      const pollingInterval = 5000;

      while (!completed && attempts < maxAttempts) {
        await new Promise((resolve) => setTimeout(resolve, pollingInterval));
        attempts++;

        const statusResponse = await axios.get(
          `https://api.assemblyai.com/v2/transcript/${transcriptId}`,
          {
            headers: {
              authorization: ASSEMBLYAI_API_KEY || '',
            },
          }
        );

        const statusData = statusResponse.data;

        if (statusData.error) {
          res.status(500).json({ error: statusData.error });
          return;
        }

        if (statusData.status === 'completed') {
          completed = true;
          res.status(200).json({ text: statusData.text });
          return;
        } else if (statusData.status === 'error') {
          res.status(500).json({ error: statusData.error });
          return;
        }
      }

      // If transcription is not completed within the attempts limit
      res.status(500).json({ error: 'Transcription timed out.' });
    } catch (error: any) {
      console.error('Error in transcribeAudio:', error);
      res
        .status(500)
        .json({ error: 'Internal server error', details: error.message });
    }
  },
];
