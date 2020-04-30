import React, { useState } from "react";
import { TextInput } from "react-native";
import PropTypes from 'prop-types';

function TextField({ defValue }, ref) {
    const _self = this,
        [value, setValue] = useState(defValue);

    /* 
        bu metod ile üst katmandan alt katman fonk. erişebiliriz.
    */    
    React.useImperativeHandle(ref, () => {
        return {
            printFirstName: () => {
                return value;
            },
            printLastName: () => {
                console.warn("Printing Last Name");
            }
        };
    });

    return (
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            underlineColorAndroid={'transparent'}
            onChangeText={text => setValue(text)}
            value={value}
        />
    );
};

TextField = React.forwardRef(TextField);

TextField.defaultProps = {
    defValue: ''
};

TextField.propTypes = {
    defValue: PropTypes.string
};

export { TextField };