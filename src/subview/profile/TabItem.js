import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import * as styles from './styles';
import PropTypes from 'prop-types';
import {
    ProgressiveImage,
    LinearGradient,
} from '_components';

function TabItem({ duelingId, duelingWithMember, duelingContents, index }) {

    const _overlay = (
        <LinearGradient
            colors={['rgba(0, 0, 0, .7)', 'transparent', 'transparent', 'rgba(0, 0, 0, .7)']}
            style={styles.tabItem.overlay}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
        >
        </LinearGradient>
    );

    const { id, username, profileMediaUrl } = duelingWithMember;

    const { id: contentId, caption, keywords, contentUrl } = duelingContents[0] || {};

    const _keywords = keywords.join(' ');

    const _shift = index % 2 == 0 ? { marginRight: 5 } : { marginLeft: 5 };

    const _onPress = ({ type }) => {

    };

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={_onPress}>
            <View style={[styles.tabItem.wrapper, _shift]}>
                <ProgressiveImage
                    source={{ uri: contentUrl }}
                    style={styles.tabItem.poster}
                />
                {_overlay}
                <View style={styles.tabItem.inside}>
                    <Text numberOfLines={2} style={styles.tabItem.caption}>{caption} {_keywords}</Text>
                    <View style={styles.tabItem.footer}>
                        <ProgressiveImage
                            source={{ uri: profileMediaUrl }}
                            style={styles.tabItem.thumb}
                        />
                        <Text style={styles.tabItem.username}>{username}</Text>
                    </View>

                </View>
            </View>
        </TouchableOpacity>
    );
};

TabItem.defaultProps = {
    duelingWithMember: {},
    duelingContents: [],
    index: 0
};

TabItem.propTypes = {
    duelingWithMember: PropTypes.object,
    duelingContents: PropTypes.array,
    index: PropTypes.number,
};

export { TabItem };