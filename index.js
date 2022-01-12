const express = require("express");
const socket = require("socket.io"); // TODO : implement sockets 
const cors = require('cors');
const bodyParser = require("body-parser");

const Message = require('./app/models/message')

const PORT = 5000;
const app = express();
app.use(cors())
app.use(bodyParser.json())

const messageRoutes = require('./app/controllers/message')

app.use(messageRoutes)


const server = app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});


// // Socket setup
// const io = socket(server);

// io.on("connection", (socket) =>{
//     console.log("Made socket connection");

//     socket.on("message", function (data) {
//         console.log("New Message" , data);
//         io.emit("message", data);
//     });
// });

