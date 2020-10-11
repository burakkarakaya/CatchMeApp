import React, { useState, useImperativeHandle } from 'react';
import {
    StyleSheet,
    Text,
} from 'react-native';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import PropTypes from 'prop-types';

let ConfirmationCodeField = ({ cellCount }, ref) => {

    useImperativeHandle(ref, () => {
        return {
            get: () => {
                return value;
            },
            reset: () => {
                setValue('');
            }
        };
    });

    const [value, setValue] = useState('');
    const codeFieldRef = useBlurOnFulfill({ value, cellCount: cellCount });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    return (
        <CodeField
            ref={codeFieldRef}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={cellCount}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
                <Text
                    key={index}
                    style={[styles.cell, isFocused && styles.focusCell]}
                    onLayout={getCellOnLayoutHandler(index)}>
                    {symbol || (isFocused ? <Cursor /> : '-')}
                </Text>
            )}
        />
    );
};

ConfirmationCodeField = React.forwardRef(ConfirmationCodeField);

ConfirmationCodeField.propTypes = {
    cellCount: PropTypes.number,
};

ConfirmationCodeField.defaultProps = {
    cellCount: 6
};

export { ConfirmationCodeField };

const styles = StyleSheet.create({
    cell: {
        width: 37,
        height: 49,
        lineHeight: 47,
        fontSize: 24,
        borderWidth: 1,
        borderColor: '#DDDDDD',
        textAlign: 'center',
        borderRadius: 4,
        color: '#A3A3A3'
    },
    focusCell: {
        borderColor: '#000',
    },
});
