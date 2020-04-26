import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

export default function Test() {
    const { t, i18n } =  useTranslation('login');

    console.warn(t('signin.hello'));

    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
