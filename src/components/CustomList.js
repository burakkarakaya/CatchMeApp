import React, { useImperativeHandle, useEffect } from 'react';
import {
    Animated,
} from 'react-native';
import { useFetch } from '_hooks';
import PropTypes from 'prop-types';
import { NoResultItem } from '_subview/noResult/NoResultItem';

function CustomList({
    config,
    numCols,
    style,
    contentContainerStyle,
    ItemSeparatorComponent,
    ListHeaderComponent,
    ListEmptyComponent,
    NoResultComponent,
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
                if (data.length > 0 && flatListItemRef[index] != null && flatListItemRef[index].current) {
                    flatListItemRef[index].current.activeted(obj);
                }
            },
            disableListItem: (index, obj = {}) => {
                if (data.length > 0 && flatListItemRef[index] != null && flatListItemRef[index].current) {
                    flatListItemRef[index].current.disabled(obj);
                }

            }
        };
    });

    const [{ data, isLoading, isLoaded, isError }, loadMoreData] = useFetch(config.api);

    const RenderItem = config.renderItem;

    const _renderItemProp = config.renderItemProp || {};

    const flatListRef = React.useRef();

    const flatListItemRef = {};

    const onListEmptyComponent = () => {

        if (!isLoaded)
            return ListEmptyComponent;

        if (isLoaded && data.length == 0)
            return NoResultComponent || <NoResultItem />;

        if (isLoaded)
            return null;
    }

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
            ListEmptyComponent={onListEmptyComponent}
            getItemLayout={getItemLayout}
            onScroll={onScroll}
            onMomentumScrollBegin={onMomentumScrollBegin}
            onScrollEndDrag={onScrollEndDrag}
            onMomentumScrollEnd={onMomentumScrollEnd}
            renderItem={({ item, index }) => {
                if (createItemRef) {
                    const _ref = React.createRef();
                    flatListItemRef[index] = _ref;
                    return <RenderItem ref={_ref} {..._renderItemProp} {...item} index={index} />
                } else
                    return <RenderItem {..._renderItemProp} {...item} index={index} />
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
    NoResultComponent: PropTypes.element,
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
    NoResultComponent: null,
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