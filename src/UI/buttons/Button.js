import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

const Button = React.memo(({ children, onPress, onLayout, data }) => {

    const _onPress = () => {
        if (onPress)
            onPress(data);
    }

    const _onLayout = (e) => {
        if (onLayout)
            onLayout({ layout: e.nativeEvent.layout });
    }

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={_onPress}
            onLayout={_onLayout}
        >
            <View>
                <Text>{children}</Text>
            </View>
        </TouchableOpacity>
    );
});

Button.defaultProps = {
    children: null,
    onPress: null,
    onLayout: null,
    data: {}
};

Button.propTypes = {
    children: PropTypes.string,
    onPress: PropTypes.func,
    onLayout: PropTypes.func,
    data: PropTypes.object,
};

export { Button };