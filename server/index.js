const express = require('express')
const app = express();
const http = require('http')
const cors = require('cors')
const { Server } = require('socket.io')
app.use(cors())
const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ["GET", "POST"]
    }
})

io.on('connection', (socket) => {
    console.log(socket.id)
    socket.on("disconnect", () => {
        console.log("User disconnected", socket.id)
    })
    socket.on('SendMessage', (data) => {
        socket.emit('GetMessage', data)
    })
})
server.listen(3000, () => {
    console.log("server is running")
})