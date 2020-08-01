import React, { useState, useImperativeHandle } from 'react';
import { TextInput } from 'react-native';
import Container from './Container';
import * as styles from '../styles/';
import IntlPhoneInput from 'react-native-intl-phone-input';
import PropTypes from 'prop-types';

function PhoneField({ title, style, defValue, props }, ref) {

    useImperativeHandle(ref, () => {
        const obj = {
            reset: () => {
                setValue('');
            },
            get: () => {
                return value;
            },
            set: (k) => {
                setValue(k);
            },
            showError: (k) => {
                container.current.showError(k);
            },
            hideError: () => {
                container.current.hideError();
            }
        };

        return obj;
    });

    const [value, setValue] = useState(defValue);
    const container = React.useRef();
    const _style = style.textField || {};


    const _onChangeText = ({ dialCode, unmaskedPhoneNumber, phoneNumber, isVerified }) => {
            setValue(dialCode + unmaskedPhoneNumber);

        console.warn(dialCode, unmaskedPhoneNumber, phoneNumber, isVerified)
    }

    return (
        <Container style={style} ref={container} title={title}>
            <IntlPhoneInput onChangeText={_onChangeText} defaultCountry="TR" />
        </Container>
    );
};

PhoneField = React.forwardRef(PhoneField);

PhoneField.defaultProps = {
    defValue: '',
    title: '',
    props: {},
    style: {},
};

PhoneField.propTypes = {
    defValue: PropTypes.string,
    title: PropTypes.string,
    props: PropTypes.object,
    style: PropTypes.object,
};

export { PhoneField };