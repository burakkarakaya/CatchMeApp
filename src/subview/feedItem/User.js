import React from 'react';
import {
    View,
    Image,
    Text,
} from 'react-native';
import * as styles from './styles';
import PropTypes from 'prop-types';

const User = React.memo(({ profileMediaUrl, caption, username, badge, direction, style }) => {

    const _flexDirection = direction == 'right' ? 'row-reverse' : 'row';

    const _directionMargin = direction == 'right' ? styles.user.directionRightMargin : styles.user.directionLeftMargin;

    const _badge = badge && <Image source={{ uri: badge }} style={styles.user.badge} />

    return (
        <View style={[styles.user.wrapper, { flexDirection: _flexDirection }]}>
            <View>
                {_badge}
                <Image
                    source={{ uri: profileMediaUrl }}
                    style={styles.user.pic}
                />
            </View>
            <View style={{ ..._directionMargin }}>
                <Text numberOfLines={1} style={[styles.user.caption, { textAlign: direction }]}>{caption}</Text>
                <Text numberOfLines={1} style={[styles.user.name, { textAlign: direction }]}>{username}</Text>
            </View>
        </View>
    );
});

User.defaultProps = {
    direction: 'left',
    style: {},
    profileMediaUrl: '',
    caption: '',
    username: ''
};

User.propTypes = {
    direction: PropTypes.string,
    style: PropTypes.object,
    profileMediaUrl: PropTypes.string,
    caption: PropTypes.string,
    username: PropTypes.string,
    badge: PropTypes.string,
};

export { User };