import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TextInput, TextInputField } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import ChatRoom from './../components/ChatRoom'
import { useDispatch, useSelector } from 'react-redux';
import { newChatRoom, toggleHappy, deleteChatRoom } from './../store/actions/ChatActions';
import { onChange } from 'react-native-reanimated';
import { newSignup } from './../store/actions/UserActions';
import { SafeAreaView } from 'react-native'

//import defaultStyles from './../styles/defaultStyles';


const SignupScreen = props => {
    /*     const isHappy = useSelector(state => state.chat.isHappy);
        const [text, onChangeText] = useState(""); */

    const [email, onChangeEmail] = useState("");
    const [password, onChangePassword] = useState("");




    const dispatch = useDispatch();

    const handleSignup = () => {
        dispatch(newSignup(email, password));
        console.log('signup this user: ', email, password)

    };



    return (
        <SafeAreaView style={styles.container}>
            <Text>Signup</Text>
            <TextInput
                style={styles.textInput}
                iconName='person'
                iconType='MaterialIcons'
                placeholder='Enter your email here'
                value={email}
                onChangeText={onChangeEmail} />
            <TextInput style={styles.textInput} placeholder={'enter your password here!'} value={password} onChangeText={onChangePassword} />
            <Button title='Submit' onPress={() => handleSignup(email, password)} />
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

export default SignupScreen;