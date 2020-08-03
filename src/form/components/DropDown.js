import React, { useState, useImperativeHandle } from 'react';
import {
    View,
} from 'react-native';
import Container from './Container';
import DropDownPicker from 'react-native-dropdown-picker';
import * as styles from '../styles/';
import PropTypes from 'prop-types';

function DropDown({ title, style, defValue, items, props }, ref) {

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

    return (
        <View style={{ zIndex: 100 }}>
            <Container style={style} ref={container} title={title}>
                <DropDownPicker
                    items={items}
                    defaultIndex={0}
                    onChangeItem={item => setValue(item.value)}
                    style={{ borderWidth: 0 }}
                    containerStyle={{ height: 48 }}
                    placeholderStyle={{ color: styles.textField.placeholderTextColor }}
                    {...props}
                />
            </Container>
        </View>
    );
};

DropDown = React.forwardRef(DropDown);

DropDown.defaultProps = {
    defValue: '',
    title: '',
    props: {},
    style: {},
    items: []
};

DropDown.propTypes = {
    defValue: PropTypes.string,
    title: PropTypes.string,
    props: PropTypes.object,
    style: PropTypes.object,
    items: PropTypes.array,
};

export { DropDown };