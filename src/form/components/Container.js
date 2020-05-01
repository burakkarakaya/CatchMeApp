import React, {useImperativeHandle} from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

function Container({ children }, ref) {

    useImperativeHandle(ref, () => {
        return {
            get: () => {
                return value;
            }
        };
    });


    return (
        <View>
            {children}
        </View>
    );
};


Container = React.forwardRef(Container);

Container.defaultProps = {
    children: null
};

Container.propTypes = {
    children: PropTypes.element,
};

export { Container };