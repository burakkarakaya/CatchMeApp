import React, { useState, useImperativeHandle, useEffect } from 'react';
import Container from './Container';
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
            getCustomValue: () => {
                return customValue;
            },
            isVerified: function () {
                return _isVerified;
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

    const [customValue, setCustomValue] = useState({});
    const [value, setValue] = useState(defValue);
    const [_isVerified, setVerified] = useState(false);
    const container = React.useRef();

    const _onChangeText = ({ dialCode, unmaskedPhoneNumber, phoneNumber, isVerified = false }) => {
        setCustomValue({ countryCode: dialCode, mobilePhone: unmaskedPhoneNumber });
        setValue(dialCode + unmaskedPhoneNumber);
        setVerified(isVerified);
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