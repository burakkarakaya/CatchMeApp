import React from 'react';
import {
    View,
    ActivityIndicator,
    StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

function EmptyItem({ size, color, style }) {
    return (
        <View style={[styles.container, style]}>
            <ActivityIndicator size={size} color={color} />
        </View>
    );
};

EmptyItem.defaultProps = {
    size: 'small',
    color: '#000000',
    style: {}
};

EmptyItem.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string,
    style: PropTypes.object,
};

EmptyItem = React.memo(EmptyItem);

export { EmptyItem };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
});