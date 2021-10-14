import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatStackNavigator from './components/ChatStackNavigator';
import HomeScreen from './screens/HomeScreen';
import DiscoverScreen from './screens/DiscoverScreen';
import MenuScreen from './screens/MenuScreen';
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';
import { HeaderShownContext } from '@react-navigation/elements';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import ChatReducer from './store/reducers/ChatReducer';
import UserReducer from './store/reducers/UserReducer';
import { Provider, useSelector } from 'react-redux';
import ReduxThunx from 'redux-thunk';
import { State } from 'react-native-gesture-handler';
import ChatScreen from './screens/ChatScreen';
import Navigation from './components/Navigation';

export default function App() {

  const rootReducer = combineReducers({
    chat: ChatReducer,
    user: UserReducer
  })

  const store = createStore(rootReducer, applyMiddleware(ReduxThunx));



  return (
    <Provider store={store}>
      <Navigation></Navigation>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
