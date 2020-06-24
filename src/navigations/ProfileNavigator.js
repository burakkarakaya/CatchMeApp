import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import { Profile } from '_subview';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function DrawerContent() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Drawer content</Text>
        </View>
    );
}

export default function ProfileNavigator() {
    return (
        <Drawer.Navigator
            drawerPosition={'right'}
            drawerContent={() => <DrawerContent />}
        >
            <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
    );
};