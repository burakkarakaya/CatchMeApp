import React from 'react';
import { Platform, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';

const KeyboardAvoidingComponent = React.memo(({ children, style }) => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={[{ flex: 1 }, style]}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                {children}
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
});

export { KeyboardAvoidingComponent };
