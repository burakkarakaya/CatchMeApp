import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { SwitcherButton, Button } from '_UI';
import { connect } from 'react-redux';
import {
    unFollow,
    follow,
} from '_store/actions';
import * as styles from './styles';
import PropTypes from 'prop-types';

function Main({ memberId, profileMediaUrl, username, firstName, lastName, wrapperStyle, onPress, unFollow: _unFollow, follow: _follow }) {

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

            default:
                break;
        }
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