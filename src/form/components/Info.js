import React from 'react';
import {
    TouchableOpacity,
    Text,
} from 'react-native';
import * as styles from '../styles/';
import { ParserHTML } from '_components';
import PropTypes from 'prop-types';

function Info({ title, data, style, onPress }) {

    const _onPress = () => {
        if (onPress)
            onPress(data);
    }

    return (
        <TouchableOpacity onPress={_onPress} style={[styles.info.wrapper, style.wrapper]} activeOpacity={.8}>
            <ParserHTML html={title} style={style} />
        </TouchableOpacity>
    );
};

Info.defaultProps = {
    title: '',
    data: {},
    style: {},
    onPress: null,
};

Info.propTypes = {
    title: PropTypes.string,
    data: PropTypes.object,
    style: PropTypes.object,
    onPress: PropTypes.func,
};

export { Info };