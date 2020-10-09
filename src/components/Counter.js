import React, { useState, useEffect, } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';

const Counter = ({ style, duration, onEnd }) => {
    const [value, setValue] = useState('');

    let stm;

    useEffect(() => {

        stm = null;

        const startTimer = (_duration) => {

            var timer = _duration, minutes, seconds;
            stm = setInterval(function () {
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                setValue(minutes + ":" + seconds);

                if (--timer < 0) {
                    clearInterval(stm);
                    timer = _duration;

                    if (onEnd)
                        onEnd();
                }
            }, 1000);
        };

        startTimer(duration);


        return () => {
            clearInterval(stm);
        }

    }, []);


    return (
        <View style={style}>
            <Text style={styles.text}>{value}</Text>
        </View>
    );
};

Counter.propTypes = {
    style: PropTypes.object,
    duration: PropTypes.number,
    onEnd: PropTypes.func,
};

Counter.defaultProps = {
    style: {},
    duration: 10,
    onEnd: null
};

export { Counter };

const styles = StyleSheet.create({
    text: {
        color: '#484848',
        fontSize: 16
    }
});