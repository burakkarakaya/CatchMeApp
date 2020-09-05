import React, { useState, useImperativeHandle } from 'react';
import {
    View,
    Text,
    Image,
    ActivityIndicator
} from 'react-native';
import { LinearGradient, Video } from '_components';
import { connect } from 'react-redux';
import { showModal } from '_store/actions';
import { Button } from '_UI';
import { Layout, MODAL_TYPE } from '_constants';
import { Translation } from '_context';
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


function CustomVideo({ mediaUrl, index }, ref) {

    useImperativeHandle(ref, () => {
        return {
            active: () => {
                setVideo(true);
                //videoRef.current.play();
            },
            passive: () => {
                setVideo(false);
                //videoRef.current.stop();
            }
        };
    });

    const [isVideo, setVideo] = useState(false);

    const onLoadStart = () => {
        //console.warn('yukleniyor', index);
    };

    const onLoad = () => {
        //console.warn('yuklendi', index);
    };

    const onError = (e) => {
        console.warn('onError', e);
    };

    if (!isVideo) return null;

    //const videoRef = React.useRef()

    return (
        <Video
            //ref={videoRef}
            uri={mediaUrl}
            style={{ width: '100%', height: '100%', position: 'absolute', left: 0, top: 0, zIndex: 3 }}
            onLoadStart={onLoadStart}
            onLoad={onLoad}
            onError={onError}
        />
    );
}

function CustomPoster({ poster }, ref) {

    const [isPoster, setPoster] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    useImperativeHandle(ref, () => {
        return {
            active: () => {
                setPoster(true);
            },
            passive: () => {
                setPoster(false);
            }
        };
    });

    const onImageLoad = () => {
        setImageLoaded(true);
    }

    if (!isPoster) return null;

    const indicator = !imageLoaded && (
        <View style={{ width: '100%', height: '100%', position: 'absolute', left: 0, top: 0, zIndex: 3, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size={'small'} color={'#FFFFFF'} />
        </View>
    );

    return (
        <>
            {indicator}
            <Image
                source={{ uri: poster }}
                style={{ width: '100%', height: '100%', resizeMode: 'cover', position: 'absolute', left: 0, top: 0, zIndex: 2 }}
                onLoad={onImageLoad}
            />

        </>
    );
}


CustomPoster = React.forwardRef(CustomPoster);
CustomVideo = React.forwardRef(CustomVideo);



function Main({ id, caption, mediaUrl, poster, views, likes, liked, comments, duellingFrom, duellingTo, showModal: _showModal, index }, ref) {

    const t = Translation('feeds');

    useImperativeHandle(ref, () => {
        return {



            activeted: ({ type = 'all' }) => {

                switch (type) {
                    case 'all':
                        videoRef.current.active();
                        posterRef.current.active();
                        break;

                    case 'video':
                        videoRef.current.active();
                        break;

                    case 'poster':
                        posterRef.current.active();
                        break;

                    default:
                        break;
                }


            },
            disabled: ({ type = 'video' }) => {
                switch (type) {
                    case 'video':
                        videoRef.current.passive();
                        break;

                    default:
                        break;
                }
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
                _showModal({ type: MODAL_TYPE.COMMENT, data: { id, caption, views: `${views} ${t('views')}`, likes, liked, comments, duellingFrom } });
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

    const videoRef = React.useRef(),
        _video = (
            <CustomVideo
                ref={videoRef}
                mediaUrl={mediaUrl}
                poster={poster}
                index={index}
            />
        );

    const posterRef = React.useRef(),
        _poster = (
            <CustomPoster
                ref={posterRef}
                poster={poster}
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

            <Text style={styles.body.views}>{`${views} ${t('views')}`}</Text>

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

    poster: 'https://www.catch-me.io/content/users/dueling/pic/pic1.jpg',

};

const mapStateToProps = () => {
    return {};
};

const FeedItem = connect(mapStateToProps, { showModal, }, null, { forwardRef: true })(Main);

export { FeedItem };