
import React, { useState } from 'react';
import {
    View,
} from 'react-native';
import { connect } from 'react-redux';
import { showModal, hideModal } from '_store/actions';
import Modal from 'react-native-modal';
import { MODAL_TYPE } from '_constants';
import PropTypes from 'prop-types';
import * as styles from './styles';
import { FeedInfo } from '_subview/feedInfo';
import { Comment } from '_subview/comment';
import { DirectMessage } from '_subview/directMessage';


function Main({ visibility, type, data, showModal: _showModal, hideModal: _hideModal }) {

    const scrollViewRef = React.useRef();

    const [scrollOffset, setScrollOffset] = useState();

    const handleOnScroll = event => {
        setScrollOffset(event.nativeEvent.contentOffset.y);
    };

    const handleScrollTo = (p) => {
        if (scrollViewRef.current) {
            scrollViewRef.current.set(p);
        }
    }

    const _getView = () => {

        switch (type) {
            case MODAL_TYPE.COMMENT:
                return <Comment onScroll={handleOnScroll} {...data} ref={scrollViewRef} />;
            case MODAL_TYPE.DIRECT_MESSAGE:
                return <DirectMessage onScroll={handleOnScroll} {...data} ref={scrollViewRef} />;
            case MODAL_TYPE.FEEDINFO:
                return <FeedInfo  {...data} />;
            default:
                return null;
        }

    };

    const _view = _getView();

    return (
        <Modal
            onBackdropPress={_hideModal}
            testID={'modal'}
            isVisible={visibility}
            onSwipeComplete={_hideModal}
            swipeDirection={['down']}
            scrollTo={handleScrollTo}
            scrollOffset={scrollOffset}
            scrollOffsetMax={100}
            propagateSwipe={true}
            style={styles.modal.wrapper}>

            <View style={styles.modal.inside()}>
                <View style={styles.modal.header}>
                    <View style={styles.modal.indicator}></View>
                </View>
                {_view}
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