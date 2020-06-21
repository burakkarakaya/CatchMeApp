import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import * as styles from './styles';
import PropTypes from 'prop-types';

function ForYou({ member, text, wrapperStyle }) {

    const { username, profileMediaUrl } = member;

    return (
        <View style={[styles.forYou.wrapper, wrapperStyle]}>
            <Image
                source={{ uri: profileMediaUrl }}
                style={styles.forYou.pic}
            />
            <Text numberOfLines={4} style={[styles.forYou.caption]}>{`${username} ${text}`}</Text>
        </View>
    );
};

ForYou.defaultProps = {
    member: {},
    text: '',
    wrapperStyle: {}
};

ForYou.propTypes = {
    member: PropTypes.object,
    text: PropTypes.string,
    wrapperStyle: PropTypes.object,
};

export { ForYou };