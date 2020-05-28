import React, { useEffect } from 'react';
import {
    View,
    Image,
    Text,
} from 'react-native';
import { connect } from 'react-redux';
import { signUp, resetAuthState } from '_store/actions';
import { images } from '_assets';
import { signupForm } from '_config';
import { Status } from '_constants';
import Form from '_form/Form';
import { Translation } from '_context';
import { MessageView } from '_components';
import * as styles from './styles';
import Container from './Container';
import PropTypes from 'prop-types';

const Main = ({ status, errorMessage, navigation, signUp: _signUp, resetAuthState: _resetAuthState }) => {
    const t = Translation('login'),
        _config = signupForm(),
        _successForm = (formData) => {
            _signUp(formData);
        },
        _onPress = ({ type = '' }) => {
            switch (type) {
                case 'registerWith':
                    console.warn('registerWith');
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
            <View style={{ flex: 1, paddingTop: 36, justifyContent: 'space-between' }}>
                <View>
                    <Image
                        style={styles.login.logo}
                        source={images.logo}
                    />
                    <Text style={styles.login.hello}>{t('signup.registering')}</Text>
                    <Form success={_successForm} onPress={_onPress} config={_config} />

                    {renderMessage()}
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.login.newTo}>{t('signup.dataPolicy')}</Text>
                    </View>
                </View>

            </View>

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

const Signup = connect(mapStateToProps, {
    signUp,
    resetAuthState,
})(Main);

export { Signup };