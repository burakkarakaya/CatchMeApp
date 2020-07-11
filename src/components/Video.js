import React, {useImperativeHandle} from 'react';
import { Video as CustomVideo } from 'expo-av';
import PropTypes from 'prop-types';

function Video({ uri, onLoad, onError, props }, ref) {

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
            style={{ flex: 1 }}
            onLoad={onLoad}
            onError={onError}
            {...props}
        />
    );
};

Video = React.forwardRef(Video);

Video.propTypes = {
    uri: PropTypes.string,
    onLoad: PropTypes.func,
    onError: PropTypes.func,
    props: PropTypes.object,
};

Video.defaultProps = {
    uri: '',
    onLoad: null,
    onError: null,
    props: {},
};

export { Video }