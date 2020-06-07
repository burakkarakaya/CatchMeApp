import React from 'react';
import {
    View,
    Image,
    Text
} from 'react-native';
import { SafeArea, CustomModal, LinearGradient, ProgressiveImage } from '_components';
import { Button } from '_UI';
import PropTypes from 'prop-types';

import { Header } from '../../subview';


const User = ({ username, profile_pic_url, text = '', dir = 'left', style }) => {
    const flxDir = dir == 'right' ? 'row-reverse' : 'row';

    const mrg = dir == 'right' ? { marginRight: 10 } : { marginLeft: 10 };

    return (
        <View style={{ flexDirection: flxDir, ...style }}>
            <Image source={{ uri: 'http://www.catch-me.io/upload/app/pic/pic2.jpg' }} style={{ borderRadius: 5, width: 36, height: 36, resizeMode: 'cover' }} />
            <View style={{ ...mrg }}>
                <Text style={{ fontFamily: 'Regular', fontSize: 12, textAlign: dir, color: '#FFFFFF' }}>{text}</Text>
                <Text style={{ fontFamily: 'Bold', textAlign: dir, color: '#FFFFFF' }}>{'@nathanby'}</Text>
            </View>
        </View>
    );
};

const _getBody = () => {
    const item = {},
        liked = false,
        {
            media_to_caption = 'I dueled my fiancé finally and I call it “ THE BIG REVENGE”',
            media_view_count = '1,542,653 views',
            media_preview_like = '903',
            media_to_comment_count = '30'
        } = item,
        likeCount = liked ? (media_preview_like + 1) : media_preview_like,
        icons = liked ? 'likedActive' : 'liked';

    return (
        <View style={{ marginLeft: 20, marginRight: 20, }}>
            <Text style={{ fontFamily: 'Bold', width: '55%', color: '#FFFFFF' }}>{media_to_caption}</Text>

            <Text style={{ fontFamily: 'Medium', color: '#FFFFFF', marginTop: 10 }}>{media_view_count}</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, paddingBottom: 9 }}>
                <View style={{ flexDirection: 'row' }}>

                    <Button type={'icoButton'} leftIco={icons} data={{ type: 'like' }} style={{ minWidth: 80, marginRight: 10, paddingRight: 10 }}>{likeCount}</Button>

                    <Button type={'icoButton'} leftIco={'comment'} data={{ type: 'comment' }} style={{ minWidth: 80, marginRight: 10, paddingRight: 10 }}>{media_to_comment_count}</Button>

                </View>
                <Button type={'icoButton'} leftIco={'share'} data={{ type: 'share' }}></Button>
            </View>
        </View>
    );
};

const FeedItem = () => {

    const _video = null;

    const _poster = (
        <ProgressiveImage
            source={{ uri: 'http://www.catch-me.io/upload/app/video/poster1.jpg' }}
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

    /*
    const _header = (
        <View style={{ flexDirection: 'row', marginLeft: 20, marginRight: 20, paddingTop: 13, justifyContent: 'center' }}>
            <User dir={'right'} text="started a duel" style={{ marginRight: 10, width: '50%' }} />
            <Text style={{ backgroundColor: '#5E8DE6', borderRadius: 3, position: 'absolute', top: 22, zIndex: 2, padding: 1, left: '50%', marginLeft: -5, color: '#FFFFFF', fontFamily: 'Medium', fontSize: 12, overflow: 'hidden' }}>VS</Text>
            <User text="got the duel!" style={{ marginLeft: 10, width: '50%' }} />
        </View>
    );
    */

    const _header = <Header />;

    const _body = _getBody();

    return (
        <View style={{ flex: 1, backgroundColor: '#000000', position: 'relative' }}>

            <View style={{ position: 'absolute', left: 0, top: 0, zIndex: 5, width: '100%', height: '100%' }}>
                <SafeArea>
                    <View style={{ justifyContent: 'space-between', marginVertical: 50, flex: 1 }}>
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

};

FeedItem.defaultProps = {

};

export { FeedItem };