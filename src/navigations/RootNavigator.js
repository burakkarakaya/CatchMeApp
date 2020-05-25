import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {
    Loading,
    Signin,
    Signup,
    Home as Main
} from '_scenes';
import {
    NAVIGATION_TO_LOADING_SCREEN,
    NAVIGATION_TO_SIGNIN_SCREEN,
    NAVIGATION_TO_SIGNUP_SCREEN,
    NAVIGATION_TO_HOME_SCREEN,
    NAVIGATION_TO_FEEDS_SCREEN,
    NAVIGATION_TO_FORYOU_SCREEN,
    NAVIGATION_TO_FOLLOWING_SCREEN,
    NAVIGATION_TO_RECENT_SCREEN,
    NAVIGATION_TO_SEARCH_SCREEN,
    NAVIGATION_TO_UPLOAD_SCREEN,
    NAVIGATION_TO_NOTIFICATION_SCREEN,
    NAVIGATION_TO_USER_PROFILE_SCREEN
} from './routes';

const TopTab = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();


function Feeds() {
    return (
        <TopTab.Navigator
            tabBarOptions={{
                style: { backgroundColor: 'transparent', position: 'absolute', top: 0, left: 0, right: 0, zIndex: 2  },
            }}
        >
            <TopTab.Screen name={NAVIGATION_TO_FORYOU_SCREEN} component={Main} />
            <TopTab.Screen name={NAVIGATION_TO_FOLLOWING_SCREEN} component={Main} />
            <TopTab.Screen name={NAVIGATION_TO_RECENT_SCREEN} component={Main} />
        </TopTab.Navigator>
    );
}



function Home() {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen name={NAVIGATION_TO_FEEDS_SCREEN} component={Feeds} />
            <BottomTab.Screen name={NAVIGATION_TO_SEARCH_SCREEN} component={Main} />
            <BottomTab.Screen name={NAVIGATION_TO_UPLOAD_SCREEN} component={Main} />
            <BottomTab.Screen name={NAVIGATION_TO_NOTIFICATION_SCREEN} component={Main} />
            <BottomTab.Screen name={NAVIGATION_TO_USER_PROFILE_SCREEN} component={Main} />
        </BottomTab.Navigator>
    );
}


function StackNavigator() {

    /* https://reactnavigation.org/docs/auth-flow/ */

    return (
        <Stack.Navigator
            initialRouteName={NAVIGATION_TO_LOADING_SCREEN}
        >
            <>
                <Stack.Screen
                    name={NAVIGATION_TO_LOADING_SCREEN}
                    component={Loading}
                />
                <Stack.Screen
                    name={NAVIGATION_TO_SIGNIN_SCREEN}
                    component={Signin}
                />
                <Stack.Screen
                    name={NAVIGATION_TO_SIGNUP_SCREEN}
                    component={Signup}
                />
            </>
            <Stack.Screen
                name={NAVIGATION_TO_HOME_SCREEN}
                component={Home}
            />
        </Stack.Navigator>
    );
}

const RootNavigator = () => (
    <NavigationContainer>
        <StackNavigator />
    </NavigationContainer>
);

export default RootNavigator;

