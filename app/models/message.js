class Message {
    #id = 0 ; 
    #sender = "";
    #content = "";
    #date = "";

    constructor(id  ,sender , content , date) {
        this.#id = id ;
        this.#sender = sender;
        this.#content = content;
        this.#date = date;
    }
    
    getMessage = () => {
        return {
            id : this.#id, 
            sender : this.#sender,
            content : this.#content ,
            date: this.#date
        }
    };  
}

module.exports = Message