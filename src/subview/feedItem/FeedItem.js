import React, { useState, useImperativeHandle } from 'react';
import {
    View,
    Text,
} from 'react-native';
import { LinearGradient, ProgressiveImage, Video } from '_components';
import { connect } from 'react-redux';
import { showModal } from '_store/actions';
import { Button } from '_UI';
import { Layout, MODAL_TYPE } from '_constants';
import { Header } from './Header';
import * as styles from './styles';
import PropTypes from 'prop-types';

/* 

    {
        "id": "Unknown Type: ınteger",
        "caption": "string",
        "mediaUrl": "string",
        "views": "Unknown Type: ınteger",
        "likes": "Unknown Type: ınteger",
        "comments": "Unknown Type: ınteger",
        "duellingFrom": {
          "memberId": "Unknown Type: ınteger",
          "username": "string",
          "profileMediaUrl": "string",
          "badget": "string"
        },
        "duellingTo": {
          "memberId": "Unknown Type: ınteger",
          "username": "string",
          "profileMediaUrl": "string",
          "badget": "string"
        }
      }

*/

function Main({ id, caption, mediaUrl, poster, views, likes, liked, comments, duellingFrom, duellingTo, showModal: _showModal, index }, ref) {

    const [isVideo, setVideo] = useState(false);
    const [isPoster, setPoster] = useState(false);

    useImperativeHandle(ref, () => {
        return {
            activeted: () => {
                setVideo(true);
                setPoster(true);
            },
            disabled: () => {
                setVideo(false);
            }
        };
    });

    //console.warn(id, caption, mediaUrl, poster, views, likes, liked, comments, duellingFrom, duellingTo);

    const _onPress = ({ type }) => {

        switch (type) {
            case 'like':
                console.warn('like');
                break;
            case 'comment':
                _showModal({ type: MODAL_TYPE.COMMENT });
                break;
            case 'share':
                _showModal({ type: MODAL_TYPE.DIRECT_MESSAGE });
                break;

            // header componentinden gelenler    
            case 'info':
                _showModal({ type: MODAL_TYPE.FEEDINFO });
                break;

            case 'startedDuel':
                console.warn('startedDuel');
                break;

            case 'gotDuel':
                console.warn('gotDuel');
                break;

            default:
                break;
        }

    }

    const _video = isVideo && (
        <Video
            uri={`http://www.catch-me.io/upload/app/video/test.mp4`}
            style={{ width: '100%', height: '100%', position: 'absolute', left: 0, top: 0, zIndex: 3 }}
        />
    );

    const _poster = isPoster && (
        <ProgressiveImage
            source={{ uri: poster }}
            style={{ width: '100%', height: '100%', resizeMode: 'cover', position: 'absolute', left: 0, top: 0, zIndex: 2 }}
            containerStyle={{ width: '100%', height: '100%', position: 'absolute', left: 0, top: 0, zIndex: 2 }}
        />
    );

    const _overlay = (
        <LinearGradient
            colors={['rgba(0, 0, 0, .7)', 'transparent', 'transparent', 'rgba(0, 0, 0, .7)']}
            style={{ flex: 1, position: 'absolute', zIndex: 2, left: 0, top: 0, width: '100%', height: '100%' }}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
        >
        </LinearGradient>
    );

    const _header = <Header onPress={_onPress} duellingFrom={duellingFrom} duellingTo={duellingTo} />;

    const icons = liked ? 'likedActive' : 'liked';

    const _body = (

        <View style={styles.body.wrapper}>
            <Text style={styles.body.caption}>{caption}</Text>

            <Text style={styles.body.views}>{views}</Text>

            <View style={styles.body.footerWrapper}>
                <View style={{ flexDirection: 'row' }}>

                    <Button onPress={_onPress} type={'icoButton'} leftIco={icons} data={{ type: 'like' }} icoStyle={styles.body.buttonIco} style={{ wrapper: { marginRight: 18 } }}>{likes}</Button>

                    <Button onPress={_onPress} type={'icoButton'} leftIco={'comment'} data={{ type: 'comment' }} icoStyle={styles.body.buttonIco}>{comments}</Button>

                </View>

                <Button onPress={_onPress} type={'icoButton'} leftIco={'share'} data={{ type: 'share' }}></Button>
            </View>
        </View>

    );

    const _paddingBottom = Layout.feedItemPaddingBottom();

    const _paddingTop = Layout.feedItemPaddingTop();

    return (
        <View style={styles.wrapper.container}>

            <View style={styles.wrapper.inside}>
                <View style={{ justifyContent: 'space-between', flex: 1, paddingTop: _paddingTop, paddingBottom: _paddingBottom }}>
                    {_header}
                    {_body}
                </View>
            </View>

            {_poster}
            {_video}
            {_overlay}
        </View>
    );
}

Main = React.forwardRef(Main);

Main.propTypes = {
    id: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
    comments: PropTypes.number,
    caption: PropTypes.string,
    mediaUrl: PropTypes.string,
    poster: PropTypes.string,
    duellingFrom: PropTypes.object,
    duellingTo: PropTypes.object,
    liked: PropTypes.bool,
};

Main.defaultProps = {
    liked: false,
    duellingFrom: {},
    duellingTo: {},

    poster: 'http://www.catch-me.io/upload/app/video/poster1.jpg',

};

const mapStateToProps = () => {
    return {};
};

const FeedItem = connect(mapStateToProps, { showModal, }, null, { forwardRef: true })(Main);

export { FeedItem };