import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import { connect } from 'react-redux';
import { signUp } from '_store/actions';
import { personalInfoForm } from '_config';
import { Translation } from '_context';
import {
    NAVIGATION_TO_PERSONAL_INFO,
} from '_navigations/routes';
import { Button, Header } from '_UI';
import { ConfirmationCodeField, Counter } from '_components';
import * as styles from './styles';
import Container from './Container';
import PropTypes from 'prop-types';

const Main = ({ optin: _optin, navigation, }) => {
    const t = Translation('login'),
        _config = personalInfoForm(),
        _onPress = ({ type = '' }) => {

            switch (type) {
                case 'verify':
                    const { phone_verification } = _optin || {};
                    console.warn(phone_verification, _confirmationCodeFieldRef.current.get())
                    try {
                        if (phone_verification === _confirmationCodeFieldRef.current.get())
                            navigation.navigate(NAVIGATION_TO_PERSONAL_INFO);
                    } catch (error) {
                        console.warn(error);
                    }
                    break;
                case 'sendAgain':
                    console.warn('sendAgain');
                    break;
                default:
                    break;
            }
        };

    const _confirmationCodeFieldRef = React.useRef();

    return (

        <Container>
            <>
                <View>
                    <Header navigation={navigation} />
                    <View style={styles.phoneVerify.container}>
                        <Text style={styles.phoneVerify.verifyPhoneNumber}>{t('phoneVerify.verifyPhoneNumber')}</Text>
                        <Text style={styles.phoneVerify.verificationCode}>{t('phoneVerify.verificationCcode')}</Text>
                        <ConfirmationCodeField ref={_confirmationCodeFieldRef} />
                        <Counter style={styles.phoneVerify.counter} />
                    </View>
                </View>

                <View>
                    <Text style={styles.phoneVerify.receiveCode}>{t('phoneVerify.receiveCode')}</Text>
                    <Button data={{ type: 'sendAgain' }} type={'underlineBlue'} onPress={_onPress} style={styles.phoneVerify.sendAgain}>{t('phoneVerify.sendAgain')}</Button>
                    <Button data={{ type: 'verify' }} type={'solidLarge'} onPress={_onPress} style={styles.phoneVerify.verify}>{t('phoneVerify.verify')}</Button>
                </View>
            </>
        </Container>
    );
}

Main.propTypes = {
    optin: PropTypes.object
};

Main.defaultProps = {
    optin: {}
};

const mapStateToProps = ({ auth }) => {
    const { optin } = auth;
    return {
        optin
    };
};

const PhoneVerify = connect(mapStateToProps, {
    signUp,
})(Main);

export { PhoneVerify };