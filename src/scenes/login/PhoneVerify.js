import React, { useEffect, useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';
import { connect } from 'react-redux';
import { signUp, resetAuthState } from '_store/actions';
import { personalInfoForm } from '_config';
import { Status } from '_constants';
import Form from '_form/Form';
import { Translation } from '_context';
import { Button } from '_UI';
import { MessageView, ConfirmationCodeField } from '_components';
import Container from './Container';
import PropTypes from 'prop-types';


function startTimer(duration) {
    var timer = duration, minutes, seconds;
    var stm = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        console.warn(minutes + ":" + seconds);

        if (--timer < 0) {
            clearInterval(stm);
            timer = duration;
        }
    }, 1000);
}

const Main = ({ status, errorMessage, navigation, signUp: _signUp, resetAuthState: _resetAuthState }) => {
    const t = Translation('login'),
        _config = personalInfoForm(),
        _successForm = (formData) => {
            _signUp(formData);
        },
        _onPress = ({ type = '' }) => {

            switch (type) {
                case 'registerWith':
                    console.warn('registerWith');
                    break;
                case 'termsAndConditions':
                    console.warn('termsAndConditions');
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
                    <Text style={{ marginBottom: 20 }}>Verify your phone number</Text>
                    <Text style={{ marginBottom: 40 }}>We’ve sent a verification code to +90 *** *** 04 94</Text>
                    <ConfirmationCodeField />
                    <Text>00:29</Text>
                    {renderMessage()}
                </View>
            </>
        </Container>
    );
}

Main.propTypes = {
    status: PropTypes.oneOf(Object.values(Status)).isRequired,
    errorMessage: PropTypes.string,
    signUp: PropTypes.func.isRequired,
    resetAuthState: PropTypes.func.isRequired,
};

Main.defaultProps = {
    errorMessage: '',
};

const mapStateToProps = ({ auth }) => {
    const { signUpStatus: status, signUpErrorMessage: errorMessage } = auth;
    return {
        status,
        errorMessage,
    };
};

const PhoneVerify = connect(mapStateToProps, {
    signUp,
    resetAuthState,
})(Main);

export { PhoneVerify };