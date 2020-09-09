import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { Button } from '_UI';
import { ProgressiveImage } from '_components';
import { Layout, } from '_constants';
import * as styles from './styles';
import PropTypes from 'prop-types';

const Header = React.memo(({ firstName, lastName, isFollowed, followers, followings, duelings, profileImageUrl, isDuelingRequested, isDueling, isVisible, isPrivate, userName, caption, onLayout, callback }) => {

    const _onLayout = (event) => {
        if (onLayout)
            onLayout(event);
    }

    const _onPress = (o) => {
        if (callback)
            callback(o);
    }

    const _profileImageUrl = <ProgressiveImage
        source={{ uri: profileImageUrl }}
        style={styles.header.thumb}
        containerStyle={styles.header.thumbContainer}
    />;

    const _caption = caption != '' && <Text style={styles.header.caption}>{caption}</Text>;

    return (
        <View style={styles.header.wrapper} onLayout={_onLayout}>

            <View style={[styles.header.menuWrapper]}>
                <Button onPress={_onPress} type={'icoButton'} leftIco={'menu'} data={{ type: 'menu' }}></Button>
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
                    <TouchableOpacity activeOpacity={.8}>
                        <Text style={styles.header.title}>{'Dueled'}</Text>
                        <Text style={styles.header.value}>{duelings}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.header.inside}>
                    <TouchableOpacity activeOpacity={.8}>
                        <Text style={styles.header.title}>{'Followers'}</Text>
                        <Text style={styles.header.value}>{followers}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.header.inside}>
                    <TouchableOpacity activeOpacity={.8}>
                        <Text style={styles.header.title}>{'Following'}</Text>
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