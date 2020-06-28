import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { Button } from '_UI';
import { Layout, } from '_constants';
import * as styles from './styles';

const Header = React.memo(({ onLayout, callback }) => {

    const _onLayout = (event) => {
        if (onLayout)
            onLayout(event);
    }

    const _onPress = (o) => {
        if (callback)
            callback(o);
    }

    return (
        <View style={styles.header.wrapper} onLayout={_onLayout}>

            <View style={[styles.header.menuWrapper, { marginTop: Layout.StatusBarHeight }]}>
                <Button onPress={_onPress} type={'icoButton'} leftIco={'menu'} data={{ type: 'menu' }}></Button>
            </View>

            <View style={styles.header.topWrapper}>

                <Image
                    source={{ uri: 'http://www.catch-me.io/upload/app/pic/pic1.jpg' }}
                    style={styles.header.thumb}
                />

                <View style={styles.header.topTextWrapper}>
                    <Text style={styles.header.userName}>{'@kristenhanby'}</Text>
                    <Text style={styles.header.name}>{'Kristen Hanby'}</Text>
                </View>

            </View>

            <View style={styles.header.content} >

                <View style={styles.header.inside}>
                    <TouchableOpacity activeOpacity={.8}>
                        <Text style={styles.header.title}>{'Dueled'}</Text>
                        <Text style={styles.header.value}>{'200'}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.header.inside}>
                    <TouchableOpacity activeOpacity={.8}>
                        <Text style={styles.header.title}>{'Followers'}</Text>
                        <Text style={styles.header.value}>{'1.2k'}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.header.inside}>
                    <TouchableOpacity activeOpacity={.8}>
                        <Text style={styles.header.title}>{'Following'}</Text>
                        <Text style={styles.header.value}>{'700'}</Text>
                    </TouchableOpacity>
                </View>

            </View>

            <Text style={styles.header.caption}>• JUST A CRAZY GUY HIGH ON LIFE 🤣 {'\n'}• Hanby Gang 🤘🏻 {'\n'}• 3.8m on FB and 1.1M on YT💥</Text>
        </View>
    );
});

export { Header };