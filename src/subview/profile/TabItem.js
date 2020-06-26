import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import * as styles from './styles';
import PropTypes from 'prop-types';

function TabItem({ item, index }) {

    const { member, text, thumbnailMediaUrl, wrapperStyle, onPress } = item;

    const { username, firstName, lastName, profileMediaUrl } = member;

    const _onPress = ({ type }) => {

    };

    return (
        <View style={{ position: 'relative', flex: 1, }}>
            <Image
                source={{ uri: thumbnailMediaUrl }}
                style={{ width: 161, height: 243, resizeMode: 'cover' }}
            />
            <View style={{ position: 'absolute', bottom: 0, left: 0, padding: 8 }}>

                <Text numberOfLines={2} style={{ fontSize: 12, fontFamily: 'Regular' }}>{text}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <Image
                        source={{ uri: profileMediaUrl }}
                        style={{ borderRadius: 3, width: 28, height: 28, resizeMode: 'cover', marginRight: 5 }}
                    />
                    <Text style={{ fontSize: 12 }}>{username}</Text>
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