import React from 'react';
import {
    View,
    Animated,
} from 'react-native';
import {
    CustomList,
} from '_components';

const TabScene = ({
    onGetRef,
    scrollY,
    onScrollEndDrag,
    onMomentumScrollEnd,
    onMomentumScrollBegin,
    contentContainerStyle,
    config
}) => {
    
    return (
        <CustomList
            config={config}
            onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                { useNativeDriver: true },
            )}
            onScrollEndDrag={onScrollEndDrag}
            onMomentumScrollBegin={onMomentumScrollBegin}
            onMomentumScrollEnd={onMomentumScrollEnd}
            contentContainerStyle={contentContainerStyle}
            ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
            ListHeaderComponent={<View style={{ height: 15 }} />}
            numCols={2}
            props={{
                bounces: false,
                scrollEventThrottle: 16,
                ref: (ref) => { onGetRef(ref); },
                showsHorizontalScrollIndicator: false,
                showsVerticalScrollIndicator: false,
            }}
        />
    );
};

export { TabScene };