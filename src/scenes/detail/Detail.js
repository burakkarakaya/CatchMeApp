import React from 'react';
import { BackHandler } from 'react-native';
import {
    DETAIL_PAGE_TYPE
} from '_constants';
import { Profile } from '_subview';
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
        case DETAIL_PAGE_TYPE.PROFILE:
            const { memberId } = data;
            return <Profile id={memberId} />;

        default:
            return null;
    }
}

export { Detail };