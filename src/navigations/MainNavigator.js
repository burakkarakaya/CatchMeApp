import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { connect } from 'react-redux';
import { setBottomTabbarTheme } from '_store/actions';
import {
    Home,
    Search,
    Video as UploadVideo,
} from '_scenes';
import {
    NAVIGATION_TO_FEEDS_SCREEN,
    NAVIGATION_TO_SEARCH_SCREEN,
    NAVIGATION_TO_UPLOAD_SCREEN,
    NAVIGATION_TO_NOTIFICATION_SCREEN,
    NAVIGATION_TO_USER_PROFILE_SCREEN
} from './routes';
import {
    images
} from '_assets';
import {
    BOTTOM_TABBAR_THEME_LIGHT,
    BOTTOM_TABBAR_THEME_DARK
} from '_constants';
import FeedsNavigator from './FeedsNavigator';
import NotificationNavigator from './NotificationNavigator';
import ProfileNavigator from './ProfileNavigator';
import UploadTabNavigator from './UploadTabNavigator';
import { 
    Layout,
} from '_constants';


const BottomTab = createBottomTabNavigator();

const icons = {

    [NAVIGATION_TO_FEEDS_SCREEN]: {
        [BOTTOM_TABBAR_THEME_LIGHT]: images['feedsLight'],
        [BOTTOM_TABBAR_THEME_DARK]: images['feedsDark']
    },
    [NAVIGATION_TO_SEARCH_SCREEN]: {
        [BOTTOM_TABBAR_THEME_LIGHT]: images['searchLight'],
        [BOTTOM_TABBAR_THEME_DARK]: images['searchDark']
    },
    [NAVIGATION_TO_UPLOAD_SCREEN]: {
        [BOTTOM_TABBAR_THEME_LIGHT]: images['uploadLight'],
        [BOTTOM_TABBAR_THEME_DARK]: images['uploadDark']
    },
    [NAVIGATION_TO_NOTIFICATION_SCREEN]: {
        [BOTTOM_TABBAR_THEME_LIGHT]: images['notificationsLight'],
        [BOTTOM_TABBAR_THEME_DARK]: images['notificationsDark']
    },
    [NAVIGATION_TO_USER_PROFILE_SCREEN]: {
        [BOTTOM_TABBAR_THEME_LIGHT]: images['userLight'],
        [BOTTOM_TABBAR_THEME_DARK]: images['userDark']
    }
};

function CustomTabBar({ _theme, setBottomTabbarTheme: _setBottomTabbarTheme, state, descriptors, navigation }) {

    const _backgroundColor = _theme == BOTTOM_TABBAR_THEME_LIGHT ? 'rgba(255, 255, 255, 0)' : 'rgba(255, 255, 255, 1)';

    const _height = Layout.mainNavigatorTabbarHeight() || 0;

    return (
        <View style={[styles.container, { height: _height, backgroundColor: _backgroundColor }]}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];

                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const _icons = <Image source={icons[label][_theme]} style={styles.icon} />;

                const _active = isFocused ? <View style={[styles.indicator, { backgroundColor: _theme == BOTTOM_TABBAR_THEME_LIGHT ? '#FFF' : '#000' }]} /> : null;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }

                    if (label == NAVIGATION_TO_FEEDS_SCREEN)
                        _setBottomTabbarTheme(BOTTOM_TABBAR_THEME_LIGHT);
                    else
                        _setBottomTabbarTheme(BOTTOM_TABBAR_THEME_DARK);

                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        key={route.key}
                        accessibilityRole="button"
                        accessibilityStates={isFocused ? ['selected'] : []}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={[styles.tabButton]}
                    >
                        {_icons}
                        {_active}
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const mapStateToProps = ({ general }) => {
    const { bottomTabbarTheme: _theme } = general;
    return {
        _theme
    };
};

const TabBar = connect(mapStateToProps, {
    setBottomTabbarTheme
})(CustomTabBar);


export default function MainNavigator() {
    return (
        <BottomTab.Navigator tabBar={props => <TabBar {...props} />}>
            <BottomTab.Screen name={NAVIGATION_TO_FEEDS_SCREEN} component={FeedsNavigator} />
            <BottomTab.Screen name={NAVIGATION_TO_SEARCH_SCREEN} component={Search} />
            <BottomTab.Screen name={NAVIGATION_TO_UPLOAD_SCREEN} component={UploadTabNavigator} />
            <BottomTab.Screen name={NAVIGATION_TO_NOTIFICATION_SCREEN} component={NotificationNavigator} />
            <BottomTab.Screen name={NAVIGATION_TO_USER_PROFILE_SCREEN} component={ProfileNavigator} />
        </BottomTab.Navigator>
    );
};


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        elevation: 2,
        backgroundColor: 'rgba(255, 255, 255, 0)',
        borderTopWidth: 1,
        borderTopColor: 'rgba(255, 255, 255, 0.2)',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
    tabButton: {
        flex: 1,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: 32,
        height: 32
    },
    indicator: {
        position: 'absolute',
        height: 2,
        width: 32,
        bottom: 2,
        justifyContent: 'center',
        alignItems: 'center',
    }
});