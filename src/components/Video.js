import React, { useImperativeHandle } from 'react';
import { Video as CustomVideo } from 'expo-av';
import PropTypes from 'prop-types';

function Video({ uri, onLoad, onLoadStart, onError, props, style }, ref) {

    useImperativeHandle(ref, () => {
        return {
            play: () => {
                videoRef.current.playAsync();
            },
            stop: () => {
                videoRef.current.stopAsync();
            }
        };
    });

    const videoRef = React.useRef();

    return (
        <CustomVideo
            ref={videoRef}
            source={{ uri: uri }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay={true}
            isLooping={true}
            style={[{ flex: 1 }, style]}
            onLoad={onLoad}
            onLoadStart={onLoadStart}
            onError={onError}
            {...props}
        />
    );
};

Video = React.forwardRef(Video);

Video.propTypes = {
    uri: PropTypes.string,
    onLoadStart: PropTypes.func,
    onLoad: PropTypes.func,
    onError: PropTypes.func,
    style: PropTypes.object,
    props: PropTypes.object,
};

Video.defaultProps = {
    uri: '',
    onLoadStart: null,
    onLoad: null,
    onError: null,
    style: {},
    props: {},
};

Video = React.memo(Video);

export { Video }