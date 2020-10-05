import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { Layout } from '_constants';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Main({ style, message: _message }) {

    const { visibility = false, type, data = [] } = _message;

    if (!visibility)
        return null;

    const _insets = { paddingTop: Layout.insets().top || 12, paddingBottom: 12 },
        _color = type == 'error' ? '#FF0000' : '#36D98E',
        text = [];

    Object
        .entries(data)
        .forEach(([ind, item]) => {
            text.push(<Text key={'message-' + ind} style={{ color: '#FFFFFF', marginTop: ind > 0 ? 8 : 0 }}>{item}</Text>)
        });

    return (
        <View style={[{ backgroundColor: _color, position: 'absolute', zIndex: 2000, width: '100%', top: 0, left: 0, justifyContent: 'center', alignItems: 'center' }, _insets, style]}>
            {text}
        </View>
    );
};

Main.defaultProps = {
    style: {},
    preloader: false
};

Main.propTypes = {
    style: PropTypes.object,
    preloader: PropTypes.bool,
};

const mapStateToProps = ({ general }) => {
    const { message } = general;
    return { message };
};

const GeneralMessage = connect(mapStateToProps)(Main);

export { GeneralMessage };