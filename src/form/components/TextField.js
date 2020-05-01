import React, { useState, useImperativeHandle } from "react";
import { TextInput } from "react-native";
import PropTypes from 'prop-types';

function TextField({ defValue, props }, ref) {

    const [value, setValue] = useState(defValue);

    useImperativeHandle(ref, () => {
        return {
            reset: () => {
                setValue('');
            },
            get: () => {
                return value;
            },
            set: (k) => {
                setValue(k);
            }
        };
    });

    return (
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            underlineColorAndroid={'transparent'}
            onChangeText={text => setValue(text)}
            value={value}
            {...props}
        />
    );
};

TextField = React.forwardRef(TextField);

TextField.defaultProps = {
    defValue: '',
    props: {}
};

TextField.propTypes = {
    defValue: PropTypes.string,
    props: PropTypes.object
};

export { TextField };