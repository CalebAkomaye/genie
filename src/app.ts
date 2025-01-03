import 'dotenv/config';
import express from 'express';
import compression from 'compression';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import router from './routes/routes';
import { handleSocketConnection } from './controllers/transcribe_controller';

const app = express();
const server = createServer(app);

// Socket.IO server with CORS
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', router);

//Socket.IO connections
io.on('connection', (socket) => {
  console.log('Client connected via Socket.IO');
  handleSocketConnection(socket);
});

export default server;
