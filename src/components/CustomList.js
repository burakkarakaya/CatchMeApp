import React, { useImperativeHandle } from 'react';
import {
    Animated,
} from 'react-native';
import { useFetch } from '_hooks';
import PropTypes from 'prop-types';

function CustomList({
    config,
    numCols,
    style,
    contentContainerStyle,
    ItemSeparatorComponent,
    ListHeaderComponent,
    onScroll,
    onScrollEndDrag,
    onMomentumScrollEnd,
    onMomentumScrollBegin,
    props
}, ref) {

    useImperativeHandle(ref, () => {
        return {
            getData: () => {
                return data || [];
            },
            scrollToOffset: (_offset) => {
                flatListRef.current.scrollToOffset({ animated: false, offset: _offset.y });
            },
            scrollToIndex: (index) => {
                flatListRef.current.getNode().scrollToIndex({ index: index, animated: true });
            }
        };
    });

    const [{ data, isLoading, isError }] = useFetch(config.api);

    const RenderItem = config.renderItem;

    const flatListRef = React.useRef();

    return (
        <Animated.FlatList
            scrollToOverflowEnabled={true}
            numColumns={numCols}
            ref={flatListRef}
            scrollEventThrottle={16}
            data={data}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            style={style}
            contentContainerStyle={contentContainerStyle}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={ItemSeparatorComponent}
            ListHeaderComponent={ListHeaderComponent}
            onScroll={onScroll}
            onMomentumScrollBegin={onMomentumScrollBegin}
            onScrollEndDrag={onScrollEndDrag}
            onMomentumScrollEnd={onMomentumScrollEnd}
            renderItem={({ item, index }) => <RenderItem {...item} index={index} />}
            {...props}
        />
    );
};

CustomList = React.forwardRef(CustomList);

CustomList.propTypes = {
    config: PropTypes.object,
    numCols: PropTypes.number,
    style: PropTypes.object,
    contentContainerStyle: PropTypes.object,
    ItemSeparatorComponent: PropTypes.element,
    ListHeaderComponent: PropTypes.element,
    onScroll: PropTypes.func,
    onMomentumScrollBegin: PropTypes.func,
    onScrollEndDrag: PropTypes.func,
    onMomentumScrollEnd: PropTypes.func,
    props: PropTypes.object,
};

CustomList.defaultProps = {
    config: {},
    numCols: 1,
    style: {},
    contentContainerStyle: {},
    ItemSeparatorComponent: null,
    ListHeaderComponent: null,
    onScroll: null,
    onMomentumScrollBegin: null,
    onScrollEndDrag: null,
    onMomentumScrollEnd: null,
    props: {},
};

export { CustomList };