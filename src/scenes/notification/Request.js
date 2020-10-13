import React, { useImperativeHandle } from 'react';
import {
    View,
    Text,
} from 'react-native';
import {
    CustomList,
} from '_components/CustomList';
import PropTypes from 'prop-types';
import { EmptyItem } from '_subview/emptyItem/EmptyItem';
import { RequestConfig } from '_config/services/NotificationConfig';
import { Header } from '_UI';
import { connect } from 'react-redux';

function Main({ navigation, title, param, type }, ref) {

    useImperativeHandle(ref, () => {
        return {};
    });

    const flatListRef = React.useRef();
    
    const _config = { ...RequestConfig };

    return (
        <>
            <Header navigation={navigation} mode={'mode-3'} title={title} />
            <CustomList
                ref={flatListRef}
                config={_config}
                ListEmptyComponent={<EmptyItem />}
                ItemSeparatorComponent={() => <View style={{ height: 14 }} />}
                contentContainerStyle={{ padding: 15 }}
                style={{ flex: 1 }}
                props={{
                    scrollEventThrottle: 16,
                }}
            />
        </>
    );
};

Main = React.forwardRef(Main);

Main.propTypes = {
    title: PropTypes.string,
    param: PropTypes.object,
    type: PropTypes.string,
};

Main.defaultProps = {
    title: '',
    param: {},
    type: ''
};

const mapStateToProps = () => {
    return {};
};

const Request = connect(mapStateToProps, null, null, { forwardRef: true })(Main);

export { Request };