import React, { useState } from 'react';
import { View, } from 'react-native';
import {
    CustomList,
} from '_components/CustomList';
import { EmptyItem } from '_subview/emptyItem/EmptyItem';
import { FollowingConfig } from '_config/services/FollowingConfig';
import { Header as CustomHeader } from './Header';
import { Header, Button } from '_UI';
import { UploadHeaderSettings } from '_config';
import {
    NAVIGATION_TO_UPLOAD_CAPTION,
} from '_navigations/routes';
import { connect } from 'react-redux';
import { setUploadDuel } from '_store/actions';

const Main = ({ navigation, member: _member, setUploadDuel: _setUploadDuel }) => {

    const _onPress = () => {
        _setUploadDuel(['9999', '8888']); // dinamikleştirilecek
        navigation.navigate(NAVIGATION_TO_UPLOAD_CAPTION);
    }

    const _button = <Button onPress={_onPress} data={{ type: 'nextStep' }} type={'blueButton'}>{'Next'}</Button>;

    const _header = UploadHeaderSettings()['duel'] || [];

    const flatListRef = React.useRef();

    const _config = { ...FollowingConfig['getfollowers'] };

    console.warn('user', _member.id)

    return (
        <View style={{ flex: 1 }}>
            <Header rightButton={_button} style={{ marginRight: 17 }} navigation={navigation} mode={'mode-2'} title={'Start a Duel'} />
            <CustomHeader data={_header} />
            <CustomList
                ref={flatListRef}
                config={_config}
                //NoResultComponent={<CommentItem style={{ height: 260 }} />}
                ListEmptyComponent={<EmptyItem />}
                ItemSeparatorComponent={() => <View style={{ height: 14 }} />}
                contentContainerStyle={{ padding: 15 }}
                style={{ flex: 1 }}
                props={{
                    scrollEventThrottle: 16,
                }}
            />
        </View>
    );
}

Main.propTypes = {

};

Main.defaultProps = {

};

const mapStateToProps = ({ general }) => {
    const { member } = general;
    return {
        member
    };
};

const Duel = connect(mapStateToProps, { setUploadDuel })(Main);

export { Duel };