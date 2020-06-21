import React, { useState, useEffect, useRef } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Dimensions,
    Animated,
} from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';

const TabBarHeight = 48;
const HeaderHeight = 300;
const tab1ItemSize = (Dimensions.get('window').width - 30) / 2;
const tab2ItemSize = (Dimensions.get('window').width - 40) / 3;

class TabScene extends React.Component {
    render = () => {
        const windowHeight = Dimensions.get('window').height;
        const {
            numCols,
            data,
            renderItem,
            onGetRef,
            scrollY,
            onScrollEndDrag,
            onMomentumScrollEnd,
            onMomentumScrollBegin,
        } = this.props;
        return (
            <Animated.FlatList
                scrollToOverflowEnabled={true}
                numColumns={numCols}
                ref={onGetRef}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: true },
                )}
                onMomentumScrollBegin={onMomentumScrollBegin}
                onScrollEndDrag={onScrollEndDrag}
                onMomentumScrollEnd={onMomentumScrollEnd}
                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                ListHeaderComponent={() => <View style={{ height: 10 }} />}
                contentContainerStyle={{
                    paddingTop: HeaderHeight + TabBarHeight,
                    paddingHorizontal: 10,
                    minHeight: windowHeight - TabBarHeight,
                }}
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
            />
        );
    };
}

const HomeScreen = () => {
    const [tabIndex, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'tab1', title: 'Tab1' },
        { key: 'tab2', title: 'Tab2' },
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
        listRefArr.current.forEach((item) => {console.warn(item.value);
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
                <Text>{'Header'}</Text>
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
                                value: ref,
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
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                {renderTabView()}
                {renderHeader()}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    header: {
        top: 0,
        height: 300,
        width: '100%',
        backgroundColor: '#40C4FF',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
    },
    label: { fontSize: 16, color: '#222' },
    tab: { elevation: 0, shadowOpacity: 0, backgroundColor: '#FFCC80' },
    indicator: { backgroundColor: '#222' },
});



import { createDrawerNavigator } from '@react-navigation/drawer';


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