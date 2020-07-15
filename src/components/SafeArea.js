import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import PropTypes from 'prop-types';

const SafeArea = React.memo(({ style, children }) => {

    return (
        <SafeAreaView style={[{ flex: 1 }, style]}>
            {children}
        </SafeAreaView>
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