import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
    Video,
    Duel,
    Caption,
} from '_scenes/upload';
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
                component={Duel}
            />
            <TopTab.Screen
                name={NAVIGATION_TO_UPLOAD_CAPTION}
                component={Caption}
            />
        </TopTab.Navigator>
    );
}