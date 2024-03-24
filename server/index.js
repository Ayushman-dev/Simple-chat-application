const express = require('express')
const app = express()
const http = require("http")
const cors = require('cors')
const { Server } = require("socket.io")

app.use(cors());
const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
})
io.on("connection", (socket) => {
    console.log("user connected " + socket.id);

    socket.on("join_room", (data) => {
        socket.join(data)
        console.log(socket.id + " has joined the room called " + data)
    })

    socket.on("entered", (data)=> {
        io.to(data.room).emit("userdata_reveiced", data); // Emit the message data back to the client
    });
    socket.on("send", (data)=> {
        io.to(data.room).emit("message_received", data); // Emit the message data back to the client
    });

    socket.on("disconnect", () => {
        console.log("user disconnected", socket.id)
    })
})
server.listen(3001, () => {
    console.log("server running")
})