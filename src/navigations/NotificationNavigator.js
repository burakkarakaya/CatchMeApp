import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
    ForYou,
    Request,
    Message,
} from '_scenes';
import {
    NAVIGATION_TO_NOTIFICATION_SCREEN_FOR_YOU,
    NAVIGATION_TO_NOTIFICATION_SCREEN_REQUEST,
    NAVIGATION_TO_NOTIFICATION_SCREEN_MESSAGE,
} from './routes';

const TopTab = createMaterialTopTabNavigator();

export default function NotificationNavigator() {

    return (

        <TopTab.Navigator
            lazy={true}
            initialRouteName={NAVIGATION_TO_NOTIFICATION_SCREEN_REQUEST}
            tabBar={() => null}
        /*tabBarOptions={{
            activeTintColor: '#000000',
            inactiveTintColor: 'rgba(0,0,0,.7)',
            labelStyle: { textTransform: 'none', },
            style: { backgroundColor: 'transparent', zIndex: 2, borderBottomColor: 'rgba(0, 0, 0, 0.2)', borderBottomWidth: 1, elevation: 0 },
            indicatorStyle: { backgroundColor: '#000000' }
        }}*/
        >
            <TopTab.Screen
                options={{ tabBarLabel: 'For You' }}
                name={NAVIGATION_TO_NOTIFICATION_SCREEN_FOR_YOU}
                component={ForYou}
            />
            <TopTab.Screen
                options={{ title: 'Reguest' }}
                name={NAVIGATION_TO_NOTIFICATION_SCREEN_REQUEST}
                component={Request}
            />
            <TopTab.Screen
                options={{ title: 'Message' }}
                name={NAVIGATION_TO_NOTIFICATION_SCREEN_MESSAGE}
                component={Message}
            />
        </TopTab.Navigator>

    );
}