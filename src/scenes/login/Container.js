import React from 'react';
import { SafeArea } from '_components';
import * as styles from './styles';
import { KeyboardAvoidingComponent, LinearGradient } from '_components';
import PropTypes from 'prop-types';

const Container = React.memo(({ children }) => {

    return (
        <LinearGradient
            colors={['rgba(94, 141, 230, 0)', 'rgba(94, 141, 230, 0.21)']}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
        >
            <KeyboardAvoidingComponent>
                <SafeArea style={styles.container}>
                    {children}
                </SafeArea>
            </KeyboardAvoidingComponent>
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