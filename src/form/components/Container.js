import React, { useImperativeHandle, useState } from 'react';
import {
    View,
    Text
} from 'react-native';
import * as styles from '../styles/';
import PropTypes from 'prop-types';

function Container({ title, style, children }, ref) {

    useImperativeHandle(ref, () => {
        return {
            get: () => {
                return value;
            },
            showError: (k) => {
                setErrMsg(k);
            },
            hideError: () => {
                setErrMsg('');
            }
        };
    });

    const [errMsg, setErrMsg] = useState(''),
        _styles = errMsg != '' ? (style.errorContainer || styles.errorContainer) : (style.container || styles.container);

    return (
        <View style={[_styles.wrapper]}>
            <View style={[_styles.header]}>
                <Text style={[_styles.title]}>{title}</Text>
                <Text style={[_styles.errorText]}>{errMsg}</Text>
            </View>
            <View style={_styles.elementWrapper}>
                {children}
            </View>
        </View>
    );
};


Container = React.forwardRef(Container);

Container.defaultProps = {
    children: null,
    title: '',
    style: {}
};

Container.propTypes = {
    children: PropTypes.element,
    title: PropTypes.string,
    style: PropTypes.object,
};

export default Container;