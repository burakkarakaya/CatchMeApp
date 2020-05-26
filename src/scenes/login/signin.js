import React, { useEffect } from 'react';
import {
    View,
    Image,
    Text,
} from 'react-native';
import { connect } from 'react-redux';
import { signIn, resetAuthState } from '_store/actions';
import { images } from '_assets';
import { signinForm } from '_config';
import { Status } from '_constants';
import Form from '_form/Form';
import { Translation } from '_context';
import { Button } from '_UI';
import { MessageView } from '_components';
import { 
    NAVIGATION_TO_SIGNUP_SCREEN,
    NAVIGATION_TO_HOME_SCREEN,
} from '_navigations/routes';
import * as styles from './styles';
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

    useEffect(() => {
        /*if (status === Status.SUCCESS) {
            navigation.navigate(NAVIGATION_TO_HOME_SCREEN);
        }*/
    }, [status]);


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
                    <Text style={styles.login.hello}>{t('signin.hello')}</Text>
                    <Text style={styles.login.enterInformation}>{t('signin.enterInformation')}</Text>
                    <Form success={_successForm} onPress={_onPress} config={_config} />

                    {renderMessage()}
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.login.newTo}>{t('signin.newTo')}</Text>

                        <Button type={'underlineBlue'} onPress={_onPress} data={{ type: 'registerNow' }}>{t('signin.registerNow')}</Button>
                    </View>
                </View>

            </View>

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