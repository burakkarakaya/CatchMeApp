import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import { LinearGradient } from 'expo-linear-gradient';
import PropTypes from 'prop-types';

const Container = React.memo(({ children }) => {

    return (
        <LinearGradient
            colors={['rgba(94, 141, 230, 0)', 'rgba(94, 141, 230, 0.21)']}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
        >
            <SafeAreaProvider>
                <SafeAreaView style={{ flex: 1 }}>
                    {children}
                </SafeAreaView>
            </SafeAreaProvider>
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