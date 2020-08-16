import React, { useEffect } from 'react';
import {
    View,
} from 'react-native';
import { connect } from 'react-redux';
import { resetAuthState, updateOptin } from '_store/actions';
import { signupForm } from '_config';
import { Status } from '_constants';
import {
    NAVIGATION_TO_PHONE_VERIFY,
} from '_navigations/routes';
import Form from '_form/Form';
import { Translation } from '_context';
import { Button } from '_UI';
import { MessageView } from '_components';
import { GenerateSMSVerificationCode } from '_helper';
import Container from './Container';
import PropTypes from 'prop-types';

const Main = ({ status, errorMessage, updateOptin: _updateOptin, navigation, resetAuthState: _resetAuthState }) => {
    const t = Translation('login'),
        _config = signupForm(),
        _successForm = (formData) => {
            _updateOptin({ ...formData, phone_verification: GenerateSMSVerificationCode(6) });
            navigation.navigate(NAVIGATION_TO_PHONE_VERIFY);
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

                <Button type={'grayRounded'} rightIco={'facebookIcoRounded'} onPress={_onPress} data={{ type: 'registerNow' }}>{t('signup.registerNow')}</Button>

            </>
        </Container>
    );
}

Main.propTypes = {
    status: PropTypes.oneOf(Object.values(Status)).isRequired,
    errorMessage: PropTypes.string,
    resetAuthState: PropTypes.func.isRequired,
    updateOptin: PropTypes.func.isRequired,
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

const Signup = connect(mapStateToProps, {
    resetAuthState,
    updateOptin
})(Main);

export { Signup };