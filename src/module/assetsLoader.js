import React from 'react';
import * as Font from 'expo-font';
import { fonts } from '_assets';

function assetsLoader() {
    return new Promise((resolve, reject) => {
        Promise.all([
            Font.loadAsync({
                'Regular': fonts.regular,
                'Medium': fonts.medium,
                'Bold': fonts.bold
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