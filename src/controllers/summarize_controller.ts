import { Request, Response } from 'express';
import axios from 'axios';

const summarizeText = async (req: Request, res: Response): Promise<void> => {
  try {
    const { text } = req.body;

    if (!text) {
      res.status(400).json({ error: 'Text input is required.' });
      return;
    }

    const apiKey = process.env.GOOGLE_API_KEY;
    if (!apiKey) {
      res.status(500).json({ error: 'Google API key is not configured.' });
      return;
    }

    // Set the model ID
    const model = 'gemini-1.5-flash';

    const endpoint = `https://generativelanguage.googleapis.com/v1beta2/${model}:generateText?key=${apiKey}`;

    const prompt = `Please provide a brief summary of the following text:\n\n${text}`;

    const response = await axios.post(
      endpoint,
      {
        prompt: {
          text: prompt,
        },
        temperature: 0.5,
        candidateCount: 1,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const result = response.data;
    if (result.candidates && result.candidates.length > 0) {
      const summary = result.candidates[0].output;
      res.status(200).json({ summary });
    } else {
      res.status(500).json({ error: 'No summary generated.' });
    }
  } catch (error: any) {
    console.error('Error in summarizeText:', error);

    if (axios.isAxiosError(error)) {
      const status = error.response?.status || 500;
      const message = error.response?.data?.error?.message || error.message;
      res.status(status).json({ error: message });
    } else {
      res
        .status(500)
        .json({ error: 'Internal server error', details: error.message });
    }
  }
};

const explainText = async (req: Request, res: Response): Promise<void> => {
  try {
    const { text } = req.body;

    if (!text) {
      res.status(400).json({ error: 'Text input is required.' });
      return;
    }

    const apiKey = process.env.GOOGLE_API_KEY;
    if (!apiKey) {
      res.status(500).json({ error: 'Google API key is not configured.' });
      return;
    }

    // Set the model ID
    const model = 'models/text-bison-001';

    const endpoint = `https://generativelanguage.googleapis.com/v1beta2/${model}:generateText?key=${apiKey}`;

    const prompt = `Please explain the following text by highlighting the key points:

"${text}"

Provide a clear and concise explanation using bullet points for each key point.`;

    const response = await axios.post(
      endpoint,
      {
        prompt: {
          text: prompt,
        },
        temperature: 0.5,
        candidateCount: 1,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const result = response.data;
    if (result.candidates && result.candidates.length > 0) {
      const explanation = result.candidates[0].output;
      res.status(200).json({ explanation });
    } else {
      res.status(500).json({ error: 'No explanation generated.' });
    }
  } catch (error: any) {
    console.error('Error in explainText:', error);

    if (axios.isAxiosError(error)) {
      const status = error.response?.status || 500;
      const message = error.response?.data?.error?.message || error.message;
      res.status(status).json({ error: message });
    } else {
      res
        .status(500)
        .json({ error: 'Internal server error', details: error.message });
    }
  }
};

export { summarizeText, explainText };
