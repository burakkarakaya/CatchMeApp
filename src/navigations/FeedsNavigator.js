import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
/*import {
    FeedItem
} from '_scenes';*/
import {
    FeedItem
} from '../subview';
import {
    NAVIGATION_TO_FORYOU_SCREEN,
    NAVIGATION_TO_FOLLOWING_SCREEN,
    NAVIGATION_TO_RECENT_SCREEN,
} from './routes';
import { useSafeArea } from 'react-native-safe-area-context';

const TopTab = createMaterialTopTabNavigator();

export default function FeedsNavigator() {

    const _insetTop = (useSafeArea() || {}).top || 0;

    return (
        <TopTab.Navigator
            lazy={true}
            tabBarOptions={{
                activeTintColor: '#FFFFFF',
                inactiveTintColor: 'rgba(255,255,255,.7)',
                labelStyle: { textTransform: 'none', },
                tabStyle: { width: 'auto', flex: 0 },
                style: { backgroundColor: 'transparent', position: 'absolute', top: _insetTop, left: 0, right: 0, zIndex: 2, borderBottomColor: 'rgba(255, 255, 255, 0.2)', borderBottomWidth: 1, paddingLeft: 18 },
                indicatorStyle: { backgroundColor: '#FFFFFF', marginLeft: 18 }
            }}
        >
            <TopTab.Screen
                options={{ tabBarLabel: 'For You' }}
                name={NAVIGATION_TO_FORYOU_SCREEN}
                component={FeedItem}
            />
            <TopTab.Screen
                options={{ title: 'Following' }}
                name={NAVIGATION_TO_FOLLOWING_SCREEN}
                component={FeedItem}
            />
            <TopTab.Screen
                options={{ title: 'Recent' }}
                name={NAVIGATION_TO_RECENT_SCREEN}
                component={FeedItem}
            />
        </TopTab.Navigator>
    );
}