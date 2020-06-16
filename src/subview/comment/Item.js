import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import * as styles from './styles';
import PropTypes from 'prop-types';

function Item({ member, text, wrapperStyle }) {

    const { username, profileMediaUrl } = member;

    return (
        <View style={[styles.item.wrapper, wrapperStyle]}>
            <Image
                source={{ uri: profileMediaUrl }}
                style={styles.item.pic}
            />
            <Text numberOfLines={4} style={[styles.item.caption]}>{`${username} ${text}`}</Text>
        </View>
    );
};

Item.defaultProps = {
    member: {},
    text: '',
    wrapperStyle: {}
};

Item.propTypes = {
    member: PropTypes.object,
    text: PropTypes.string,
    wrapperStyle: PropTypes.object,
};

export { Item };