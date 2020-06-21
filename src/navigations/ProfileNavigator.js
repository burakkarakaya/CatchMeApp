import React from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    FlatList
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ProfileTabNavigator from './ProfileTabNavigator';

const Drawer = createDrawerNavigator();

function DrawerContent() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Drawer content</Text>
        </View>
    );
}

function Header() {
    return (
        <>
            <View style={{ flexDirection: 'row' }}>

                <Image
                    source={{ uri: 'http://www.catch-me.io/upload/app/pic/pic1.jpg' }}
                    style={{ width: 70, height: 70, borderRadius: 10, overflow: 'hidden', marginRight: 10 }}
                />

                <View style={{ height: 70, justifyContent: 'space-around' }}>
                    <Text style={{ color: '#000000', fontSize: 16, }}>{'@kristenhanby'}</Text>
                    <Text style={{ color: '#000000', fontSize: 16, }}>{'Kristen Hanby'}</Text>
                </View>

            </View>


            <View style={{ flexDirection: 'row' }} >

                <View style={{ marginRight: 40 }}>
                    <Text>{'Dueled'}</Text>
                    <Text>{'200'}</Text>
                </View>

                <View style={{ marginRight: 40 }}>
                    <Text>{'Followers'}</Text>
                    <Text>{'1.2k'}</Text>
                </View>

                <View style={{ marginRight: 40 }}>
                    <Text>{'Following'}</Text>
                    <Text>{'700'}</Text>
                </View>

            </View>

            <Text>• JUST A CRAZY GUY HIGH ON LIFE 🤣 {'\n'}• Hanby Gang 🤘🏻 {'\n'}• 3.8m on FB and 1.1M on YT💥</Text>
        </>
    );
}

function HomeScreen() {

    return (
        <ScrollView
        nestedScrollEnabled
        >

            <Header />
            <ProfileTabNavigator />
        </ScrollView>

    )



    return (
        <>

            <FlatList
                ListHeaderComponent={() => <Header />}
                nestedScrollEnabled
                data={[{}]}
                renderItem={() => <ProfileTabNavigator />}
                keyExtractor={() => 'aaa'}
            />



        </>
    );
}

export default function ProfileNavigator() {
    return (
        <Drawer.Navigator
            drawerPosition={'right'}
            drawerContent={() => <DrawerContent />}
        >
            <Drawer.Screen name="Home" component={HomeScreen} />
        </Drawer.Navigator>
    );
};