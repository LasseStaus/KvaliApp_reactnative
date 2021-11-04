import { State } from "react-native-gesture-handler";
import { ChatRooms } from "../../dummy-data/DummyData";
import ChatRoom from "../../models/ChatRoom";
import Message from "../../models/Message";
import User from "../../models/User";

export const TOGGLE_HAPPY = 'TOGGLE_HAPPY';
export const NEW_CHATROOM = 'NEW_CHATROOM';
export const DELETE_CHATROOM = 'DELETE_CHATROOM';
export const NEW_CHATMESSAGE = 'NEW_CHATMESSAGE';
export const GET_CHATROOMS = 'GET_CHATROOMS';

export const toggleHappy = (isHappy) => {
    return {
        type: TOGGLE_HAPPY, payload: isHappy
    }
}

export const newChatRoom = (chatroomName) => {
    return async (dispatch, getState) => { //redux thunk
        const token = getState().user.token; //accessing token in the state  https://kvaliapp-c1e89-default-rtdb.europe-west1.firebasedatabase.app/
        const response = await fetch('https://kvaliapp-c1e89-default-rtdb.europe-west1.firebasedatabase.app/chatrooms.json?auth=' + token, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ //javascript to json
                //key value pairs of data you want to send to server(chatRoomId, imageUrl, chatRoomName, messages


                imageUrl: '',
                chatroomName: chatroomName,
                messages: ''
            })
        });
        const data = await response.json();
        console.log(data) // json to javascript
        if (!response.ok) {
            console.log('NOT ok', response)
        } else {
            dispatch({ type: NEW_CHATROOM, payload: chatroomName })
        }
    };
}


export const get_chatrooms = props => {
    return async (dispatch, getState) => { //redux thunk
        const token = getState().user.token;
        const response = await fetch('https://kvaliapp-c1e89-default-rtdb.europe-west1.firebasedatabase.app/chatrooms.json?auth=' + token, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },

        });
        const data = await response.json();
        console.log('data reponse: ', data) // json to javascript

        if (!response.ok) {
            console.log('NOT ok', response)
        } else {
            let chatRooms = [];
            for (const key in data) {
                let chatroomName = data[key].chatroomName;
                let chatroomKey = key;
                console.log('key: ', chatroomKey)
                console.log('chatroomname: ', chatroomName)
                chatRooms.push(new ChatRoom(key, '', data[key].chatroomName, ''));
            }
            dispatch({ type: GET_CHATROOMS, payload: chatRooms })
        }
    };
}

export const deleteChatRoom = (chatroomName) => {
    return {
        type: DELETE_CHATROOM, payload: chatroomName
    }
}

/* export const newChatMessage = (chatRoomId, message) => {

    const tempUser = new User('1', 'Peter Møller', 'Jensen', 'dummyUrlLink');
    const messageObj = new Message(Math.random().toString(), message, new Date(), tempUser);
    // console.log("************");
    // console.log(messageObj);
    // console.log("************");
    return { type: NEW_CHATMESSAGE, payload: { chatRoomId, messageObj } };
} */
export const newChatMessage = (chatRoomId, message) => {
    return async (dispatch, getState) => { //redux thunk
        const token = getState().user.token;
        const response = await fetch('https://kvaliapp-c1e89-default-rtdb.europe-west1.firebasedatabase.app/chatrooms/' + chatRoomId + '/messages.json?auth=' + token, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...message
            })

        });
        const data = await response.json();
        console.log('data reponse: ', data) // json to javascript

        if (!response.ok) {
            console.log('NOT ok', response)
        } else {
            dispatch({ type: NEW_CHATMESSAGE, payload: { chatRoomId, messageObj: message } })

        }

    }
};


