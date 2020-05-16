import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Mixins, Colors } from '_styles';

const INFO = 'info';
const SUCCESS = 'success';
const ERROR = 'error';

const MessageView = React.memo(({
    /**
     * @param {String} message text to be displayed
     */
    message,
    /**
     * @param {String} type determines styling of the text
     * type value can be
     * 1. 'info'
     * 2. 'success'
     * 3. 'error'
     */
    type,
    containerStyle
}) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <Text style={styles.text(type)}>{message}</Text>
        </View>
    );
});

const getTextColor = (type) => {
    switch (type) {
        case SUCCESS:
            return Colors.shamrock;
        case ERROR:
            return Colors.red;
        default:
            return Colors.black;
    }
};

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: (type, theme) => ({
        textAlign: 'center',
        ...Mixins.padding(8, 8, 8, 8),
        color: getTextColor(type),
    }),
});

MessageView.propTypes = {
    message: PropTypes.string.isRequired,
    type: PropTypes.oneOf([INFO, SUCCESS, ERROR]),
    containerStyle: PropTypes.object,
};

MessageView.defaultProps = {
    type: INFO,
    containerStyle: {}
};

export { MessageView };