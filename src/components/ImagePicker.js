import React, { useEffect } from 'react';
import { Button, Platform } from 'react-native';
import * as _ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import PropTypes from 'prop-types';

function ImagePicker({ callback }) {

    useEffect(() => {

        const getPermissionAsync = async () => {

            try {
                if (Platform.OS !== 'web') {
                    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
                    if (status !== 'granted') {
                        alert('Sorry, we need camera roll permissions to make this work!');
                    }
                }

            } catch (error) {

            }
        };

        getPermissionAsync();

    }, []);

    _callback = (obj) => {
        if (callback)
            callback(obj);
    };

    _pickImage = async () => {
        try {
            let result = await _ImagePicker.launchImageLibraryAsync({
                mediaTypes: _ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            _callback({ type: 'success', data: result });
        } catch (err) {
            _callback({ type: 'error', data: err });
        }
    };

    return <Button title="Pick an image from camera roll" onPress={_pickImage} />;
}

ImagePicker = React.memo(ImagePicker);

ImagePicker.propTypes = {
    callback: PropTypes.func,
};

ImagePicker.defaultProps = {
    callback: null
};

export { ImagePicker };