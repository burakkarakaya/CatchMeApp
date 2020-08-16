import React, { useEffect } from 'react';
import {
    View,
    Image,
    Text
} from 'react-native';
import { connect } from 'react-redux';
import { signUp, resetAuthState } from '_store/actions';
import { personalInfoForm } from '_config';
import { Status } from '_constants';
import Form from '_form/Form';
import { Translation } from '_context';
import { Button, Header } from '_UI';
import { images } from '_assets';
import { MessageView } from '_components';
import Container from './Container';
import * as styles from './styles';
import PropTypes from 'prop-types';

const Main = ({ status, errorMessage, optin: _optin, navigation, signUp: _signUp, resetAuthState: _resetAuthState }) => {
    const t = Translation('login'),
        _config = personalInfoForm(),
        _successForm = (formData) => {
            _signUp({ ..._optin, ...formData, });
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
                    <Header mode={'mode-3'} />
                    <Image
                        style={styles.personalInfo.logo}
                        source={images.logo}
                    />
                    <Text style={styles.personalInfo.title}>{t('personalInfo.finalizePersonalInfo')}</Text>
                    <View>
                        <Form success={_successForm} onPress={_onPress} config={_config} />
                        {renderMessage()}
                    </View>
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
    optin: PropTypes.object,
};

Main.defaultProps = {
    errorMessage: '',
};

const mapStateToProps = ({ auth }) => {
    const { signUpStatus: status, signUpErrorMessage: errorMessage, optin } = auth;
    return {
        status,
        errorMessage,
        optin,
    };
};

const PersonalInfo = connect(mapStateToProps, {
    signUp,
    resetAuthState,
})(Main);

export { PersonalInfo };