import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import { ProgressiveImage } from '_components';
import { SwitcherButton, Button } from '_UI';
import * as styles from './styles';
import PropTypes from 'prop-types';

function Request({ duelistRequestId, duelistRequestWithMember, wrapperStyle, onPress }) {

    const { id, username, firstName, lastName, profileMediaUrl } = duelistRequestWithMember;

    const _onPress = ({ type }) => {

    };

    return (
        <View style={[styles.item.wrapper, wrapperStyle]}>
            <TouchableOpacity activeOpacity={.8} style={[styles.item.leftColumn]}>
                <View style={[styles.item.leftColumn]} >
                    <ProgressiveImage
                        source={{ uri: profileMediaUrl }}
                        style={styles.item.pic}
                    />
                    <View style={{ flex: 1 }}>
                        <Text numberOfLines={1} style={[styles.item.name]}>{`${firstName} ${lastName}`}</Text>
                        <Text numberOfLines={1} style={[styles.item.username]}>{`${username}`}</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <SwitcherButton value={true} buttons={[{ type: 'solid', title: 'DUELING' }, { type: 'solidGray', title: 'ASK FOR DUEL' }]} />

            <Button data={{ type: 'close' }} type={'icoButton'} onPress={_onPress} leftIco={'close'} style={{ wrapper: { marginLeft: 17 } }} icoStyle={{ width: 19, height: 19, resizeMode: 'contain' }}></Button>
        </View>
    );
};

Request.defaultProps = {
    wrapperStyle: {}
};

Request.propTypes = {
    wrapperStyle: PropTypes.object,
};

export { Request };