import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { ProgressiveImage } from '_components';
import { SwitcherButton, Button } from '_UI';
import * as styles from './styles';
import PropTypes from 'prop-types';

import { PAGE_TYPE } from '_constants';
import { useNavigation } from '@react-navigation/native';
import {
    NAVIGATION_TO_DETAIL_SCREEN,
} from '_navigations/routes';

function Duelling({ duelistId, duelistMember, wrapperStyle, onPress }) {

    const navigation = useNavigation();

    const { id: memberId, username, firstName, lastName, profileMediaUrl } = duelistMember || {};

    const _onPress = async ({ type, checked }) => {
        switch (type) {
            case 'checked':

                break;
            case 'close':

                break;

            case 'userClicked':
                navigation.push(NAVIGATION_TO_DETAIL_SCREEN, { type: PAGE_TYPE.PROFILE, data: { memberId } });
                break;

            default:
                break;
        }
    };

    return (
        <View style={[styles.item.wrapper, wrapperStyle]}>
            <TouchableOpacity onPress={() => _onPress({ type: 'userClicked' })} activeOpacity={.8} style={[styles.item.leftColumn]}>
                <View style={[styles.item.leftColumn]} >
                    <ProgressiveImage
                        source={{ uri: profileMediaUrl }}
                        style={styles.item.pic}
                        containerStyle={styles.item.pic}
                    />
                    <View>
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

Duelling.defaultProps = {
    member: {},
    text: '',
    wrapperStyle: {}
};

Duelling.propTypes = {
    member: PropTypes.object,
    text: PropTypes.string,
    wrapperStyle: PropTypes.object,
};

export { Duelling };