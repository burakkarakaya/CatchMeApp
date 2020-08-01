import React, { useEffect } from 'react';
import {
    View,
} from 'react-native';
import { connect } from 'react-redux';
import { signIn, resetAuthState } from '_store/actions';
import { signinForm } from '_config';
import { Status } from '_constants';
import Form from '_form/Form';
import { Translation } from '_context';
import { Button } from '_UI';
import { MessageView } from '_components';
import {
    NAVIGATION_TO_SIGNUP_SCREEN,
} from '_navigations/routes';
import Container from './Container';
import PropTypes from 'prop-types';


const Main = ({ status, errorMessage, navigation, signIn: _signIn, resetAuthState: _resetAuthState }) => {
    const t = Translation('login'),
        _config = signinForm(),
        _successForm = (formData) => {
            _signIn(formData);
        },
        _onPress = ({ type = '' }) => {
            switch (type) {
                case 'forgetPassword':
                    console.warn('forgetPassword');
                    break;
                case 'loginWith':
                    console.warn('loginWith');
                    break;
                case 'registerNow':
                    navigation.navigate(NAVIGATION_TO_SIGNUP_SCREEN);
                    console.warn('registerNow');
                    break;
                default:
                    break;
            }
        };

    useEffect(() => (() => {
        // componentWillUnmount
        _resetAuthState();
    }), []);

    const renderMessage = () => {
        const message = status === Status.ERROR ? errorMessage : '';
        const type = status === Status.ERROR ? "error" : status === Status.SUCCESS ? "success" : "info";

        return (
            <MessageView
                containerStyle={{ marginTop: 20 }}
                message={message}
                type={type}
            />
        );
    };

    return (
        <Container>
            <>
                <View>
                    <Form success={_successForm} onPress={_onPress} config={_config} />
                    {renderMessage()}
                </View>


                <Button type={'grayRounded'} rightIco={'facebookIcoRounded'} onPress={_onPress} data={{ type: 'registerNow' }}>{t('signin.registerNow')}</Button>
            </>
        </Container>
    );
}

Main.propTypes = {
    status: PropTypes.oneOf(Object.values(Status)).isRequired,
    errorMessage: PropTypes.string,
    signIn: PropTypes.func.isRequired,
    resetAuthState: PropTypes.func.isRequired,
};

Main.defaultProps = {
    errorMessage: '',
};

const mapStateToProps = ({ auth }) => {
    const { signInStatus: status, signInErrorMessage: errorMessage } = auth;
    return {
        status,
        errorMessage,
    };
};

const Signin = connect(mapStateToProps, {
    signIn,
    resetAuthState,
})(Main);

export { Signin };