import React, { useEffect } from 'react';
import {
    View,
    Image,
    Text,
} from 'react-native';
import { connect } from 'react-redux';
import { signIn, resetAuthState, isLoaded } from '_store/actions';
import { Status } from '_constants';
import {
    NAVIGATION_TO_SIGNIN_SCREEN,
    NAVIGATION_TO_HOME_SCREEN,
} from '_navigations/routes';
import * as styles from './styles';
import Container from './Container';
import { Customers } from '_services/base';
import PropTypes from 'prop-types';
import { useIsFocused } from '@react-navigation/native';

import { assetsLoader, typography } from '_module';


const Main = ({ status, navigation, isLoaded: _isLoaded, signIn: _signIn, resetAuthState: _resetAuthState }) => {

    /* const isFocused = useIsFocused();*/

    useEffect(() => {
        const getUser = async () => {

            try {
                const user = await Customers.getUser();
                _signIn(user);

            } catch (error) {

            }
        };

        assetsLoader()
            .then(() => {
                typography();

                getUser();
            });

    }, []);

    useEffect(() => {

        /*if (isFocused) {
            if (status === Status.SUCCESS)
                navigation.navigate(NAVIGATION_TO_HOME_SCREEN);
            else if (status === Status.ERROR)
                navigation.navigate(NAVIGATION_TO_SIGNIN_SCREEN);
        }

        return () => {

            isFocused && _resetAuthState();
        }*/


        if (status === Status.SUCCESS || status === Status.ERROR)
            _isLoaded(true);

        return () => {
            _resetAuthState();
        }

    }, [status]);


    return (
        <Container>
            <Text>{'loading...'}</Text>
        </Container>
    );
}

Main.propTypes = {
    status: PropTypes.oneOf(Object.values(Status)).isRequired,
    signIn: PropTypes.func.isRequired,
    resetAuthState: PropTypes.func.isRequired,
};

Main.defaultProps = {

};

const mapStateToProps = ({ auth }) => {
    const { signInStatus: status, signInErrorMessage: errorMessage } = auth;
    return {
        status,
        errorMessage,
    };
};

const Loading = connect(mapStateToProps, {
    signIn,
    resetAuthState,
    isLoaded
})(Main);

export { Loading };