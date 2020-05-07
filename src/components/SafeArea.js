import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import PropTypes from 'prop-types';

const SafeArea = React.memo(({ style, children }) => {

    return (

        <SafeAreaProvider>
            <SafeAreaView style={[{ flex: 1 }, style]}>
                {children}
            </SafeAreaView>
        </SafeAreaProvider>

    );
});

SafeArea.defaultProps = {
    children: null,
    style: {}
};

SafeArea.propTypes = {
    children: PropTypes.element,
    style: PropTypes.object,
};

export { SafeArea };