import React, { useImperativeHandle, useEffect } from 'react';
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
    ListEmptyComponent,
    getItemLayout,
    createItemRef,
    onScroll,
    onScrollEndDrag,
    onMomentumScrollEnd,
    onMomentumScrollBegin,
    onDataLoaded,
    props
}, ref) {

    useImperativeHandle(ref, () => {
        return {
            getData: () => {
                return data || [];
            },
            scrollToOffset: (_offset) => {
                if (flatListRef.current)
                    flatListRef.current.getNode().scrollToOffset({ animated: false, offset: _offset.y < 0 ? 0 : _offset.y });
            },
            scrollToIndex: (index) => {
                flatListRef.current.getNode().scrollToIndex({ index: index, animated: true });
            },

            /* 
                flatlist item ref
                itemlarda public activeted, disabled fonk erişir
            */
            activeListItem: (index, obj = {}) => {
                if (data.length > 0 && flatListItemRef[index] != null && flatListItemRef[index].current){
                    flatListItemRef[index].current.activeted(obj);
                }
            },
            disableListItem: (index, obj = {}) => {
                if (data.length > 0 && flatListItemRef[index] != null && flatListItemRef[index].current){
                    flatListItemRef[index].current.disabled(obj);
                }
                    
            }
        };
    });

    const [{ data, isLoading, isLoaded, isError }, loadMoreData] = useFetch(config.api);

    const RenderItem = config.renderItem;

    const flatListRef = React.useRef();

    const flatListItemRef = {};

    useEffect(() => {
        if (isLoaded && onDataLoaded)
            onDataLoaded(data);

    }, [isLoaded]);

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
            ListEmptyComponent={ListEmptyComponent}
            getItemLayout={getItemLayout}
            onScroll={onScroll}
            onMomentumScrollBegin={onMomentumScrollBegin}
            onScrollEndDrag={onScrollEndDrag}
            onMomentumScrollEnd={onMomentumScrollEnd}
            renderItem={({ item, index }) => {
                if (createItemRef) {
                    const _ref = React.createRef();
                    flatListItemRef[index] = _ref;
                    return <RenderItem ref={_ref} {...item} index={index} />
                } else
                    return <RenderItem {...item} index={index} />
            }}
            {...props}
            onEndReachedThreshold={0.4}
            onEndReached={({ distanceFromEnd }) => {
                if (distanceFromEnd < 0) return;
                loadMoreData();
            }}
        />
    );
};

CustomList = React.forwardRef(CustomList);

CustomList.propTypes = {
    config: PropTypes.object,
    numCols: PropTypes.number,
    style: PropTypes.object,
    contentContainerStyle: PropTypes.object,
    ItemSeparatorComponent: PropTypes.func,
    ListHeaderComponent: PropTypes.element,
    ListEmptyComponent: PropTypes.element,
    getItemLayout: PropTypes.func,
    createItemRef: PropTypes.bool,
    onScroll: PropTypes.any,
    onMomentumScrollBegin: PropTypes.func,
    onScrollEndDrag: PropTypes.func,
    onMomentumScrollEnd: PropTypes.func,
    onDataLoaded: PropTypes.func,
    props: PropTypes.object,
};

CustomList.defaultProps = {
    config: {},
    numCols: 1,
    style: {},
    contentContainerStyle: {},
    ItemSeparatorComponent: null,
    ListHeaderComponent: null,
    ListEmptyComponent: null,
    getItemLayout: null,
    createItemRef: false, // flatlist itemlar için referans oluşturulması. Feed sayfasında ihityaç var diğer yerler olmadığı için boşuna oluşturmaya gerek yok
    onScroll: null,
    onMomentumScrollBegin: null,
    onScrollEndDrag: null,
    onMomentumScrollEnd: null,
    onDataLoaded: null,
    props: {},
};

export { CustomList };