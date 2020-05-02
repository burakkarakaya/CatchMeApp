import React, { useImperativeHandle, useState } from 'react';
import {
    View,
    Text
} from 'react-native';
import PropTypes from 'prop-types';

function Container({ title, children }, ref) {

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

    const [errMsg, setErrMsg] = useState('');

    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>{title}</Text>
                <Text>{errMsg}</Text>
            </View>
            {children}
        </View>
    );
};


Container = React.forwardRef(Container);

Container.defaultProps = {
    children: null,
    title: ''
};

Container.propTypes = {
    children: PropTypes.element,
    title: PropTypes.string,
};

export default Container;