import React, { useState } from 'react';
import {
    Text,
    View,
} from 'react-native';
import { connect } from 'react-redux';
import { hideModal } from '_store/actions';
import PropTypes from 'prop-types';
import * as styles from './styles';

import { Button } from '_UI';

function Main({ hideModal: _hideModal }) {

    const [viewType, setViewType] = useState();

    const _onPress = ({ type }) => {

        switch (type) {

            /* 
                ilk açılıştaki seçenekler
            */
            case 'report':
                setViewType('report');
                break;

            case 'mute':

                break;

            case 'unfollow':

                break;

            case 'copyLink':

                break;

            case 'shareTo':

                break;

            case 'turnOnPostNotification':

                break;

            case 'cancel':
                _hideModal();
                break;

            /* 
                report altındaki seçenekler
            */
            case 'spam':
                setViewType('spam');
                break;

            case 'inappropriate':

                break;


            default:
                break;
        }

    }

    const _getView = () => {

        switch (viewType) {

            case 'spam':

                return (

                    <View style={{ minHeight: 335 }}>
                        <Text style={{ textAlign: 'center', fontSize: 14, color: '#F55555' }}>Report</Text>

                        <View style={{ marginHorizontal: 25, marginTop: 55, marginBottom: 44, alignItems: 'center' }}>
                            <Button style={{ wrapper: { marginBottom: 20 } }} icoStyle={{ width: 64, height: 64 }} type={'icoButton'} leftIco={'success'}></Button>
                            <Text style={{ textAlign: 'center', fontSize: 16, color: '#000000', marginBottom: 5 }}>Lorum Ipsum Dolor Sit Amet?</Text>
                            <Text style={{ textAlign: 'center', fontSize: 14, color: '#777777' }} numberOfLines={2}>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,</Text>
                        </View>

                        <Button onPress={_onPress} style={{ text: { color: '#5E8DE6', fontFamily: 'Medium' } }} type={'underLineLarge'} data={{ type: 'cancel' }}>{'Homepage'}</Button>
                    </View>
                );

            case 'report':

                return (

                    <View style={{ minHeight: 335 }}>
                        <Text style={{ textAlign: 'center', fontSize: 14, color: '#F55555' }}>Report</Text>

                        <View style={{ marginHorizontal: 25, marginTop: 40 }}>
                            <Text style={{ textAlign: 'center', fontSize: 16, color: '#000000', marginBottom: 5 }}>Lorum Ipsum Dolor Sit Amet?</Text>
                            <Text style={{ textAlign: 'center', fontSize: 14, color: '#777777' }} numberOfLines={2}>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,</Text>
                        </View>

                        <Button onPress={_onPress} style={{ wrapper: { marginTop: 40 } }} type={'underLineLarge'} data={{ type: 'spam' }}>{'Spam'}</Button>
                        <Button onPress={_onPress} type={'underLineLarge'} data={{ type: 'inappropriate' }}>{'inappropriate'}</Button>
                    </View>

                );

            default:
                return (
                    <>
                        <Button onPress={_onPress} style={{ text: { color: '#F55555' } }} type={'underLineLarge'} data={{ type: 'report' }}>{'Report'}</Button>
                        <Button onPress={_onPress} type={'underLineLarge'} data={{ type: 'mute' }}>{'Mute'}</Button>
                        <Button onPress={_onPress} type={'underLineLarge'} data={{ type: 'unfollow' }}>{'Unfollow'}</Button>
                        <Button onPress={_onPress} type={'underLineLarge'} data={{ type: 'copyLink' }}>{'Copy Link'}</Button>
                        <Button onPress={_onPress} type={'underLineLarge'} data={{ type: 'shareTo' }}>{'Share To…'}</Button>
                        <Button onPress={_onPress} type={'underLineLarge'} data={{ type: 'turnOnPostNotification' }}>{'Turn On post Notification'}</Button>
                        <Button onPress={_onPress} style={{ text: { color: '#5E8DE6' } }} type={'underLineLarge'} data={{ type: 'cancel' }}>{'Cancel'}</Button>

                    </>
                );
        }

    };

    return _getView();
}

Main.propTypes = {

};

Main.defaultProps = {

};

const mapStateToProps = () => {
    return {};
};

const FeedInfo = connect(mapStateToProps, {
    hideModal,
})(Main);

export { FeedInfo };