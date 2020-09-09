import React, { useState, useEffect, useRef } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    Animated,
    Image
} from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import { TabScene } from './TabScene';
import { TabItem } from './TabItem';
import { Header } from './Header';
import {
    HeaderHeight as _HeaderHeight,
    TabBarHeight,
    windowHeight,
} from './constants';
import {
    Layout
} from '_constants';
import * as MemberConfig from '_config/services/MemberConfig';
import { useFetch } from '_hooks';
import * as styles from './styles';

// dinamikleştirilecek
import { deulings as tab1Data, deuled as tab2Data } from './data';


const Profile = ({ id: _id, navigation }) => {

    const _config  = {...MemberConfig.getProfile.api};
    _config.param = { memberId: _id };

    const [{ data: profileData, isLoading, isLoaded, isError }, loadMoreData] = useFetch(_config); // Get Profile data

    const [HeaderHeight, setHeaderHeight] = useState(_HeaderHeight);
    const [tabIndex, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'tab1', title: 'My Deulings' },
        { key: 'tab2', title: 'Deuled' },
    ]);

    const scrollY = useRef(new Animated.Value(0)).current;
    let listRefArr = useRef([]);
    let listOffset = useRef({});
    let isListGliding = useRef(false);

    useEffect(() => {
        scrollY.addListener(({ value }) => {
            const curRoute = routes[tabIndex].key;
            listOffset.current[curRoute] = value;
        });

        return () => {
            scrollY.removeAllListeners();
        };
    }, [routes, tabIndex]);

    const syncScrollOffset = () => {
        const curRouteKey = routes[tabIndex].key;
        listRefArr.current.forEach((item) => {
            if (item.key !== curRouteKey) {

                if (scrollY._value < HeaderHeight && scrollY._value >= 0) {
                    if (item.value) {
                        if (item.value.scrollToOffset)
                            item.value.scrollToOffset({
                                offset: scrollY._value,
                                animated: false,
                            });
                        listOffset.current[item.key] = scrollY._value;
                    }
                } else if (scrollY._value >= HeaderHeight) {
                    if (
                        listOffset.current[item.key] < HeaderHeight ||
                        listOffset.current[item.key] == null
                    ) {
                        if (item.value) {
                            if (item.value.scrollToOffset)
                                item.value.scrollToOffset({
                                    offset: HeaderHeight,
                                    animated: false,
                                });
                            listOffset.current[item.key] = HeaderHeight;
                        }
                    }
                }
            }
        });
    };

    const onMomentumScrollBegin = () => {
        isListGliding.current = true;
    };

    const onMomentumScrollEnd = () => {
        isListGliding.current = false;
        syncScrollOffset();
    };

    const onScrollEndDrag = () => {
        syncScrollOffset();
    };

    // header
    const _headerCallback = ({ type }) => {
        switch (type) {
            case 'menu':
                navigation.openDrawer();
                break;

            default:
                break;
        }
    }

    const _onLayoutHeader = (event) => {
        const { x, y, width, height } = event.nativeEvent.layout;
        setHeaderHeight(height);
    }

    const renderHeader = () => {
        const y = scrollY.interpolate({
            inputRange: [0, HeaderHeight],
            outputRange: [0, -HeaderHeight],
            extrapolateRight: 'clamp',
        });
        return (
            <Animated.View style={[styles.stickyHeader.wrapper, { height: HeaderHeight, transform: [{ translateY: y }] }]}>
                <Header {...profileData[0]} config={MemberConfig.get} callback={_headerCallback} onLayout={_onLayoutHeader} />
            </Animated.View>
        );
    };

    const renderBackground = () => {

        const y = scrollY.interpolate({
            inputRange: [0, HeaderHeight],
            outputRange: [0, -HeaderHeight],
            extrapolateRight: 'clamp',
        });

        return (
            <Animated.View
                style={[styles.poster, { transform: [{ translateY: y }] }]}
            >
                <Image
                    source={{ uri: 'http://service.catch-me.io/content/users/dueling/pic/pic1.jpg' }}
                    style={{ width: null, height: null, flex: 1 }}
                />
            </Animated.View>
        );
    };

    const renderLabel = ({ route, focused }) => {
        return (
            <Text style={[styles.tabBar.label, { opacity: focused ? 1 : 0.5 }]}>
                {route.title}
            </Text>
        );
    };

    const renderScene = ({ route }) => {
        const focused = route.key === routes[tabIndex].key;
        let numCols;
        let data;
        let renderItem;
        switch (route.key) {
            case 'tab1':
                numCols = 2;
                data = tab1Data;
                renderItem = TabItem;
                break;
            case 'tab2':
                numCols = 2;
                data = tab2Data;
                renderItem = TabItem;
                break;
            default:
                return null;
        }
        return (
            <TabScene
                numCols={numCols}
                data={data}
                renderItem={renderItem}
                scrollY={scrollY}
                onMomentumScrollBegin={onMomentumScrollBegin}
                onScrollEndDrag={onScrollEndDrag}
                onMomentumScrollEnd={onMomentumScrollEnd}

                contentContainerStyle={{
                    paddingTop: HeaderHeight + TabBarHeight,
                    paddingHorizontal: 20,
                    minHeight: windowHeight - TabBarHeight,
                }}

                onGetRef={(ref) => {
                    if (ref) {
                        const found = listRefArr.current.find((e) => e.key === route.key);
                        if (!found) {
                            listRefArr.current.push({
                                key: route.key,
                                value: ref._component,
                            });
                        }
                    }
                }}
            />
        );
    };

    const renderTabBar = (props) => {
        const y = scrollY.interpolate({
            inputRange: [0, HeaderHeight],
            outputRange: [HeaderHeight, 0],
            extrapolateRight: 'clamp',
        });
        return (
            <Animated.View
                style={{
                    top: 0,
                    zIndex: 1,
                    position: 'absolute',
                    transform: [{ translateY: y }],
                    width: '100%',
                }}>
                <TabBar
                    {...props}
                    onTabPress={({ route, preventDefault }) => {
                        if (isListGliding.current) {
                            preventDefault();
                        }
                    }}
                    style={styles.tabBar.wrapper}
                    renderLabel={renderLabel}
                    indicatorStyle={styles.tabBar.indicator}
                />
            </Animated.View>
        );
    };

    const renderTabView = () => {
        return (
            <TabView
                onIndexChange={(index) => setIndex(index)}
                navigationState={{ index: tabIndex, routes }}
                renderScene={renderScene}
                renderTabBar={renderTabBar}
                initialLayout={{
                    height: 0,
                    width: Dimensions.get('window').width,
                }}
            />
        );
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            {renderBackground()}
            <View style={{ flex: 1, marginTop: Layout.StatusBarHeight }}>
                {renderTabView()}
                {renderHeader()}
            </View>
        </View>
    );
};

export { Profile };