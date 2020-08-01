import React from 'react';
import {
    View,
} from 'react-native';
import * as styles from './styles';
import { Layout } from '_constants';
import PropTypes from 'prop-types';

const Container = React.memo(({ children }) => {
    const _paddingBottom = Layout.insets().bottom || 0;
    return (
        <View style={[styles.container, { paddingBottom: _paddingBottom + 20 }]}>
            {children}
        </View>
    );
});

Container.defaultProps = {
    children: null,
};

Container.propTypes = {
    children: PropTypes.element,
};

export default Container;