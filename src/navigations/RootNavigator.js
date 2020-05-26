import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {
    Loading,
    Signin,
    Signup,
    Home
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

import PropTypes from 'prop-types';
import { Status } from '_constants';
import { connect } from 'react-redux';

const Stack = createStackNavigator();
const TopTab = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();


function LoginNavigator() {
    return (
        <Stack.Navigator
            headerMode={false}
            initialRouteName={NAVIGATION_TO_SIGNIN_SCREEN}
        >
            <Stack.Screen
                name={NAVIGATION_TO_SIGNIN_SCREEN}
                component={Signin}
            />
            <Stack.Screen
                name={NAVIGATION_TO_SIGNUP_SCREEN}
                component={Signup}
            />
        </Stack.Navigator>
    )
}

function HomeNavigator() {
    return (
        <Stack.Navigator
            initialRouteName={NAVIGATION_TO_HOME_SCREEN}
        >
            <Stack.Screen
                name={NAVIGATION_TO_HOME_SCREEN}
                component={Home}
            />
        </Stack.Navigator>
    );
}

function Main({ userLoggedInStatus, appLoaded }) {

    switch (true) {

        case !appLoaded:
            return <Loading />;

        case !userLoggedInStatus:
            return LoginNavigator()

        case userLoggedInStatus:
            return HomeNavigator();

        default:
            return null;
    }

}

Main.propTypes = {
    status: PropTypes.oneOf(Object.values(Status)).isRequired,
};

Main.defaultProps = {

};

const mapStateToProps = ({ auth, general }) => {
    const { signInStatus: status } = auth;
    const { isLoaded: appLoaded, userLoggedInStatus } = general;

    return {
        status,
        appLoaded,
        userLoggedInStatus
    };
};

const MainNavigator = connect(mapStateToProps)(Main);

const RootNavigator = () => (
    <NavigationContainer>
        <MainNavigator />
    </NavigationContainer>
);

export default RootNavigator;