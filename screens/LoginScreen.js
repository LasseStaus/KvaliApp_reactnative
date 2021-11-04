import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TextInput, TextInputField } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import ChatRoom from './../components/ChatRoom'
import { useDispatch, useSelector } from 'react-redux';
import { newChatRoom, toggleHappy, deleteChatRoom } from './../store/actions/ChatActions';
import { onChange } from 'react-native-reanimated';

import { login, refreshToken, restoreUser } from '../store/actions/UserActions';
import { SafeAreaView } from 'react-native'
import * as SecureStore from 'expo-secure-store';

//import defaultStyles from './../styles/defaultStyles';




const LoginScreen = props => {
    /*     const isHappy = useSelector(state => state.chat.isHappy);
        const [text, onChangeText] = useState(""); */

    const [email, onChangeEmail] = useState("");
    const [password, onChangePassword] = useState("");

    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(login(email, password));
        console.log('signup this user: ', email, password)

    };
    React.useEffect(() => {
        // Fetch the token from storage then navigate to our appropriate place
        const bootstrapAsync = async () => {
            let userToken, user, expiration, refreshTokenString;

            try {
                expiration = new Date(JSON.parse(await SecureStore.getItemAsync('expiration')));

                // if expiration.....
                console.log("expiration", expiration);
                console.log("now", new Date());
                if (expiration < new Date()) { // then it is expired
                    console.log("refresh token");
                    refreshTokenString = await SecureStore.getItemAsync('refreshToken');
                    dispatch(refreshToken(refreshTokenString));
                }
                console.log("no refresh token");

                userToken = await SecureStore.getItemAsync('userToken');
                user = JSON.parse(await SecureStore.getItemAsync('user'));

                // console.log(userToken);
                // console.log(user);
                // console.log(expiration);
            } catch (e) {
                // Restoring token failed
                console.log("restore token failed");
                console.log(e);
            }

            dispatch(restoreUser(user, userToken));
        };

        bootstrapAsync();
    }, []);

    return (


        <SafeAreaView style={styles.container}>
            <Text>Login</Text>
            <TextInput
                style={styles.textInput}
                iconName='person'
                iconType='MaterialIcons'
                placeholder='Enter your email here'
                value={email}
                onChangeText={onChangeEmail} />
            <TextInput style={styles.textInput} placeholder={'enter your password here!'} value={password} onChangeText={onChangePassword} />
            <Button title='Submit' onPress={() => handleLogin(email, password)} />
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    textInput: {
        padding: 15,
        maxWidth: 250,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1
    },

});

export default LoginScreen;