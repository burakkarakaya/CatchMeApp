import React from 'react';
import {
    View,
    Image
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
    Signin,
    Signup,
} from '_scenes';
import {
    NAVIGATION_TO_LOGGININ,
    NAVIGATION_TO_REGISTER,
} from './routes';
import {
    Layout,
} from '_constants';
import { images } from '_assets';
import { Translation } from '_context';

const TopTab = createMaterialTopTabNavigator();

export default function LoginTabNavigator() {

    const t = Translation('feeds');

    const _positionTop = Layout.feedsTabbarPosition();

    return (
        <View style={{ backgroundColor: '#FFFFFF', flex: 1, paddingTop: _positionTop + 20 }}>
            <Image
                style={{ width: 174, height: 51, alignSelf: 'center', marginBottom: 12, }}
                source={images.logo}
            />
            <TopTab.Navigator
                swipeEnabled={false}
                lazy={true}
                headerMode={false}
                tabBarOptions={{
                    activeTintColor: '#000000',
                    inactiveTintColor: 'rgba(0,0,0,.7)',
                    labelStyle: { textTransform: 'none', },
                    tabStyle: { width: 'auto', flex: 0 },
                    style: { backgroundColor: 'transparent', zIndex: 2, borderBottomColor: 'rgba(0, 0, 0, 0.2)', borderBottomWidth: 1, elevation: 0 },
                    indicatorStyle: { backgroundColor: '#000000' }
                }}
            >
                <TopTab.Screen
                    options={{ title: 'Loggin In' }}
                    name={NAVIGATION_TO_LOGGININ}
                    component={Signin}
                />
                <TopTab.Screen
                    options={{ title: 'Register' }}
                    name={NAVIGATION_TO_REGISTER}
                    component={Signup}
                />

            </TopTab.Navigator>
        </View>
    );
}