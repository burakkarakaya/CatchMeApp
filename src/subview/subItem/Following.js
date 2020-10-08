import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { ProgressiveImage } from '_components';
import { SwitcherButton, Button } from '_UI';
import { connect } from 'react-redux';
import {
    unFollow,
    follow,
} from '_store/actions';
import * as styles from './styles';
import PropTypes from 'prop-types';

import { PAGE_TYPE } from '_constants';
import { useNavigation } from '@react-navigation/native';
import {
    NAVIGATION_TO_DETAIL_SCREEN,
} from '_navigations/routes';


function Main({ memberId, profileMediaUrl, username, firstName, lastName, wrapperStyle, onPress, unFollow: _unFollow, follow: _follow }) {

    const navigation = useNavigation();

    const _onPress = async ({ type, checked }) => {
        switch (type) {
            case 'checked':
                try {
                    if (checked)
                        await _follow({ followingMemberId: memberId });
                    else
                        await _unFollow({ id: memberId });

                } catch (error) {
                    console.warn('following error', error)
                }

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

            <SwitcherButton onPress={_onPress} data={{ type: 'checked' }} value={true} buttons={[{ type: 'solid', title: 'FOLLOWING' }, { type: 'solidGray', title: 'FOLLOW' }]} />

            <Button data={{ type: 'close' }} type={'icoButton'} onPress={_onPress} leftIco={'close'} style={{ wrapper: { marginLeft: 17 } }} icoStyle={{ width: 19, height: 19, resizeMode: 'contain' }}></Button>
        </View>
    );
};

Main.defaultProps = {
    wrapperStyle: {},
    unFollow: null,
    follow: null
};

Main.propTypes = {
    wrapperStyle: PropTypes.object,
    unFollow: PropTypes.func,
    follow: PropTypes.func,
};

const mapStateToProps = () => { return {}; };

const Following = connect(mapStateToProps, {
    unFollow,
    follow
})(Main);

export { Following };