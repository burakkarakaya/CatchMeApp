import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { Button } from '_UI';
import { ProgressiveImage } from '_components';
import { Translation } from '_context';
import * as styles from './styles';
import PropTypes from 'prop-types';

import { DETAIL_PAGE_TYPE } from '_constants';
import { useNavigation } from '@react-navigation/native';
import {
    NAVIGATION_TO_DETAIL_SCREEN,
} from '_navigations/routes';


const Header = React.memo(({ firstName, lastName, isFollowed, followers, followings, duelings, profileImageUrl, isDuelingRequested, isDueling, isVisible, isPrivate, userName, caption, onLayout, callback, id: _id }) => {

    const navigation = useNavigation();

    const t = Translation('profile');

    const _onLayout = (event) => {
        if (onLayout)
            onLayout(event);
    }

    const _onCallback = (o) => {
        if (callback)
            callback(o);
    }

    const _onPress = ({ type }) => {
        switch (type) {
            case 'following':
                navigation.push(NAVIGATION_TO_DETAIL_SCREEN, { type: DETAIL_PAGE_TYPE.FOLLOWING, data: { id: _id } });
                break;

            case 'followers':
                navigation.push(NAVIGATION_TO_DETAIL_SCREEN, { type: DETAIL_PAGE_TYPE.FOLLOWERS, data: { id: _id } });
                break;

            case 'dueled':
                navigation.push(NAVIGATION_TO_DETAIL_SCREEN, { type: DETAIL_PAGE_TYPE.DUELED, data: { id: _id } });
                break;

            default:
                break;
        }
    };

    const _profileImageUrl = <ProgressiveImage
        source={{ uri: profileImageUrl }}
        style={styles.header.thumb}
        containerStyle={styles.header.thumbContainer}
    />;

    const _caption = caption != '' && <Text style={styles.header.caption}>{caption}</Text>;

    return (
        <View style={styles.header.wrapper} onLayout={_onLayout}>

            <View style={[styles.header.menuWrapper]}>
                <Button onPress={_onCallback} type={'icoButton'} leftIco={'menu'} data={{ type: 'menu' }}></Button>
            </View>

            <View style={styles.header.topWrapper}>

                {_profileImageUrl}

                <View style={styles.header.topTextWrapper}>
                    <Text style={styles.header.userName}>{userName}</Text>
                    <Text style={styles.header.name}>{`${firstName} ${lastName}`}</Text>
                </View>

            </View>

            <View style={styles.header.content} >

                <View style={styles.header.inside}>
                    <TouchableOpacity onPress={_onPress.bind(this, { type: 'dueled' })} activeOpacity={.8}>
                        <Text style={styles.header.title}>{t('page.dueled')}</Text>
                        <Text style={styles.header.value}>{duelings}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.header.inside}>
                    <TouchableOpacity onPress={_onPress.bind(this, { type: 'followers' })} activeOpacity={.8}>
                        <Text style={styles.header.title}>{t('page.followers')}</Text>
                        <Text style={styles.header.value}>{followers}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.header.inside}>
                    <TouchableOpacity onPress={_onPress.bind(this, { type: 'following' })} activeOpacity={.8}>
                        <Text style={styles.header.title}>{t('page.following')}</Text>
                        <Text style={styles.header.value}>{followings}</Text>
                    </TouchableOpacity>
                </View>

            </View>

            {_caption}

        </View>
    );
});

Header.propTypes = {
    onLayout: PropTypes.func,
    callback: PropTypes.func,

    firstName: PropTypes.string,
    lastName: PropTypes.string,
    isFollowed: PropTypes.bool,
    followers: PropTypes.any,
    followings: PropTypes.any,
    duelings: PropTypes.any,
    profileImageUrl: PropTypes.string,
    isDuelingRequested: PropTypes.bool,
    isDueling: PropTypes.bool,
    isVisible: PropTypes.bool,
    isPrivate: PropTypes.bool,
    userName: PropTypes.string,
    caption: PropTypes.string
};

Header.defaultProps = {
    onLayout: null,
    callback: null,

    firstName: '',
    lastName: '',
    isFollowed: true,
    followers: '-',
    followings: '-',
    duelings: '-',
    profileImageUrl: null,
    isDuelingRequested: true,
    isDueling: true,
    isVisible: true,
    isPrivate: true,
    userName: '',
    caption: ''
};

export { Header };