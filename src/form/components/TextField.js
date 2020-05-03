import React, { useState, useImperativeHandle } from 'react';
import { TextInput } from 'react-native';
import Container from './Container';
import * as styles from '../styles/';
import PropTypes from 'prop-types';

function TextField({ title, style, defValue, props }, ref) {

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

    return (
        <Container style={style} ref={container} title={title}>
            <TextInput
                style={[styles.textField.input, _style.input]}
                {...styles.textField.placeholderTextColor}
                {..._style.placeholderTextColor}
                underlineColorAndroid={'transparent'}
                onChangeText={text => setValue(text)}
                value={value}
                {...props}
            />
        </Container>
    );
};

TextField = React.forwardRef(TextField);

TextField.defaultProps = {
    defValue: '',
    title: '',
    props: {},
    style: {},
};

TextField.propTypes = {
    defValue: PropTypes.string,
    title: PropTypes.string,
    props: PropTypes.object,
    style: PropTypes.object,
};

export { TextField };