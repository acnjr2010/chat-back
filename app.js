const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});
io.on('connection', (socket) => { 
  socket.on("room", (data) => {
    io.emit("response", data)
  })
});
server.listen(8000);