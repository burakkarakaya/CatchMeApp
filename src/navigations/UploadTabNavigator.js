import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
    Video,
} from '_scenes';
import {
    NAVIGATION_TO_UPLOAD_VIDEO,
    NAVIGATION_TO_UPLOAD_DUEL,
    NAVIGATION_TO_UPLOAD_CAPTION
} from './routes';

const TopTab = createMaterialTopTabNavigator();

export default function UploadTabNavigator() {

    return (

        <TopTab.Navigator
            swipeEnabled={false}
            lazy={true}
            tabBar={() => null}
            headerMode={false}
        >
            <TopTab.Screen
                name={NAVIGATION_TO_UPLOAD_VIDEO}
                component={Video}
            />
            <TopTab.Screen
                name={NAVIGATION_TO_UPLOAD_DUEL}
                component={Video}
            />
            <TopTab.Screen
                name={NAVIGATION_TO_UPLOAD_CAPTION}
                component={Video}
            />
        </TopTab.Navigator>
    );
}