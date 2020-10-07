import React from 'react';
import { BackHandler } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import {
    DETAIL_PAGE_TYPE
} from '_constants';
import {
    DuelingConfig,
} from '_config';

import {
    Profile,
    Followings
} from '_subview';
import {
    Feeds,
} from '_scenes/home';
import UploadTabNavigator from '_navigations/UploadTabNavigator';

const Detail = ({ navigation, route }) => {
    const { type, data } = route.params || {};

    useFocusEffect(
        React.useCallback(() => {
            const onBackPress = () => {
                navigation.goBack(null);
            };

            BackHandler.addEventListener('hardwareBackPress', onBackPress);

            return () =>
                BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        }, [])
    );

    switch (type) {
        case DETAIL_PAGE_TYPE.PROFILE: {
            const { memberId } = data;
            return <Profile id={memberId} />;
        }
        case DETAIL_PAGE_TYPE.FOLLOWING: {
            const { id, title } = data;
            return <Followings title={title} param={{ memberId: id }} type={'getfollowings'} navigation={navigation} />;
        }
        case DETAIL_PAGE_TYPE.FOLLOWERS: {
            const { id, title } = data;
            return <Followings title={title} param={{ memberId: id }} type={'getfollowers'} navigation={navigation} />;
        }
        case DETAIL_PAGE_TYPE.DUELED: {
            const { id, title } = data;
            return <Followings title={title} param={{ memberId: id }} type={'getDueLed'} navigation={navigation} />;
        }
        case DETAIL_PAGE_TYPE.UPLOAD: {
            return <UploadTabNavigator />;
        }
        case DETAIL_PAGE_TYPE.DUELING_CONTENTS: {
            const { id } = data,
                _config = { ...DuelingConfig.getDuelingContents };
            _config.api.param.duelingSessionId = id;
            return <Feeds config={_config} />;
        }

        default:
            return null;
    }
}

export { Detail };