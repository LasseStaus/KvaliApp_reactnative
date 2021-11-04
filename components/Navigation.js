import React from 'react';

import { View, Text, Button, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';



import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ChatStackNavigator from './ChatStackNavigator';

import HomeScreen from './../screens/HomeScreen';

import DiscoverScreen from './../screens/DiscoverScreen';

import MenuScreen from './../screens/MenuScreen';

import { HeaderShownContext } from '@react-navigation/elements';

import SignupScreen from './../screens/SignupScreen';

import { useSelector } from 'react-redux';
import LoginScreen from '../screens/LoginScreen';



const Navigation = props => {

    const Stack = createNativeStackNavigator();

    const Tab = createBottomTabNavigator();

    const loggedInUser = useSelector(state => state.user.loggedInUser);

    console.log(loggedInUser);



    return (

        <NavigationContainer>

            {loggedInUser !== undefined ? (

                <Tab.Navigator screenOptions={{ headerShown: false }}>

                    <Tab.Screen name="Home" component={HomeScreen} />

                    <Tab.Screen name="Discover" component={DiscoverScreen} />

                    <Tab.Screen name="ChatOuter" component={ChatStackNavigator} />

                    <Tab.Screen name="Menu" component={MenuScreen} />

                </Tab.Navigator>

            ) : (

                <Tab.Navigator >

                    <Tab.Screen name="Login" component={LoginScreen} />
                    <Tab.Screen name="Signup" component={SignupScreen} />


                </Tab.Navigator>

                /*                <Stack.Navigator>
               
                                   <Stack.Screen name="Signup" component={SignupScreen} />
               
                               </Stack.Navigator> */

            )}

        </NavigationContainer>

    );

}



const styles = StyleSheet.create({

});



export default Navigation;