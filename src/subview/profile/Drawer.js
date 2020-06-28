import React from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import { Button } from '_UI';
import { Layout, } from '_constants';
import * as styles from './styles';

const Drawer = React.memo(() => {
    return (
        <View style={{ flex: 1 }}>
            <View style={[styles.drawer.header, { paddingTop: Layout.StatusBarHeight }]}>
                <Image
                    source={{ uri: 'http://www.catch-me.io/upload/app/pic/pic1.jpg' }}
                    style={styles.drawer.thumb}
                />
                <Text style={styles.drawer.userName}>{'@kristenhanby'}</Text>
            </View>
            <View style={styles.drawer.body}>
                <Button style={{ text: styles.drawer.buttonText, wrapper: styles.drawer.buttonWrapper }} type={'icoButton'} leftIco={'editProfile'} data={{ type: 'editProfile' }}>{'Edit Profile'}</Button>
                <Button style={{ text: styles.drawer.buttonText, wrapper: styles.drawer.buttonWrapper }} type={'icoButton'} leftIco={'likes'} data={{ type: 'likes' }}>{'Likes'}</Button>
                <Button style={{ text: styles.drawer.buttonText }} type={'icoButton'} leftIco={'settings'} data={{ type: 'settings' }}>{'Setting'}</Button>
            </View>
        </View>
    );
});

export { Drawer };