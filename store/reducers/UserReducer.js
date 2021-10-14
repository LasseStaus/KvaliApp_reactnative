

import { SIGNUP } from '../actions/UserActions';
import { LOGIN } from '../actions/UserActions';

import { ChatRooms } from '../../dummy-data/DummyData';
import ChatRoom from '../../models/ChatRoom';
import User from '../../models/User';

const initialState = {
    loggedInUser: undefined,
    token: undefined

}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:

            return { ...state, loggedInUser: action.payload.user, token: action.payload.token };

        case SIGNUP:
            console.log('response data from server : ', action.payload)

            return { ...state, loggedInUser: action.payload.user, token: action.payload.token };

        default:
            return state;
    }

}
/* const moviesReducer = (state = initialState, action) => {
    return state;
} */

export default UserReducer;