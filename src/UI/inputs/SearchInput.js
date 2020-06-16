import React, { useState, useImperativeHandle } from 'react';
import {
    TextInput,
    View,
    Image,
} from 'react-native';
import { images } from '_assets';
import * as styles from './styles';
import PropTypes from 'prop-types';

function SearchInput({ defValue, props, wrapperStyle, onChangeText }, ref) {

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
            }
        };

        return obj;
    });

    const [value, setValue] = useState(defValue);

    const _setValue = (text) => {
        setValue(text);

        if (onChangeText)
            onChangeText(text);
    };

    return (
        <View style={[styles.searchInput.wrapper, wrapperStyle]}>
            <Image style={[styles.searchInput.buttonIco]} source={images['searchGray']} />
            <TextInput
                style={[styles.searchInput.input]}
                {...styles.searchInput.placeholderTextColor}
                underlineColorAndroid={'transparent'}
                onChangeText={text => _setValue(text)}
                value={value}
                placeholder={'Search'}
                {...props}
            />
        </View>
    );
};

SearchInput = React.forwardRef(SearchInput);

SearchInput.defaultProps = {
    defValue: '',
    props: {},
    wrapperStyle: {}
};

SearchInput.propTypes = {
    defValue: PropTypes.string,
    props: PropTypes.object,
    wrapperStyle: PropTypes.object,
    onChangeText: PropTypes.func,
};

export { SearchInput };