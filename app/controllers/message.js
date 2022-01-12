var express = require("express");
const Message = require("../models/message");
var messageRoutes = express.Router();
let MessageService = require('../services/message')

const messageObj = new MessageService();

messageRoutes.get('/messages' , (req, res) => {
    res.send(messageObj.getAllMessages())
})

messageRoutes.post('/new-message' , (req, res) => {
    messageObj.addMessage(req.body)
    res.send(messageObj.getAllMessages())
})

messageRoutes.delete('/delete-message' , (req, res) => {
    messageObj.deleteMessageById(req.body.id)
    res.send(messageObj.getAllMessages())
})

module.exports = messageRoutes