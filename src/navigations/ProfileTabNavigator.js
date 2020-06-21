import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
    Deulings,
    Deuled,
} from '_scenes';
import {
    NAVIGATION_TO_FORYOU_SCREEN,
    NAVIGATION_TO_FOLLOWING_SCREEN,
} from './routes';

const TopTab = createMaterialTopTabNavigator();

export default function ProfileTabNavigator() {

    return (
        <TopTab.Navigator
            lazy={true}
            tabBarOptions={{
                activeTintColor: '#000000',
                inactiveTintColor: 'rgba(0,0,0,.7)',
                labelStyle: { textTransform: 'none', },
                style: { backgroundColor: 'transparent', zIndex: 2, borderBottomColor: 'rgba(0, 0, 0, 0.2)', borderBottomWidth: 1 },
                indicatorStyle: { backgroundColor: '#000000' }
            }}
        >
            <TopTab.Screen
                options={{ tabBarLabel: 'My Deulings' }}
                name={NAVIGATION_TO_FORYOU_SCREEN}
                component={Deulings}
            />
            <TopTab.Screen
                options={{ title: 'Deuled' }}
                name={NAVIGATION_TO_FOLLOWING_SCREEN}
                component={Deuled}
            />
        </TopTab.Navigator>
    );
}