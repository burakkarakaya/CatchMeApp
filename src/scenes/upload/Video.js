import React, { useState } from 'react';
import { Button, Image, View, } from 'react-native';
import { ImagePicker, Video as MediaElement, ProgressiveImage } from '_components';
import { connect } from 'react-redux';
import { logout } from '_store/actions';

const Main = ({ navigation, logout: _logout }) => {

    const [mediaType, setMediaType] = useState(null);

    const [mediaURI, setMediaURI] = useState(null);

    const element = mediaType && (mediaType == 'image' ? <ProgressiveImage source={{ uri: mediaURI }} /> : <MediaElement uri={mediaURI} />);

    const _onPickerCallback = ({ data }) => {
        try {
            const { type, uri, cancelled } = data;
            setMediaType(type);
            setMediaURI(uri);
        } catch (error) {
            setMediaType(null);
            setMediaURI(null);
        }
    }

    return (
        <View style={{ flex: 1, paddingTop: 50 }}>
            <ImagePicker callback={_onPickerCallback} />
            {element}
        </View>
    );
}

Main.propTypes = {

};

Main.defaultProps = {

};

const mapStateToProps = () => {
    return {};
};

const Video = connect(mapStateToProps)(Main);

export { Video };