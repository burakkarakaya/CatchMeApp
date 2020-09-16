import React from 'react';
import { BackHandler } from 'react-native';
import {
    DETAIL_PAGE_TYPE
} from '_constants';
import { 
    Profile, 
    Followings 
} from '_subview';
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

    //return <Followings navigation={navigation} />

    switch (type) {
        case DETAIL_PAGE_TYPE.PROFILE:
            const { memberId } = data;console.warn(memberId)
            return <Profile id={memberId} />;

        default:
            return null;
    }
}

export { Detail };