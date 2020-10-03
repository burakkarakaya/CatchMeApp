import React, { useState } from 'react';
import { View, } from 'react-native';
import { ImagePicker, Video as MediaElement, ProgressiveImage } from '_components';
import { Header as CustomHeader } from './Header';
import { Header, Button } from '_UI';
import { UploadHeaderSettings } from '_config';

import { connect } from 'react-redux';
import { logout } from '_store/actions';

const Main = ({ navigation, logout: _logout }) => {

    const [mediaType, setMediaType] = useState(null);

    const [mediaURI, setMediaURI] = useState(null);

    const element = mediaType && (mediaType == 'image' ? <ProgressiveImage style={{ width: null, height: null, flex: 1 }} containerStyle={{ flex: 1 }} source={{ uri: mediaURI }} /> : <MediaElement uri={mediaURI} />);

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

    const _button = <Button data={{ type: 'signin' }} type={'blueButton'}>{'Next'}</Button>;
    const _header = UploadHeaderSettings()['video'] || [];

    return (
        <View style={{ flex: 1 }}>
            <Header rightButton={_button} style={{ marginRight: 17 }} navigation={navigation} mode={'mode-2'} title={'Start a Duel'} />
            <CustomHeader data={_header} />
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