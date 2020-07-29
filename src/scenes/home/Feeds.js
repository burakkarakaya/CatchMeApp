import React from 'react';
import {
    View,
    Platform
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { connect } from 'react-redux';
import {
    CustomList,
} from '_components';
import {
    Layout,
} from '_constants';

const Main = ({ config: _config }) => {

    useFocusEffect(
        React.useCallback(() => {
            activeTab = true;
            _ref.current.activeListItem(index, { type: 'all' });

            return () => {

                activeTab = false;

                /* 
                    tüm videoları pasif etmek
                */
                const data = _ref.current.getData() || [];
                setTimeout(() => {
                    for (var ind = 0; ind < data.length; ++ind)
                        _ref.current.disableListItem(ind, { type: 'video' });
                }, 555);
            }
        }, [])
    );

    let activeTab = false;

    let index = 0;

    let temp = 0;

    const _ref = React.useRef();

    const _ScreenSize = Layout.ScreenSize.height;

    const _isLegitIndex = (index, length) => {
        if (index < 0 || index >= length) return false;
        return true;
    }

    const onScrollEndDrag = (evt) => {

        const data = _ref.current.getData() || [],
            velocity = evt.nativeEvent.velocity.y,
            coor = evt.nativeEvent.contentOffset.y;

        let nextIndex;

        if (Platform.OS == 'ios')
            nextIndex = velocity > 0 ? index + 1 : index - 1;
        else
            nextIndex = velocity < 0 ? index + 1 : index - 1;

        if (_isLegitIndex(nextIndex, data.length))
            index = nextIndex;

        if (velocity == 0)
            index = Math.round(parseFloat(coor / _ScreenSize));

        if (temp != index)
            _ref.current.disableListItem(temp, { type: 'video' });

        _ref.current.activeListItem(index, { type: 'poster' });

        temp = index;
    }

    const onMomentumScrollEnd = (evt) => {
        const data = _ref.current.getData() || [],
            contentSize = evt.nativeEvent.contentSize.height,
            offset = evt.nativeEvent.contentOffset.y;

        index = Math.ceil((offset / contentSize) * data.length);


        if (temp != index)
            _ref.current.disableListItem(temp, { type: 'video' });

        _ref.current.activeListItem(index, { type: 'all' });

        temp = index;

    }

    const onGetItemLayout = (data, index) => ({ length: _ScreenSize, offset: _ScreenSize * index, index });

    const _onDataLoaded = () => {
        if (activeTab)
            _ref.current.activeListItem(index, { type: 'all' });
    };

    return (
        <CustomList
            config={_config}
            getItemLayout={onGetItemLayout}
            onScrollEndDrag={onScrollEndDrag}
            onMomentumScrollEnd={onMomentumScrollEnd}
            ref={_ref}
            ListEmptyComponent={<View style={{ height: _ScreenSize, backgroundColor: 'red' }} />}
            createItemRef={true}
            onDataLoaded={_onDataLoaded}
            props={{
                snapToAlignment: 'start',
                snapToInterval: _ScreenSize,
                decelerationRate: 'fast',
                pagingEnabled: true,
                bounces: false,
                initialNumToRender: 4,
                maxToRenderPerBatch: 2
            }}
        />
    );
};

Main.propTypes = {

};

Main.defaultProps = {

};

const mapStateToProps = () => { return {}; };

const Feeds = connect(mapStateToProps)(Main);

export { Feeds };