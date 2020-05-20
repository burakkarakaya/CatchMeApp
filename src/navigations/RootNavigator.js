import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    Signin,
    Signup,
    Home
} from '_scenes';
import {
    NAVIGATION_TO_SIGNIN_SCREEN,
    NAVIGATION_TO_SIGNUP_SCREEN,
    NAVIGATION_TO_HOME_SCREEN,
} from './routes';

const Stack = createStackNavigator();

function StackNavigator() {
    return (
        <Stack.Navigator
            initialRouteName={NAVIGATION_TO_SIGNIN_SCREEN}
        >
            <Stack.Screen
                name={NAVIGATION_TO_SIGNIN_SCREEN}
                component={Signin}
                options={{
                    headerMode: 'none'
                }}
            />
            <Stack.Screen
                name={NAVIGATION_TO_SIGNUP_SCREEN}
                component={Signup}
                options={{
                    headerMode: 'none'
                }}
            />
            <Stack.Screen
                name={NAVIGATION_TO_HOME_SCREEN}
                component={Home}
                options={{
                    headerMode: 'none'
                }}
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

