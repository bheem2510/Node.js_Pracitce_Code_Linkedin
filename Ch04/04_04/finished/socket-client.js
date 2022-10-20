import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

socket.on("connect", () => {
  console.log("socket io client is connected");
});

socket.on("message", (message, id) => {
  console.log(`${id}: ${message}`);
});

process.stdin.on("data", (data) => {
  socket.emit("chat", data.toString().trim());
});
