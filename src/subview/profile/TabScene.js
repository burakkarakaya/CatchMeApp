import React from 'react';
import {
    View,
    Animated,
} from 'react-native';

const TabScene = ({
    numCols,
    data,
    renderItem,
    onGetRef,
    scrollY,
    onScrollEndDrag,
    onMomentumScrollEnd,
    onMomentumScrollBegin,
    contentContainerStyle
}) => {

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
            ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
            ListHeaderComponent={() => <View style={{ height: 15 }} />}
            contentContainerStyle={contentContainerStyle}
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
        />
    );
};

export { TabScene };