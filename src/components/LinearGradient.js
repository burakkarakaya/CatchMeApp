import React from 'react';
import { LinearGradient as LnrGradient } from 'expo-linear-gradient';
import PropTypes from 'prop-types';

const LinearGradient = React.memo(({ colors, start, end, style, children }) => {

    return (
        <LnrGradient
            colors={colors}
            style={style}
            start={start}
            end={end}
        >
            {children}
        </LnrGradient>
    );
});

LinearGradient.defaultProps = {
    children: null,
    style: {},
    colors: [],
    start: {},
    end: {}
};

LinearGradient.propTypes = {
    children: PropTypes.element,
    style: PropTypes.object,
    colors: PropTypes.array,
    start: PropTypes.object,
    end: PropTypes.object,
};

export { LinearGradient };