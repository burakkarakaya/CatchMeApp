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
import { GenerateSMSVerificationCode } from '_helper';
import {
    CommunicationService,
} from '_services';
import * as styles from './styles';
import Container from './Container';
import PropTypes from 'prop-types';

const Main = ({ optin: _optin, navigation, showMessage: _showMessage }) => {

    console.warn(_optin.phone_verification)

    const t = Translation('login');

    const _onPress = ({ type = '' }) => {

        switch (type) {

            case 'verify': {

                const isTimeEnd = _counterRef.current.get();

                const { phone_verification } = _optin || {};

                if (isTimeEnd) {
                    _showMessage({ type: 'error', data: [t('phoneVerify.errorExpiredPassword')] });
                } else {
                    if (phone_verification === _confirmationCodeFieldRef.current.get())
                        navigation.navigate(NAVIGATION_TO_PERSONAL_INFO);
                    else
                        _showMessage({ type: 'error', data: [t('phoneVerify.errorPasswordInCorrect')] });
                }


                break;
            }

            case 'sendAgain': {

                const isTimeEnd = _counterRef.current.get();

                if (isTimeEnd) {
                    // sms yollama kodu once yeniden generate edip sonra tekrar yollamak
                    _counterRef.current.reset();
                    _confirmationCodeFieldRef.current.reset();
                    const smsCode = GenerateSMSVerificationCode(6);
                    //const isSmsCheck = await CommunicationService.Sendsms({ validationCode: smsCode, culture: 'tr', textTemplateType: t('phoneVerify.sendSmsTextTemplateType').replace(/{smsCode}/g, smsCode) })
                    console.warn(smsCode);

                } else
                    _showMessage({ type: 'error', data: [t('phoneVerify.errorSendAgainSms')] });
                break;

            }

            case 'back': {
                const isTimeEnd = _counterRef.current.get();

                if (isTimeEnd)
                    navigation.goBack();
                else
                    _showMessage({ type: 'error', data: [t('phoneVerify.errorReturnBack')] });
                break;

            }

            default:
                break;
        }
    };

    const _confirmationCodeFieldRef = React.useRef();

    const _counterRef = React.useRef();

    return (

        <Container>
            <>
                <View>
                    <Header onPress={_onPress} />
                    <View style={styles.phoneVerify.container}>
                        <Text style={styles.phoneVerify.verifyPhoneNumber}>{t('phoneVerify.verifyPhoneNumber')}</Text>
                        <Text style={styles.phoneVerify.verificationCode}>{t('phoneVerify.verificationCcode')}</Text>
                        <ConfirmationCodeField ref={_confirmationCodeFieldRef} />
                        <Counter ref={_counterRef} style={styles.phoneVerify.counter} />
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