import React from 'react';
import {
    View,
    ScrollView,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import * as styles from './styles';
import { Layout } from '_constants';
import PropTypes from 'prop-types';

const Container = React.memo(({ children }) => {
    const _paddingBottom = Layout.insets().bottom || 0;
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <ScrollView
                style={{ flex: 1 }}
                contentContainerStyle={{ flexGrow: 1 }}
            >
                <View style={[styles.container, { paddingBottom: _paddingBottom + 20 }]}>
                    {children}
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
});

Container.defaultProps = {
    children: null,
};

Container.propTypes = {
    children: PropTypes.element,
};

export default Container;