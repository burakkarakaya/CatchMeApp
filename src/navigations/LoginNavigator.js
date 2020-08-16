import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
    PersonalInfo,
    PhoneVerify
} from '_scenes';
import {
    NAVIGATION_TO_LOGIN_NAVIGATOR,
    NAVIGATION_TO_PHONE_VERIFY,
    NAVIGATION_TO_PERSONAL_INFO,
} from './routes';
import LoginTabNavigator from './LoginTabNavigator';

const Stack = createStackNavigator();

export default function LoginNavigator() {
    return (
        <Stack.Navigator
            headerMode={false}
            initialRouteName={NAVIGATION_TO_LOGIN_NAVIGATOR}
        >
            <Stack.Screen
                name={NAVIGATION_TO_LOGIN_NAVIGATOR}
                component={LoginTabNavigator}
            />
            <Stack.Screen
                name={NAVIGATION_TO_PHONE_VERIFY}
                component={PhoneVerify}
            />
            <Stack.Screen
                name={NAVIGATION_TO_PERSONAL_INFO}
                component={PersonalInfo}
            />
        </Stack.Navigator>
    )
}