import { Request, Response } from 'express';

export const getAllVoices = async (req: Request, res: Response) => {
  try {
    const voicesUrl =
      'https://realistic-text-to-speech.p.rapidapi.com/v3/get_all_v2_voices';

    const voices = await fetch(voicesUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': process.env.RAPID_API_KEY!,
        'X-RapidAPI-Host': 'realistic-text-to-speech.p.rapidapi.com',
      },
    });

    if (!voices.ok) {
      throw new Error(`Voices API request failed with status ${voices.status}`);
    }

    const voicesArray = await voices.json();
    res.status(200).json(voicesArray);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const handleTextToSpeech = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { text, gender, voice } = req.body;

    if (!text || !gender) {
      res.status(400).send({ error: 'Missing required fields' });
      return;
    }

    const voicesUrl =
      'https://realistic-text-to-speech.p.rapidapi.com/v3/get_all_v2_voices';

    const voicesResponse = await fetch(voicesUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': process.env.RAPID_API_KEY!,
        'X-RapidAPI-Host': 'realistic-text-to-speech.p.rapidapi.com',
      },
    });

    if (!voicesResponse.ok) {
      throw new Error(
        `Voices API request failed with status ${voicesResponse.status}`
      );
    }

    const voicesData = await voicesResponse.json();

    const voicesArray = voicesData.data;

    if (!Array.isArray(voicesArray)) {
      throw new Error('Invalid response from voices API: data is not an array');
    }

    // Filter voices based on gender and language
    const filteredVoices = voicesArray.filter(
      (v: { gender: string; language_name: string }) =>
        v.gender.toLowerCase() === gender.toLowerCase()
    );

    if (filteredVoices.length === 0) {
      res.status(404).send({ error: 'No matching voices found.' });
      return;
    }

    let selectedVoice;

    if (voice) {
      selectedVoice = filteredVoices.find(
        (v: { voice_name: string }) =>
          v.voice_name.toLowerCase() === voice.toLowerCase()
      );
    }

    if (!selectedVoice) {
      selectedVoice = filteredVoices[0];
    }

    if (!selectedVoice) {
      res
        .status(404)
        .send({ error: 'No voice found matching the specified criteria.' });
      return;
    }

    const generateVoiceUrl =
      'https://realistic-text-to-speech.p.rapidapi.com/v3/generate_voice_over_v2';

    const generateResponse = await fetch(generateVoiceUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': process.env.RAPID_API_KEY!,
        'X-RapidAPI-Host': 'realistic-text-to-speech.p.rapidapi.com',
      },
      body: JSON.stringify({
        voice_obj: {
          id: selectedVoice.id,
          voice_id: selectedVoice.voice_id,
          gender: selectedVoice.gender,
          language_code: selectedVoice.language_code,
          language_name: selectedVoice.language_name,
          voice_name: selectedVoice.voice_name,
          sample_text:
            'Hello, nice to meet you, hope you are having a good day!',
          sample_audio_url: selectedVoice.sample_audio_url,
          status: selectedVoice.status,
          rank: selectedVoice.rank,
          type: selectedVoice.type,
        },
        json_data: [
          {
            block_index: 0,
            text: text,
          },
        ],
      }),
    });

    if (!generateResponse.ok) {
      throw new Error(
        `Voice generation failed with status ${generateResponse.status}`
      );
    }

    const audioData = await generateResponse.json();

    console.log('Generated Audio Data:', audioData);

    res.status(200).json(audioData);
  } catch (error: any) {
    console.error('Error in converting text to speech:', error);
    // Check if headers have already been sent
    if (!res.headersSent) {
      res.status(500).json({
        error: 'Internal server error',
        details: error.message || 'Unknown error',
      });
    } else {
      console.error('Cannot send response. Headers already sent.');
    }
  }
};
