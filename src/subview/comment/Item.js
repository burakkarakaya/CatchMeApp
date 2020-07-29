import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import * as styles from './styles';
import PropTypes from 'prop-types';

function Item({ member, comment, wrapperStyle }) {

    const { username, /*profileMediaUrl*/ } = member;

    const profileMediaUrl = 'http://www.catch-me.io/content/users/dueling/pic/pic2.jpg'

    return (
        <View style={[styles.item.wrapper, wrapperStyle]}>
            <Image
                source={{ uri: profileMediaUrl }}
                style={styles.item.pic}
            />
            <Text numberOfLines={4} style={[styles.item.caption]}>{`${username} ${comment}`}</Text>
        </View>
    );
};

Item.defaultProps = {
    member: {},
    comment: '',
    wrapperStyle: {}
};

Item.propTypes = {
    member: PropTypes.object,
    comment: PropTypes.string,
    wrapperStyle: PropTypes.object,
};

Item = React.memo(Item);

export { Item };