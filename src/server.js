const express = require("express");
const path = require("path");
const { Server } = require("socket.io");
const http = require("http");

const app = express();
const port = 3333;
const server = http.createServer(app);

app.use(express.static(path.resolve(__dirname, "..", "public")));

const io = new Server(server);

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    socket.emit("chat message", msg);
  });
});

server.listen(port, () => {
  console.log(`http://localhost:${port} 🔥🔥🚒`);
});
