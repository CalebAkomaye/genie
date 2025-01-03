import server from './app';

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`server running on port http://localhost:${PORT}`);
});
