import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import { Profile, Drawer as DrawerContent } from '_subview';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

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