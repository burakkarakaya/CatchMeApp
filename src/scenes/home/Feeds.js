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
            _ref.current.activeListItem(index);

            return () => _ref.current.disableListItem(index);
        }, [])
    );

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

        _ref.current.scrollToIndex(index);


        if (temp != index)
            _ref.current.disableListItem(temp);

        _ref.current.activeListItem(index);

        temp = index;
    }

    const onGetItemLayout = (data, index) => ({ length: _ScreenSize, offset: _ScreenSize * index, index });

    const _onDataLoaded = () => {
        _ref.current.activeListItem(index);
    };

    return (
        <CustomList
            config={_config}
            getItemLayout={onGetItemLayout}
            onScrollEndDrag={onScrollEndDrag}
            ref={_ref}
            ListEmptyComponent={<View style={{ height: _ScreenSize, backgroundColor: 'red' }} />}
            createItemRef={true}
            onDataLoaded={_onDataLoaded}
            props={{
                snapToAlignment: 'start',
                snapToInterval: _ScreenSize + 10,
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