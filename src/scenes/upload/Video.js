import React, { useState } from 'react';
import { View, } from 'react-native';
import { ImagePicker, Video as MediaElement, ProgressiveImage } from '_components';
import { Header as CustomHeader } from './Header';
import { Header, Button } from '_UI';
import { UploadHeaderSettings } from '_config';
import {
    NAVIGATION_TO_UPLOAD_DUEL,
} from '_navigations/routes';
import { connect } from 'react-redux';
import { 
    setUploadVideo 
} from '_store/actions';

const Main = ({ navigation, setUploadVideo: _setUploadVideo }) => {

    const [mediaData, setMediaData] = useState(null);

    const element = mediaData && (mediaData['type'] == 'image' ? <ProgressiveImage style={{ width: null, height: null, flex: 1 }} containerStyle={{ flex: 1 }} source={{ uri: mediaData['uri'] }} /> : <MediaElement uri={mediaData['uri']} />);

    const _onPickerCallback = ({ data }) => {
        try {
            const { cancelled = false } = data;
            if (cancelled)
                setMediaData(null);
            else
                setMediaData(data);
        } catch (error) {
            setMediaData(null);
        }
    }

    const _onPress = () => {
        if (mediaData == null) {

            return false;
        }

        _setUploadVideo( mediaData );
        navigation.navigate(NAVIGATION_TO_UPLOAD_DUEL);
    }

    const _button = <Button onPress={_onPress} data={{ type: 'nextStep' }} type={'blueButton'}>{'Next'}</Button>;

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

const Video = connect(mapStateToProps, { setUploadVideo })(Main);

export { Video };