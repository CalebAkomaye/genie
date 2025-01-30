import 'dotenv/config';
import express from 'express';
import compression from 'compression';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import router from './routes/routes';
import { handleSocketConnection } from './controllers/transcribe_controller';
import path from 'path'

const app = express();
const server = createServer(app);
const __dirname = path.resolve()
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

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'frontend/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
  });
}

//Socket.IO connections
io.on('connection', (socket) => {
  console.log('Client connected via Socket.IO');
  handleSocketConnection(socket);
});

export default server;
