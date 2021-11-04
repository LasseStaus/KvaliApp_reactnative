import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from './../store/actions/UserActions';

const MenuScreen = props => {
   const dispatch = useDispatch();

   return (
      <View style={styles.container}>
         <Text>Menu screen</Text>
         <Button title="Log out" onPress={() => dispatch(logout())}></Button>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   },
})

export default MenuScreen;