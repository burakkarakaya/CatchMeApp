import React from 'react';
import { View, } from 'react-native';
import { Header as CustomHeader } from './Header';
import { Header, Button } from '_UI';
import { UploadHeaderSettings, uploadForm } from '_config';
import Form from '_form/Form';
import { connect } from 'react-redux';
import { logout } from '_store/actions';

const Main = ({ navigation, upload: _upload, logout: _logout }) => {

    const _onPress = () => {
        console.warn('publish', formRef.current.getData(), _upload);
    }

    const _config = uploadForm();

    const formRef = React.useRef();

    const _button = <Button onPress={_onPress} data={{ type: 'nextStep' }} type={'blueButton'}>{'Publish'}</Button>;

    const _header = UploadHeaderSettings()['caption'] || [];

    return (
        <View style={{ flex: 1 }}>
            <Header rightButton={_button} style={{ marginRight: 17 }} navigation={navigation} mode={'mode-2'} title={'Start a Duel'} />
            <CustomHeader data={_header} />
            <View style={{ flex: 1, padding: 20 }}>
                <Form ref={formRef} config={_config} />
            </View>
        </View>
    );
}

Main.propTypes = {

};

Main.defaultProps = {

};

const mapStateToProps = ({ general }) => {
    const { upload } = general;
    return {
        upload
    };
};

const Caption = connect(mapStateToProps)(Main);

export { Caption };