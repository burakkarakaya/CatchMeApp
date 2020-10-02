import React from 'react';
import {
    View,
    ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Main({ style, preloader: _preloader }) {

    if (!_preloader)
        return null;

    return (
        <View style={[{ flex: 1, backgroundColor: 'rgba(0,0,0,.5)', position: 'absolute', zIndex: 1000, top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }, style]}>
            <ActivityIndicator size={'large'} color={'#FFFFFF'} />
        </View>
    );
};

Main.defaultProps = {
    style: {},
    preloader: false
};

Main.propTypes = {
    style: PropTypes.object,
    preloader: PropTypes.bool,
};

const mapStateToProps = ({ general }) => {
    const { preloader } = general;
    return { preloader };
};

const PreLoader = connect(mapStateToProps)(Main);

export { PreLoader };