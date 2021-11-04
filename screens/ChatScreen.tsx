import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import ChatRoom from '../components/ChatRoom'
import { useDispatch, useSelector } from 'react-redux';
import { newChatRoom, toggleHappy, deleteChatRoom, get_chatrooms } from '../store/actions/ChatActions';
import { onChange } from 'react-native-reanimated';

//import defaultStyles from './../styles/defaultStyles';


const ChatScreen = props => {
  const isHappy = useSelector((state:any) => state.chat.isHappy);
  const chatRooms = useSelector((state:any) => state.chat.chatRooms);

  const [text, onChangeText] = useState("");
  const dispatch = useDispatch();

  /*  useEffect(dispatch(get_chatrooms())); */
  /*   dispatch(get_chatrooms()); */
  const handleChristianHappy = () => {
    dispatch(toggleHappy(!isHappy));
  }
  React.useEffect(() => {
    dispatch(get_chatrooms());
  }, []);

  return (
    <View style={styles.container}>
      <Text>Is henrik happy? {String(isHappy)}</Text>
      <Button title="Flip Christian Happy" onPress={handleChristianHappy} />

      <Button title="Delete Chatroom" onPress={() => dispatch(deleteChatRoom(text))} />

      <TextInput style={styles.textInput} placeholder={'What should the chat be called?'} value={text} onChangeText={onChangeText} />
      <Button title="Test create chatroom" onPress={() => dispatch(newChatRoom(text))} />
      <FlatList
        data={chatRooms}
        renderItem={itemData => (
          <ChatRoom chatroom={itemData.item}></ChatRoom>
        )}
        keyExtractor={item => item.chatRoomId}
      />
    </View>
  );
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

export default ChatScreen;