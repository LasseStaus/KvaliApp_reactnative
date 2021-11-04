/* class Message {
    constructor(messageId, messageText, messageTimestamp, user) {
        this.messageId = messageId;
        this.messageText = messageText;
        this.messageTimestamp = messageTimestamp;
        this.user = user;
    }
} */



class Message {
    constructor(private messageId: String, public messageText: String, public messageTimestamp: String, public user: String) {
        this.messageId = messageId;
        this.messageText = messageText;
        this.messageTimestamp = messageTimestamp;
        this.user = user;
    }
}



export default Message;