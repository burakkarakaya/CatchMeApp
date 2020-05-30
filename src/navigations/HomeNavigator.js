import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
    NAVIGATION_TO_HOME_SCREEN,
} from './routes';
import MainNavigator from './MainNavigator';

const Stack = createStackNavigator();

export default function HomeNavigator() {
    return (
        <Stack.Navigator
            headerMode={false}
            initialRouteName={NAVIGATION_TO_HOME_SCREEN}
        >
            <Stack.Screen
                name={NAVIGATION_TO_HOME_SCREEN}
                component={MainNavigator}
            />
        </Stack.Navigator>
    );
}