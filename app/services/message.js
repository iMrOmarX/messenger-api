const Message = require("../models/message")

class MessageService {
    #listOfMessages = []
    #availableId = 4

    constructor() {
        this.#listOfMessages = [
            new Message(1 ,"Omar" , "hello " , '2021-12-29T19:09'),
            new Message(2 ,"Ali" , "hello " , '2021-12-29T19:09'),
            new Message(3 ,"Mohd" , "hello " , '2021-12-29T19:09'),
        ]
    }

    getAllMessages() {
        let sentMessages = this.#listOfMessages.map((message) => message.getMessage())
        
        return sentMessages
    }
    
    getAvailableId() {
        return this.#availableId
    }

    addMessage(message) {
        let newMessage = new Message(this.#availableId , message.sender , message.content,  message.date)
        
        this.#listOfMessages.push(newMessage)
        this.#availableId++;
    }

    deleteMessageById(id) {
        this.#listOfMessages = this.#listOfMessages.filter((message) => message.getMessage().id != id);
    }
}

module.exports = MessageService