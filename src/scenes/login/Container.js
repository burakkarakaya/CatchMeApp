import React from 'react';
import { SafeArea } from '_components';
import { LinearGradient } from 'expo-linear-gradient';
import * as styles from './styles';
import PropTypes from 'prop-types';

const Container = React.memo(({ children }) => {

    return (
        <LinearGradient
            colors={['rgba(94, 141, 230, 0)', 'rgba(94, 141, 230, 0.21)']}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
        >
            <SafeArea style={styles.container}>
                {children}
            </SafeArea>
        </LinearGradient>
    );
});

Container.defaultProps = {
    children: null,
};

Container.propTypes = {
    children: PropTypes.element,
};

export default Container;