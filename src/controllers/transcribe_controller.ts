import 'dotenv/config';
import { AssemblyAI, RealtimeTranscript } from 'assemblyai';
import { Socket } from 'socket.io';

const SAMPLE_RATE = 16000;

export const handleSocketConnection = (socket: Socket) => {
  console.log('Handling Socket.IO connection');

  let transcriber: any = null;

  socket.on('start_streaming', async () => {
    console.log('Starting audio streaming session');

    // Initialize AssemblyAI client
    const client = new AssemblyAI({
      apiKey: process.env.ASSEMBLYAI_API_KEY!,
    });

    // Create a real-time transcriber instance
    transcriber = client.realtime.transcriber({
      sampleRate: SAMPLE_RATE,
    });

    // Handle transcriber events
    transcriber.on('open', ({ sessionId }: { sessionId: string }) => {
      console.log(`Session opened with ID: ${sessionId}`);
      socket.emit('session_open', { sessionId });
    });

    transcriber.on('error', (error: Error) => {
      console.error('Transcriber Error:', error);
      socket.emit('error', {
        message: 'Transcriber error occurred',
        details: error.message,
      });
    });

    transcriber.on('close', (code: number, reason: string) => {
      console.log('Session closed:', code, reason);
      socket.emit('session_close', { code, reason });
    });

    transcriber.on('transcript', (transcript: RealtimeTranscript) => {
      if (!transcript.text) return;
      const messageType =
        transcript.message_type === 'PartialTranscript' ? 'partial' : 'final';
      socket.emit('transcript', { type: messageType, text: transcript.text });
    });

    // Connect to the AssemblyAI transcription service
    await transcriber.connect();
  });

  socket.on('audio_chunk', (data: ArrayBuffer) => {
    if (transcriber) {
      // Convert ArrayBuffer to Buffer and send to AssemblyAI
      const audioBuffer = Buffer.from(data);
      transcriber.sendAudio(audioBuffer); // Stream the audio data to AssemblyAI
    }
  });

  socket.on('stop_streaming', async () => {
    console.log('Stopping audio streaming session');
    if (transcriber) {
      await transcriber.close();
      transcriber = null;
    }
    socket.emit('streaming_stopped', { message: 'Streaming stopped' });
  });

  socket.on('disconnect', async () => {
    console.log('Client disconnected');
    if (transcriber) {
      await transcriber.close();
      transcriber = null;
    }
  });
};
