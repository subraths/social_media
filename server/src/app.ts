import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

import router from "./router";

const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: { origin: ["http://localhost:5173"] },
});
const PORT = 5000;

app.use(express.json());
app.use(cors({ origin: ["http://localhost:5173"] }));

app.use("/", router);

io.on("connection", (socket) => {
  console.log("user connected");
  socket.on("disconnect", () => console.log("user disconnected"));
});

httpServer.listen(PORT, () => console.log("server running on port ", PORT));
