import React from 'react';
import {
    View,
    Text,
    Platform
} from 'react-native';
import { SafeArea, CustomModal, LinearGradient, ProgressiveImage } from '_components';
import { Button } from '_UI';
import { Layout } from '_constants';
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

const FeedItem = ({ id, caption, mediaUrl, poster, views, likes, liked, comments, duellingFrom, duellingTo }) => {

    const _video = null;

    const _poster = (
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

    const _header = <Header duellingFrom={duellingFrom} duellingTo={duellingTo} />;

    const icons = liked ? 'likedActive' : 'liked';

    const _body = (

        <View style={styles.body.wrapper}>
            <Text style={styles.body.caption}>{caption}</Text>

            <Text style={styles.body.views}>{views}</Text>

            <View style={styles.body.footerWrapper}>
                <View style={{ flexDirection: 'row' }}>

                    <Button type={'icoButton'} leftIco={icons} data={{ type: 'like' }} icoStyle={styles.body.buttonIco} style={{ wrapper: { marginRight: 18 } }}>{likes}</Button>

                    <Button type={'icoButton'} leftIco={'comment'} data={{ type: 'comment' }} icoStyle={styles.body.buttonIco}>{comments}</Button>

                </View>

                <Button type={'icoButton'} leftIco={'share'} data={{ type: 'share' }}></Button>
            </View>
        </View>

    );

    const _headerHeight = 50,
        _marginTop = Platform.OS === 'ios' ? _headerHeight : (Layout.StatusBarHeight + _headerHeight);

    return (
        <View style={styles.wrapper.container}>

            <View style={styles.wrapper.inside}>
                <SafeArea>
                    <View style={{ justifyContent: 'space-between', marginTop: _marginTop, marginBottom: 50, flex: 1, paddingTop: 17 }}>
                        {_header}
                        <CustomModal />
                        {_body}
                    </View>
                </SafeArea>
            </View>

            {_poster}
            {_video}
            {_overlay}
        </View>
    );
}

FeedItem.propTypes = {
    id: PropTypes.number,
    caption: PropTypes.string,
    mediaUrl: PropTypes.string,
    poster: PropTypes.string,
    views: PropTypes.string,
    likes: PropTypes.string,
    liked: PropTypes.bool,
    comments: PropTypes.string,
    duellingFrom: PropTypes.object,
    duellingTo: PropTypes.object
};

FeedItem.defaultProps = {
    id: 0,
    caption: 'I dueled my fiancé finally and I call it “ THE BIG REVENGE”',
    mediaUrl: 'http://www.catch-me.io/upload/app/video/poster1.jpg',
    poster: 'http://www.catch-me.io/upload/app/video/poster1.jpg',
    views: '1,542,653',
    likes: '903',
    liked: false,
    comments: '30',
    duellingFrom: {},
    duellingTo: {}
};

export { FeedItem };