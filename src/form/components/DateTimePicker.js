import React, { useState, useImperativeHandle } from 'react';
import {
    TouchableOpacity,
    TextInput,
    View
} from 'react-native';
import Container from './Container';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import * as styles from '../styles/';
import PropTypes from 'prop-types';

function DateTimePicker({ title, style, defValue, props }, ref) {

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

    const [defDate, setDefDate] = useState(new Date());

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const getDateFormat = (date) => {
        let d = new Date(date),
            days = d.getDate(),
            month = d.getMonth() + 1,
            year = d.getFullYear();

        if (days < 10)
            days = '0' + days;

        if (month < 10)
            month = '0' + month;

        return `${days}.${month}.${year}`;
    }

    const handleConfirm = (date) => {
        const _date = getDateFormat(date);
        setDefDate(date);
        setValue(_date);
        hideDatePicker();
    };

    const container = React.useRef();

    const _style = style.textField || {};

    return (
        <>
            <Container style={style} ref={container} title={title}>
                <TouchableOpacity
                    activeOpacity={.8}
                    onPress={showDatePicker}>
                    <View pointerEvents={'none'}>
                        <TextInput
                            style={[styles.textField.input, _style.input]}
                            {...styles.textField.placeholderTextColor}
                            {..._style.placeholderTextColor}
                            underlineColorAndroid={'transparent'}
                            value={value}
                            editable={false}
                            {...props}
                        />
                    </View>
                </TouchableOpacity>
            </Container>

            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                date={defDate}
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </>
    );
};

DateTimePicker = React.forwardRef(DateTimePicker);

DateTimePicker.defaultProps = {
    defValue: '',
    title: '',
    props: {},
    style: {},
};

DateTimePicker.propTypes = {
    defValue: PropTypes.string,
    title: PropTypes.string,
    props: PropTypes.object,
    style: PropTypes.object,
};

export { DateTimePicker };