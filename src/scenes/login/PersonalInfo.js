import React, { useEffect } from 'react';
import {
    View,
} from 'react-native';
import { connect } from 'react-redux';
import { signUp, resetAuthState } from '_store/actions';
import { personalInfoForm } from '_config';
import { Status } from '_constants';
import Form from '_form/Form';
import { Translation } from '_context';
import { Button } from '_UI';
import { MessageView } from '_components';
import Container from './Container';
import PropTypes from 'prop-types';

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
                    <Form success={_successForm} onPress={_onPress} config={_config} />
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

const PersonalInfo = connect(mapStateToProps, {
    signUp,
    resetAuthState,
})(Main);

export { PersonalInfo };