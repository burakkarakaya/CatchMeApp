import React from 'react';
import { BackHandler } from 'react-native';
import {
    DETAIL_PAGE_TYPE
} from '_constants';
import {
    Profile,
    Followings
} from '_subview';
import UploadTabNavigator from '_navigations/UploadTabNavigator';
import { useFocusEffect } from '@react-navigation/native';

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

        default:
            return null;
    }
}

export { Detail };