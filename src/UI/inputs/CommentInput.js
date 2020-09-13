import React, { useState, useImperativeHandle } from 'react';
import {
    TextInput,
    View,
} from 'react-native';
import * as styles from './styles';
import {
    ProgressiveImage,
} from '_components/ProgressiveImage';
import { Button } from '_UI/buttons/Button';
import { Translation } from '_context';
import PropTypes from 'prop-types';

function CommentInput({ defValue, profileImageUrl, props, wrapperStyle, onChangeText, onSend }, ref) {

    const t = Translation('comment');

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
        if (onSend && value != '') {
            onSend(value);
        }
    };

    return (
        <View style={[styles.commentInput.wrapper, wrapperStyle]}>

            <ProgressiveImage
                source={{ uri: profileImageUrl }}
                style={styles.commentInput.profilePic}
            />

            <TextInput
                style={[styles.commentInput.input]}
                {...styles.commentInput.placeholderTextColor}
                underlineColorAndroid={'transparent'}
                onChangeText={text => _setValue(text)}
                value={value}
                placeholder={t('writeaComment')}
                keyboardType={'default'}
                {...props}
            />

            <Button type={'blueButton'} onPress={_onPress} data={{ type: 'post' }}>{'Post'}</Button>
        </View>
    );
};

CommentInput = React.forwardRef(CommentInput);

CommentInput.defaultProps = {
    defValue: '',
    profileImageUrl: null,
    props: {},
    wrapperStyle: {}
};

CommentInput.propTypes = {
    defValue: PropTypes.string,
    profileImageUrl: PropTypes.string,
    props: PropTypes.object,
    wrapperStyle: PropTypes.object,
    onChangeText: PropTypes.func,
};

export { CommentInput };