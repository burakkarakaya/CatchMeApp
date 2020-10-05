import React from 'react';
import { PreLoader, GeneralMessage } from '_subview';
import { NavigationContainer } from '@react-navigation/native';
import {
    Loading,
} from '_scenes';

import LoginNavigator from './LoginNavigator';
import HomeNavigator from './HomeNavigator';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Main({ isLoaded, userLoggedInStatus }) {

    switch (true) {

        case !isLoaded:
            return <Loading />;

        case !userLoggedInStatus:
            return LoginNavigator();

        case userLoggedInStatus:
            return HomeNavigator();

        default:
            return null;
    }

}

Main.propTypes = {
    userLoggedInStatus: PropTypes.bool,
    isLoaded: PropTypes.bool,
};

Main.defaultProps = {
    isLoaded: false,
    userLoggedInStatus: false
};

const mapStateToProps = ({ general }) => {
    const { isLoaded, userLoggedInStatus } = general;

    return {
        isLoaded,
        userLoggedInStatus
    };
};

const MainNavigator = connect(mapStateToProps)(Main);

const RootNavigator = () => (
    <NavigationContainer>
        <GeneralMessage />
        <PreLoader />
        <MainNavigator />
    </NavigationContainer>
);

export default RootNavigator;