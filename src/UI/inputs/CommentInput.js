import React, { useState, useImperativeHandle } from 'react';
import {
    TextInput,
    View,
    Image,
} from 'react-native';
import * as styles from './styles';
import { Button } from '_UI/buttons/Button';
import PropTypes from 'prop-types';

function CommentInput({ defValue, profileMediaUrl, props, wrapperStyle, onChangeText }, ref) {

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

    const _onPress = ({ type }) => {

    };

    return (
        <View style={[styles.commentInput.wrapper, wrapperStyle]}>

            <Image style={[styles.commentInput.profilePic]} source={{ uri: profileMediaUrl }} />

            <TextInput
                style={[styles.commentInput.input]}
                {...styles.commentInput.placeholderTextColor}
                underlineColorAndroid={'transparent'}
                onChangeText={text => _setValue(text)}
                value={value}
                placeholder={'Write a Comment …'}
                {...props}
            />

            <Button type={'blueButton'} onPress={_onPress} data={{ type: 'post' }}>{'Post'}</Button>
        </View>
    );
};

CommentInput = React.forwardRef(CommentInput);

CommentInput.defaultProps = {
    defValue: '',
    profileMediaUrl: 'http://service.catch-me.io/content/users/dueling/pic/pic1.jpg',
    props: {},
    wrapperStyle: {}
};

CommentInput.propTypes = {
    defValue: PropTypes.string,
    profileMediaUrl: PropTypes.string,
    props: PropTypes.object,
    wrapperStyle: PropTypes.object,
    onChangeText: PropTypes.func,
};

export { CommentInput };