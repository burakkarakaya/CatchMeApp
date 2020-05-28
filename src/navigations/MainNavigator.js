import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    Home
} from '_scenes';
import {
    NAVIGATION_TO_FEEDS_SCREEN,
    NAVIGATION_TO_SEARCH_SCREEN,
    NAVIGATION_TO_UPLOAD_SCREEN,
    NAVIGATION_TO_NOTIFICATION_SCREEN,
    NAVIGATION_TO_USER_PROFILE_SCREEN
} from './routes';

const BottomTab = createBottomTabNavigator();

export default function MainNavigator() {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen name={NAVIGATION_TO_FEEDS_SCREEN} component={Home} />
            <BottomTab.Screen name={NAVIGATION_TO_SEARCH_SCREEN} component={Home} />
            <BottomTab.Screen name={NAVIGATION_TO_UPLOAD_SCREEN} component={Home} />
            <BottomTab.Screen name={NAVIGATION_TO_NOTIFICATION_SCREEN} component={Home} />
            <BottomTab.Screen name={NAVIGATION_TO_USER_PROFILE_SCREEN} component={Home} />
        </BottomTab.Navigator>
    );
}