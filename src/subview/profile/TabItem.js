import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import * as styles from './styles';
import PropTypes from 'prop-types';
import { LinearGradient, } from '_components';

function TabItem({ item, index }) {

    const { member, text, thumbnailMediaUrl, wrapperStyle, onPress } = item;

    const _overlay = (
        <LinearGradient
            colors={['rgba(0, 0, 0, .7)', 'transparent', 'transparent', 'rgba(0, 0, 0, .7)']}
            style={styles.tabItem.overlay}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
        >
        </LinearGradient>
    );

    const { username, firstName, lastName, profileMediaUrl } = member;

    const _shift = index % 2 == 0 ? { marginRight: 5 } : { marginLeft: 5 };

    const _onPress = ({ type }) => {

    };

    return (
        <View style={[styles.tabItem.wrapper, _shift]}>
            <Image
                source={{ uri: thumbnailMediaUrl }}
                style={styles.tabItem.poster}
            />
            {_overlay}
            <View style={styles.tabItem.inside}>

                <Text numberOfLines={2} style={styles.tabItem.caption}>{text}</Text>
                <View style={styles.tabItem.footer}>
                    <Image
                        source={{ uri: profileMediaUrl }}
                        style={styles.tabItem.thumb}
                    />
                    <Text style={styles.tabItem.username}>{username}</Text>
                </View>

            </View>
        </View>
    );
};

TabItem.defaultProps = {
    member: {},
    text: '',
    wrapperStyle: {}
};

TabItem.propTypes = {
    member: PropTypes.object,
    text: PropTypes.string,
    wrapperStyle: PropTypes.object,
};

export { TabItem };