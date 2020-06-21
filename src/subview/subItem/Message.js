import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { SwitcherButton, Button } from '_UI';
import * as styles from './styles';
import PropTypes from 'prop-types';

function Message({ member, text, wrapperStyle, onPress }) {

    const { username, firstName, lastName, profileMediaUrl } = member;

    const _onPress = ({ type }) => {

    };

    return (
        <View style={[styles.message.wrapper, wrapperStyle]}>
            <TouchableOpacity activeOpacity={.8} style={[styles.message.leftColumn]}>
                <View style={[styles.message.leftColumn]} >
                    <Image
                        source={{ uri: profileMediaUrl }}
                        style={styles.message.pic}
                    />
                    <View style={{ flex: 1 }}>
                        <Text numberOfLines={1} style={[styles.message.name]}>{`${username}`}</Text>
                        <Text numberOfLines={1} style={[styles.message.text]}>{`${text}`}</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <Text style={[styles.message.time]}>{'3d'}</Text>

            <Button data={{ type: 'close' }} type={'icoButton'} onPress={_onPress} leftIco={'threedotsHorz'} style={{ wrapper: { marginLeft: 17 } }} ></Button>
        </View>
    );
};

Message.defaultProps = {
    member: {},
    text: '',
    wrapperStyle: {}
};

Message.propTypes = {
    member: PropTypes.object,
    text: PropTypes.string,
    wrapperStyle: PropTypes.object,
};

export { Message };