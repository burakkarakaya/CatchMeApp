import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
    Feeds
} from '_scenes';
import {
    NAVIGATION_TO_FORYOU_SCREEN,
    NAVIGATION_TO_FOLLOWING_SCREEN,
    NAVIGATION_TO_RECENT_SCREEN,
} from './routes';
import { 
    Layout,
} from '_constants';

const TopTab = createMaterialTopTabNavigator();

export default function FeedsNavigator() {

    const _insetsTop = Layout.insets().top || 0;

    return (
        <TopTab.Navigator
            lazy={true}
            headerMode={false}
            tabBarOptions={{
                activeTintColor: '#FFFFFF',
                inactiveTintColor: 'rgba(255,255,255,.7)',
                labelStyle: { textTransform: 'none', },
                tabStyle: { width: 'auto', flex: 0 },
                style: { backgroundColor: 'transparent', position: 'absolute', top: _insetsTop, left: 0, right: 0, zIndex: 2, borderBottomColor: 'rgba(255, 255, 255, 0.2)', borderBottomWidth: 1, paddingLeft: 18 },
                indicatorStyle: { backgroundColor: '#FFFFFF', marginLeft: 18 }
            }}
        >
            <TopTab.Screen
                options={{ tabBarLabel: 'For You' }}
                name={NAVIGATION_TO_FORYOU_SCREEN}
                component={Feeds}
            />
            <TopTab.Screen
                options={{ title: 'Following' }}
                name={NAVIGATION_TO_FOLLOWING_SCREEN}
                component={Feeds}
            />
            <TopTab.Screen
                options={{ title: 'Recent' }}
                name={NAVIGATION_TO_RECENT_SCREEN}
                component={Feeds}
            />
        </TopTab.Navigator>
    );
}