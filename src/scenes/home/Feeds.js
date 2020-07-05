import React from 'react';
import {
    View,
    FlatList
} from 'react-native';
import { connect } from 'react-redux';
import { useFetch } from '_hooks';

import {
    FeedItem,
} from '_subview';
import { TabScene } from '_subview/profile/TabScene';

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

    const RenderItem = _config.renderItem;

    const [{ data, isLoading, isError }] = useFetch(_config.api);

    if (data.length == 0) return null;

    return (

        <FlatList
            data={data}
            renderItem={({ item, index }) => <RenderItem {...item} index={index} />}
            keyExtractor={(item, index) => index.toString()}
        />

    );
}

Main.propTypes = {

};

Main.defaultProps = {

};

const mapStateToProps = () => {
    return {};
};

const Feeds = connect(mapStateToProps)(Main);

export { Feeds };