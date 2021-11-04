import Message from './Message';

/* class ChatRoom {
    constructor(chatRoomId, imageUrl, chatRoomName, messages) {
        this.chatRoomId = chatRoomId;
        this.imageUrl = imageUrl;
        this.chatRoomName = chatRoomName;
        this.messages = messages;
    }
}

export default ChatRoom; */

//ts
class ChatRoom {  

    // allow other people to get chatroomname even if its private. 
 /*    public get chatRoomName(): String {
        return this.chatRoomName;
    };
    public set chatRoomName(name: String) {
         if (name != ''){
            
            this.chatRoomName = name;
        } else {

        }
    };  */
 /* 
    public returnSomething() : number {
        return 12;
    } 
    */
 
    //                                                                                                          could by any[]
    constructor(public chatRoomId:String, public imageUrl: string,  public chatRoomName: String,  public messages: Message[]) {

        this.chatRoomId = chatRoomId;
        this.imageUrl = imageUrl;
        this.chatRoomName = chatRoomName; 
        this.messages = messages;
    }
}
export default ChatRoom;