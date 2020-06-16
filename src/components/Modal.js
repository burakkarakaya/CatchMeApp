
import React, { useState } from 'react';
import {
    Text,
    View,
    ScrollView,
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
                return <Comment onScroll={handleOnScroll} ref={scrollViewRef} />;
            case MODAL_TYPE.DIRECT_MESSAGE:
                return <DirectMessage onScroll={handleOnScroll} ref={scrollViewRef} />;
            case MODAL_TYPE.FEEDINFO:
                return <FeedInfo />;
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