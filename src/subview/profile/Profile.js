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
import { Header } from './Header';
import {
    tab1ItemSize,
    tab2ItemSize,
    HeaderHeight,
    BackgroundMinHeight,
    BackgroundMaxHeight,
} from './constants';
import { SafeArea } from '_components';

const Profile = () => {
    const [tabIndex, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'tab1', title: 'My Deulings' },
        { key: 'tab2', title: 'Deuled' },
    ]);
    const [tab1Data] = useState(Array(40).fill(0));
    const [tab2Data] = useState(Array(30).fill(0));
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

    const renderHeader = () => {
        const y = scrollY.interpolate({
            inputRange: [0, HeaderHeight],
            outputRange: [0, -HeaderHeight],
            extrapolateRight: 'clamp',
        });
        return (
            <Animated.View style={[styles.header, { transform: [{ translateY: y }] }]}>
                <Header />
            </Animated.View>
        );
    };

    const renderBackground = () => {
        const _height = scrollY.interpolate({
            inputRange: [0, BackgroundMaxHeight - BackgroundMinHeight],
            outputRange: [BackgroundMaxHeight, BackgroundMinHeight],
            extrapolate: 'clamp',
        });

        return (
            <Animated.View>
                <Image
                    source={{ uri: 'http://www.catch-me.io/upload/app/pic/pic1.jpg' }}
                    style={{ width: '100%', height: 130, overflow: 'hidden', position: 'absolute' }}
                />
            </Animated.View>
        );
    };

    const rednerTab1Item = ({ item, index }) => {
        return (
            <View
                style={{
                    borderRadius: 16,
                    marginLeft: index % 2 === 0 ? 0 : 10,
                    width: tab1ItemSize,
                    height: tab1ItemSize,
                    backgroundColor: '#aaa',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text>{index}</Text>
            </View>
        );
    };

    const rednerTab2Item = ({ item, index }) => {
        return (
            <View
                style={{
                    marginLeft: index % 3 === 0 ? 0 : 10,
                    borderRadius: 16,
                    width: tab2ItemSize,
                    height: tab2ItemSize,
                    backgroundColor: '#aaa',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text>{index}</Text>
            </View>
        );
    };

    const renderLabel = ({ route, focused }) => {
        return (
            <Text style={[styles.label, { opacity: focused ? 1 : 0.5 }]}>
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
                renderItem = rednerTab1Item;
                break;
            case 'tab2':
                numCols = 3;
                data = tab2Data;
                renderItem = rednerTab2Item;
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
                    style={styles.tab}
                    renderLabel={renderLabel}
                    indicatorStyle={styles.indicator}
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
        <>
            {renderBackground()}
            <SafeArea style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    {renderTabView()}
                    {renderHeader()}
                </View>
            </SafeArea>
        </>
    );
};

export { Profile };

const styles = StyleSheet.create({
    header: {
        top: 0,
        height: 300,
        width: '100%',
        backgroundColor: '#FFFFFF',
        position: 'absolute',
    },
    label: { fontSize: 16, color: '#222' },
    tab: { elevation: 0, shadowOpacity: 0, backgroundColor: '#FFCC80' },
    indicator: { backgroundColor: '#222' },
});