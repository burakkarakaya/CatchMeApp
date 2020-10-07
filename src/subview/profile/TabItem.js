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
import {
    DETAIL_PAGE_TYPE
} from '_constants';
import {
    NAVIGATION_TO_DETAIL_SCREEN,
} from '_navigations/routes';
import { useNavigation } from '@react-navigation/native';

function TabItem({ duelingSessionId, cover, caption, keywords, duelingWithMember, index }) {

    const navigation = useNavigation();

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

    const _keywords = keywords.join(' ');

    const _shift = index % 2 == 0 ? { marginRight: 5 } : { marginLeft: 5 };

    const _onPress = ({ type }) => {
        navigation.push(NAVIGATION_TO_DETAIL_SCREEN, { type: DETAIL_PAGE_TYPE.DUELING_CONTENTS, data: { id: duelingSessionId } });
    };

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={_onPress}>
            <View style={[styles.tabItem.wrapper, _shift]}>
                <ProgressiveImage
                    source={{ uri: cover }}
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
    duelingSessionId: null,
    cover: null,
    caption: null,
    keywords: [],
    index: 0,
};

TabItem.propTypes = {
    duelingWithMember: PropTypes.object,
    duelingSessionId: PropTypes.number,
    cover: PropTypes.string,
    caption: PropTypes.string,
    keywords: PropTypes.array,
    index: PropTypes.number,
};

export { TabItem };