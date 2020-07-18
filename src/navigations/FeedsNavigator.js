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
import {
    FeedConfig,
} from '_config';
import { Translation } from '_context';

const TopTab = createMaterialTopTabNavigator();

export default function FeedsNavigator() {

    const t = Translation('feeds');

    const _positionTop = Layout.feedsTabbarPosition();

    return (
        <TopTab.Navigator
            lazy={true}
            headerMode={false}
            tabBarOptions={{
                activeTintColor: '#FFFFFF',
                inactiveTintColor: 'rgba(255,255,255,.7)',
                labelStyle: { textTransform: 'none', },
                tabStyle: { width: 'auto', flex: 0 },
                style: { backgroundColor: 'transparent', position: 'absolute', top: _positionTop, left: 0, right: 0, zIndex: 2, borderBottomColor: 'rgba(255, 255, 255, 0.2)', borderBottomWidth: 1, paddingLeft: 18 },
                indicatorStyle: { backgroundColor: '#FFFFFF', marginLeft: 18 }
            }}
        >
            <TopTab.Screen
                options={{ title: t('forYou') }}
                name={NAVIGATION_TO_FORYOU_SCREEN}>
                {props => <Feeds {...props} config={FeedConfig.forYou} />}
            </TopTab.Screen>

            <TopTab.Screen
                options={{ title: t('following') }}
                name={NAVIGATION_TO_FOLLOWING_SCREEN}>
                {props => <Feeds {...props} config={FeedConfig.following} />}
            </TopTab.Screen>

            <TopTab.Screen
                options={{ title: t('recent') }}
                name={NAVIGATION_TO_RECENT_SCREEN}>
                {props => <Feeds {...props} config={FeedConfig.recent} />}
            </TopTab.Screen>

        </TopTab.Navigator>
    );
}