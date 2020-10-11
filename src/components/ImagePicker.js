import React, { useEffect } from 'react';
import { Platform, Image, View } from 'react-native';
import * as _ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import {
    Layout,
} from '_constants';
import { images } from '_assets';
import { Button, } from '_UI';
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
                mediaTypes: _ImagePicker.MediaTypeOptions.Videos,
                videoExportPreset: _ImagePicker.MediaTypeOptions.H264_640x480,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            _callback({ type: 'success', data: result });
        } catch (err) {
            _callback({ type: 'error', data: err });
        }
    };

    const _position = Layout.insets(),
        _right= 20,
        _bottom = _position.bottom || 20; 

    return (
        <View style={{ position: 'absolute', bottom: _bottom, right: _right, zIndex: 3, justifyContent: 'center', alignItems: 'center' }}>
            <Image
                style={{ width: 70, height: 90, marginBottom: 20 }}
                source={images.selectVideo}
            />
            <Button type={'solid'} onPress={_pickImage}>{'Select Video'}</Button>
        </View>
    );
}

ImagePicker = React.memo(ImagePicker);

ImagePicker.propTypes = {
    callback: PropTypes.func,
};

ImagePicker.defaultProps = {
    callback: null
};

export { ImagePicker };