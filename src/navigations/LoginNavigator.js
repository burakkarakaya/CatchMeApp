import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
    Signin,
    Signup,
} from '_scenes';
import {
    NAVIGATION_TO_SIGNIN_SCREEN,
    NAVIGATION_TO_SIGNUP_SCREEN,
} from './routes';
import LoginTabNavigator from './LoginTabNavigator';

const Stack = createStackNavigator();

export default function LoginNavigator() {
    return (
        <Stack.Navigator
            headerMode={false}
            initialRouteName={NAVIGATION_TO_SIGNIN_SCREEN}
        >
            <Stack.Screen
                name={NAVIGATION_TO_SIGNIN_SCREEN}
                component={LoginTabNavigator}
            />
            <Stack.Screen
                name={NAVIGATION_TO_SIGNUP_SCREEN}
                component={Signup}
            />
        </Stack.Navigator>
    )
}