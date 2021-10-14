

import { DELETE_CHATROOM, GET_CHATROOMS, NEW_CHATMESSAGE, NEW_CHATROOM, TOGGLE_HAPPY } from '../actions/ChatActions';

import { ChatRooms } from '../../dummy-data/DummyData';
import ChatRoom from '../../models/ChatRoom';
/* const initialState = {
    movies: MOVIES,
    filteredMovies: MOVIES,
    favoriteMovies: [],

} */
const initialState = {
    isHappy: false,
    chatRooms: [],
}

const ChatReducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_CHATROOMS:

            return { ...state, chatRooms: action.payload };

        case TOGGLE_HAPPY:
            //state.isHappy = true // NO ITS A MUTATION
            return { ...state, isHappy: action.payload };
        case NEW_CHATROOM:
            const tempId = Math.random().toString();
            const chatRoom = new ChatRoom(tempId, undefined, action.payload, []);
            const exists = state.chatRooms.find((item) => item.chatRoomName === action.payload);

            if (!exists) {
                return { ...state, chatRooms: [...state.chatRooms, chatRoom] };
            }
            else {
                console.log('taken');
                return state;
            }

        case DELETE_CHATROOM:
            // console.log(action.payload)
            const newList = state.chatRooms.filter((item) => item.chatRoomName !== action.payload);
            // console.log('tis', newList)
            return { ...state, chatRooms: newList }


        case NEW_CHATMESSAGE:
            // Find the chatroom object based on chatroomId.    
            // Copy messages array of the right chatroom object
            // Copy chatrooms to avoid state mutations when updating the messages array in the 
            // specific chatroom object.


            const chatroom = state.chatRooms.find(room => room.chatRoomId === action.payload.chatRoomId);
            const chatmessages = [...chatroom.messages, action.payload.messageObj];






            // 2: Copy chatroom object and attach new chat array that you copied.
            const newChatRoom = { ...chatroom };
            newChatRoom.messages = chatmessages;

            //3: Insert the new chatroom object into the array of chatrooms
            // Hint: use js-array's findIndex function, to find the index in the array of the object we want.
            // js Splice method to create a new array and insert the created chatroom object.
            const index = state.chatRooms.findIndex(room => room.chatRoomId === action.payload.chatRoomId);
            const chatroomArray = [...state.chatRooms];
            chatroomArray.splice(index, 1, newChatRoom);

            return { ...state, chatRooms: chatroomArray };



        default:
            return state;
    }
}
/* const moviesReducer = (state = initialState, action) => {
    return state;
} */

export default ChatReducer;