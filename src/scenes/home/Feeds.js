import React from 'react';
import {
    Platform
} from 'react-native';
import { connect } from 'react-redux';
import {
    CustomList,
} from '_components';
import {
    FeedItem,
} from '_subview';
import {
    Layout,
} from '_constants';

const _config = {
    api: {
        type: 'FeedService', // servis tipi
        func: 'Get', // ilgili servis tipinde kullanacağımız fonk.
        param: { page: 0, feedType: 'forYou' },
        keys: 'feeds',
    },
    renderItem: FeedItem
};

const Main = ({ navigation }) => {

    let index = 0;

    const _ref = React.useRef();

    const _ScreenSize = Layout.ScreenSize.height;

    const _isLegitIndex = (index, length) => {
        if (index < 0 || index >= length) return false;
        return true;
    }

    const _onScrollEndDrag = (evt) => {

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
    }

    return (
        <CustomList
            config={_config}
            onScrollEndDrag={_onScrollEndDrag}
            ref={_ref}
        />
    );
};

Main.propTypes = {

};

Main.defaultProps = {

};

const mapStateToProps = () => {
    return {};
};

const Feeds = connect(mapStateToProps)(Main);

export { Feeds };