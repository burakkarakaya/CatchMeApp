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

function Following({ member, text, wrapperStyle, onPress }) {

    const { username, firstName, lastName, profileMediaUrl } = member;

    const _onPress = ({ type }) => {

    };

    return (
        <View style={[styles.item.wrapper, wrapperStyle]}>
            <TouchableOpacity activeOpacity={.8} style={[styles.item.leftColumn]}>
                <View style={[styles.item.leftColumn]} >
                    <Image
                        source={{ uri: profileMediaUrl }}
                        style={styles.item.pic}
                    />
                    <View>
                        <Text numberOfLines={1} style={[styles.item.name]}>{`${firstName} ${lastName}`}</Text>
                        <Text numberOfLines={1} style={[styles.item.username]}>{`${username}`}</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <SwitcherButton value={true} buttons={[{ type: 'solid', title: 'FOLLOWING' }, { type: 'solidGray', title: 'FOLLOW' }]} />

            <Button data={{ type: 'close' }} type={'icoButton'} onPress={_onPress} leftIco={'close'} style={{ wrapper: { marginLeft: 17 } }} icoStyle={{ width: 19, height: 19, resizeMode: 'contain' }}></Button>
        </View>
    );
};

Following.defaultProps = {
    member: {},
    text: '',
    wrapperStyle: {}
};

Following.propTypes = {
    member: PropTypes.object,
    text: PropTypes.string,
    wrapperStyle: PropTypes.object,
};

export { Following };