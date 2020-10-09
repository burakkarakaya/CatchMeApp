import React, { useState } from 'react';
import {
    View,
    Text,
} from 'react-native';
import { connect } from 'react-redux';
import {
    showMessage
} from '_store/actions';
import { Translation } from '_context';
import {
    NAVIGATION_TO_PERSONAL_INFO,
} from '_navigations/routes';
import { Button, Header } from '_UI';
import { ConfirmationCodeField, Counter } from '_components';
import * as styles from './styles';
import Container from './Container';
import PropTypes from 'prop-types';

const Main = ({ optin: _optin, navigation, showMessage: _showMessage }) => {

    const t = Translation('login');

    const _onPress = ({ type = '' }) => {

        switch (type) {
            case 'verify':
                const { phone_verification } = _optin || {};
                try {
                    if (phone_verification === _confirmationCodeFieldRef.current.get())
                        navigation.navigate(NAVIGATION_TO_PERSONAL_INFO);
                } catch (error) {
                    console.warn(error);
                }
                break;

            case 'sendAgain':

                if (isTimeEnd);
                else
                    _showMessage({ type: 'error', data: ['Süre bitiminde tekrar sms gönderebilirsiniz'] });
                break;

            case 'back':
                if (isTimeEnd)
                    navigation.goBack();
                else
                    _showMessage({ type: 'error', data: ['Süre bitiminde geri dönebilirsiniz'] });
                break;

            default:
                break;
        }
    };

    const [isTimeEnd, setTimeEnd] = useState(false);

    const _onEnd = () => {
        setTimeEnd(true);
    };

    const _confirmationCodeFieldRef = React.useRef();

    return (

        <Container>
            <>
                <View>
                    <Header onPress={_onPress} />
                    <View style={styles.phoneVerify.container}>
                        <Text style={styles.phoneVerify.verifyPhoneNumber}>{t('phoneVerify.verifyPhoneNumber')}</Text>
                        <Text style={styles.phoneVerify.verificationCode}>{t('phoneVerify.verificationCcode')}</Text>
                        <ConfirmationCodeField ref={_confirmationCodeFieldRef} />
                        <Counter onEnd={_onEnd} style={styles.phoneVerify.counter} />
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

const mapStateToProps = ({ general }) => {
    const { optin } = general;
    return {
        optin
    };
};

const PhoneVerify = connect(mapStateToProps, {
    showMessage,
})(Main);

export { PhoneVerify };