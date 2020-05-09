import React from 'react';
import { Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
// https://github.com/wix/react-native-keyboard-aware-scrollview
const KeyboardAvoidingComponent = React.memo(({ children }) => {
    return (
        <KeyboardAwareScrollView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
            contentContainerStyle={{ flex: 1 }}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                {children}
            </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
    );
});

export { KeyboardAvoidingComponent };
