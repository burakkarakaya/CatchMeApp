import React, { useImperativeHandle } from 'react';
import { Video as CustomVideo } from 'expo-av';
import PropTypes from 'prop-types';

function Video({ uri, onLoad, onLoadStart, onError, props, style }, ref) {


    useImperativeHandle(ref, () => {
        return {
            play: async () => {
                //videoRef.current.playAsync();

                try {
                    await videoRef.current.loadAsync({ uri: uri }, { shouldPlay: true, isLooping: true }, true);

                }
                catch (e) {
                    console.warn('load async failed', e)
                }

            },
            stop: async () => {
                //videoRef.current.stopAsync();
                
                try {
                    await videoRef.current.unloadAsync();
                }
                catch (e) {
                    console.warn('stopAsync failed', e)
                }

            }
        };
    });

    const videoRef = React.useRef();

    return (
        <CustomVideo
            ref={videoRef}
            source={{ uri: uri }}
            //source={null}
            rate={1.0}
            volume={1.0}
            isMuted={true}
            resizeMode="cover"
            shouldPlay={true}
            isLooping={true}
            style={[{ flex: 1, backgroundColor: 'transparent' }, style]}
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