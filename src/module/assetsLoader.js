import React from 'react';
import * as Font from 'expo-font';

function assetsLoader() {
    return new Promise((resolve, reject) => {
        Promise.all([
            Font.loadAsync({
                'Regular': require('../../assets/fonts/Inter-Regular.ttf'),
                'Medium': require('../../assets/fonts/Inter-Medium.ttf'),
                'Bold': require('../../assets/fonts/Inter-Bold.ttf')
            })
        ])
            .then(() => {
                resolve();
            })
            .catch(() => {
                reject();
            })
    });
};

export { assetsLoader };