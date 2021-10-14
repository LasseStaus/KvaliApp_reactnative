import { State } from "react-native-gesture-handler";
import { ChatRooms } from "../../dummy-data/DummyData";
import Message from "../../models/Message";
import User from "../../models/User";
import { api_key } from '../../APIKEYS/apikey'

export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';

export const newSignup = (email, password) => {
    console.log('signup this user: ', email, password)

    return async dispatch => { //redux thunk
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + api_key, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ //javascript to json
                //key value pairs of data you want to send to server
                email: email,
                password: password,
                returnSecureToken: true
            })
        });

        const data = await response.json();
        console.log(data) // json to javascript
        if (!response.ok) {
            //There was a problem..

            console.log('NOT ok', response)
        } else {

            /*      const data = await response.json(); */ // json to javascript
            console.log(data);

            //  dispatch({ type: SIGNUP, payload: data })
            let user = new User(data.localId, '', '', '', email);

            dispatch({ type: SIGNUP, payload: { user, token: data.idToken } })
        }
    };
};

export const login = (email, password) => {
    console.log('signup this user: ', email, password)

    return async dispatch => { //redux thunk
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + api_key, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ //javascript to json
                //key value pairs of data you want to send to server
                email: email,
                password: password,

                // ...
                returnSecureToken: true
            })
        });
        const data = await response.json();
        console.log(data) // json to javascript
        if (!response.ok) {

            console.log('NOT ok', response)
            console.log('Error Message', data.error.message);
        } else {
            let user = new User(data.localId, '', '', '', email);

            dispatch({ type: LOGIN, payload: { user, token: data.idToken } })
        }
    };
};



