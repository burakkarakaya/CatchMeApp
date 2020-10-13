import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { SwitcherButton, Button } from '_UI';
import { ProgressiveImage } from '_components';
import { Translation } from '_context';
import * as styles from './styles';
import PropTypes from 'prop-types';
import { DuelistService } from '_services';

import { PAGE_TYPE } from '_constants';
import { useNavigation } from '@react-navigation/native';
import {
    NAVIGATION_TO_DETAIL_SCREEN,
} from '_navigations/routes';


const Header = React.memo(({ pageType, id, firstName, lastName, isFollowed, followers, followings, duelings, profileImageUrl, isDuelingRequested, isDueling, isVisible, isPrivate, userName, caption, onLayout, callback, id: _id }) => {

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

    const _onPress = async ({ type }) => {
        switch (type) {
            case 'following':
                navigation.push(NAVIGATION_TO_DETAIL_SCREEN, { type: PAGE_TYPE.FOLLOWING, data: { id: _id, title: t('page.following') } });
                break;

            case 'followers':
                navigation.push(NAVIGATION_TO_DETAIL_SCREEN, { type: PAGE_TYPE.FOLLOWERS, data: { id: _id, title: t('page.followers') } });
                break;

            case 'dueled':
                navigation.push(NAVIGATION_TO_DETAIL_SCREEN, { type: PAGE_TYPE.DUELED, data: { id: _id, title: t('page.dueled') } });
                break;

            case 'backButton':
                navigation.goBack();
                break;

            case 'duelRequest': {

                //_showPreloader();

                console.warn('duelRequest', id);

                try {
                    const data = await DuelistService.CreateDuelistRequest({ requestedToMemberId: id });
                    console.warn(data);

                } catch (error) {
                    //_showMessage({ type: 'error', data: [error.message || ''] });
                }
                finally {
                    //_hidePreloader();
                }

                break;

            }

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

    const _backButton = pageType == PAGE_TYPE.DETAIL ? <Button onPress={_onPress} type={'icoButton'} leftIco={'backArrow'} data={{ type: 'backButton' }}></Button> : <View />;

    const _buttons = pageType == PAGE_TYPE.DETAIL ? (
        <View style={{ flexDirection: 'row' }}>
            <SwitcherButton onPress={_onPress} data={{ type: 'duelRequest' }} style={{ wrapper: { flex: 1, marginRight: 3 } }} value={true} buttons={[{ type: 'solid', title: 'DUEL' }, { type: 'solid', title: 'DUEL' }]} />
            <SwitcherButton style={{ wrapper: { flex: 1, marginLeft: 3 } }} value={true} buttons={[{ type: 'solidBlack', title: 'FOLLOW' }, { type: 'solidBlack', title: 'FOLLOW' }]} />
        </View>
    ) : null;


    return (
        <View style={styles.header.wrapper} onLayout={_onLayout}>

            <View style={[styles.header.menuWrapper]}>
                {_backButton}
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

            {_buttons}

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
    caption: PropTypes.string,
    pageType: PropTypes.string
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