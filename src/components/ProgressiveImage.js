import React, { useEffect } from 'react';
import {
    View,
    StyleSheet,
    Animated,
    ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';

/* 
    <ProgressiveImage
        source={{ uri: 'https://images.pexels.com/photos/671557/pexels-photo-671557.jpeg?' }}
        style={{ width: 300, height: 300 }}
    />
*/

const ProgressiveImage = React.memo(({ indicatorColor, indicatorSize, source, style, containerStyle, props, onError }) => {

    let _isMounted = true;

    const placeholderOpacity = new Animated.Value(1);

    const imageOpacity = new Animated.Value(0);

    useEffect(() => (() => {
        _isMounted = false;
    }), []);

    const onImageLoad = () => {
        if (_isMounted) {
            Animated.timing(imageOpacity, {
                toValue: 1,
            }).start();

            Animated.timing(placeholderOpacity, {
                toValue: 0,
            }).start();

        }
    }

    const onImageError = () => {
        if (onError)
            onError();
    }

    const _image = source.uri && (
        <>
            <Animated.View style={[styles.placeholder, style, { opacity: placeholderOpacity }]}>
                <ActivityIndicator size={indicatorSize} color={indicatorColor} />
            </Animated.View>

            <Animated.Image
                {...props}
                source={source}
                style={[styles.imageOverlay, { opacity: imageOpacity }, style]}
                onLoad={onImageLoad}
                onError={onImageError}
            />
        </>
    );

    return (
        <View style={[styles.container, containerStyle]}>
            {_image}
        </View>
    );

});

ProgressiveImage.defaultProps = {
    indicatorColor: '#FFFFFF',
    indicatorSize: 'small',
    style: {},
    containerStyle: {}
};

ProgressiveImage.propTypes = {
    indicatorColor: PropTypes.string,
    indicatorSize: PropTypes.string,
    source: PropTypes.object,
    style: PropTypes.object,
    containerStyle: PropTypes.object
};

export { ProgressiveImage };

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        position: 'relative'
    },
    placeholder: {
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageOverlay: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        zIndex: 3
    }
});