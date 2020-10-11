import React, { useState, useEffect, useImperativeHandle } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';

let Counter = ({ style, duration, onEnd }, ref) => {

    useImperativeHandle(ref, () => {
        return {
            get: () => {
                return isTimeEnd;
            },
            reset: () => {
                if (stm != null)
                    clearInterval(stm);

                setTimeEnd(false);

                startTimer(duration);
            },
        };
    });

    const [isTimeEnd, setTimeEnd] = useState(false);

    const [value, setValue] = useState('');

    let stm = null;

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

                setTimeEnd(true);

                if (onEnd)
                    onEnd();
            }
        }, 1000);
    };

    useEffect(() => {

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

Counter = React.forwardRef(Counter);

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