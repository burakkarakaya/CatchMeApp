import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { Button } from '_UI';
import { Layout, } from '_constants';
import { useFetch } from '_hooks';
import * as styles from './styles';
import PropTypes from 'prop-types';

const Header = React.memo(({ config, onLayout, callback }) => {

    const _onLayout = (event) => {
        if (onLayout)
            onLayout(event);
    }

    const _onPress = (o) => {
        if (callback)
            callback(o);
    }

    const [{ data, isLoading, isLoaded, isError }, loadMoreData] = useFetch(config.api);

    const { firstName = '', lastName = '', isFollowed = true, followers = '-', followings = '-', duelings = '-', profileImageUrl = '', isDuelingRequested = true, isDueling = true, isVisible = true, isPrivate = true, userName = '@kristenhanby', caption = '• JUST A CRAZY GUY HIGH ON LIFE 🤣 \n• Hanby Gang 🤘🏻 \n• 3.8m on FB and 1.1M on YT' } = data[0] || {};

    console.warn(firstName, lastName, isFollowed, followers, followings, duelings, profileImageUrl, isDuelingRequested, isDueling, isVisible, isPrivate)

    return (
        <View style={styles.header.wrapper} onLayout={_onLayout}>

            <View style={[styles.header.menuWrapper, { marginTop: Layout.StatusBarHeight }]}>
                <Button onPress={_onPress} type={'icoButton'} leftIco={'menu'} data={{ type: 'menu' }}></Button>
            </View>

            <View style={styles.header.topWrapper}>

                <Image
                    source={{ uri: 'http://service.catch-me.io/content/users/dueling/pic/pic1.jpg' }}
                    style={styles.header.thumb}
                />

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

            <Text style={styles.header.caption}>{caption}</Text>
        </View>
    );
});

Header.propTypes = {
    config: PropTypes.object,
    onLayout: PropTypes.func,
    callback: PropTypes.func,
};

Header.defaultProps = {
    config: {},
    onLayout: null,
    callback: null,
};

export { Header };