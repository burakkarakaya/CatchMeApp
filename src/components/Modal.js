
import React, { useState } from 'react';
import {
    Text,
    View,
    ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { showModal, hideModal } from '_store/actions';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';
import * as styles from './styles';

import { Button } from '_UI';

function Main({ visibility, type, data, showModal: _showModal, hideModal: _hideModal }) {

    const scrollViewRef = React.useRef();

    const [scrollOffset, setScrollOffset] = useState();

    const handleOnScroll = event => {
        setScrollOffset(event.nativeEvent.contentOffset.y);
    };

    const handleScrollTo = (p) => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo(p);
        }
    }

    const _getView = () => {

        return (

            <>
                <Button style={{ text: { color: '#F55555' } }} type={'underLineLarge'} data={{ type: 'report' }}>{'Report'}</Button>
                <Button type={'underLineLarge'} data={{ type: 'mute' }}>{'Mute'}</Button>
                <Button type={'underLineLarge'} data={{ type: 'unfollow' }}>{'Unfollow'}</Button>
                <Button type={'underLineLarge'} data={{ type: 'copyLink' }}>{'Copy Link'}</Button>
                <Button type={'underLineLarge'} data={{ type: 'shareTo' }}>{'Share To…'}</Button>
                <Button type={'underLineLarge'} data={{ type: 'turnOnPostNotification' }}>{'Turn On post Notification'}</Button>
                <Button style={{ text: { color: '#5E8DE6' } }} type={'underLineLarge'} data={{ type: 'cancel' }}>{'Cancel'}</Button>

            </>

        );

        switch (type) {

            case true:

                return (

                    <>
                        <Button type={'icoButton'} data={{ type: 'report' }}>{'Report'}</Button>
                        <Button type={'icoButton'} data={{ type: 'mute' }}>{'Mute'}</Button>
                        <Button type={'icoButton'} data={{ type: 'unfollow' }}>{'Unfollow'}</Button>
                        <Button type={'icoButton'} data={{ type: 'copyLink' }}>{'Copy Link'}</Button>
                        <Button type={'icoButton'} data={{ type: 'shareTo' }}>{'Share To…'}</Button>
                        <Button type={'icoButton'} data={{ type: 'turnOnPostNotification' }}>{'Turn On post Notification'}</Button>
                        <Button type={'icoButton'} data={{ type: 'cancel' }}>{'Cancel'}</Button>

                    </>

                );



            default:
                return null;
        }
    };

    const _view = _getView();

    return (
        <Modal
            testID={'modal'}
            isVisible={visibility}
            onSwipeComplete={_hideModal}
            swipeDirection={['down']}
            scrollTo={handleScrollTo}
            scrollOffset={scrollOffset}
            scrollOffsetMax={400 - 300} // content height - ScrollView height
            propagateSwipe={true}
            style={styles.modal.wrapper}>

            <View style={styles.modal.inside()}>
                <View style={styles.modal.header}>
                    <View style={styles.modal.indicator}></View>
                </View>

                <ScrollView
                    ref={scrollViewRef}
                    onScroll={handleOnScroll}
                    scrollEventThrottle={16}>

                    {_view}

                </ScrollView>
            </View>


        </Modal>
    );
}

Main.propTypes = {
    visibility: PropTypes.bool,
    type: PropTypes.string,
    data: PropTypes.object,
};

Main.defaultProps = {
    visibility: false,
    type: '',
    data: {},
};

const mapStateToProps = ({ general }) => {
    const { modal } = general;
    return {
        ...modal,
    };
};

const CustomModal = connect(mapStateToProps, {
    showModal,
    hideModal,
})(Main);

export { CustomModal };