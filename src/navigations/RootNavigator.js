import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    Loading,
    Signin,
    Signup,
    Home
} from '_scenes';
import {
    NAVIGATION_TO_LOADING_SCREEN,
    NAVIGATION_TO_SIGNIN_SCREEN,
    NAVIGATION_TO_SIGNUP_SCREEN,
    NAVIGATION_TO_HOME_SCREEN,
} from './routes';

const Stack = createStackNavigator();

function StackNavigator() {
    return (
        <Stack.Navigator
            initialRouteName={NAVIGATION_TO_LOADING_SCREEN}
        >
            <Stack.Screen
                name={NAVIGATION_TO_LOADING_SCREEN}
                component={Loading}
            />
            
            <Stack.Screen
                name={NAVIGATION_TO_SIGNIN_SCREEN}
                component={Signin}
            />
            <Stack.Screen
                name={NAVIGATION_TO_SIGNUP_SCREEN}
                component={Signup}
            />
            <Stack.Screen
                name={NAVIGATION_TO_HOME_SCREEN}
                component={Home}
            />
        </Stack.Navigator>
    );
}

const RootNavigator = () => (
    <NavigationContainer>
        <StackNavigator />
    </NavigationContainer>
);

export default RootNavigator;

