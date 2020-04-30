import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

function Container({ children }, ref) {
    const _self = this;

    /* 
        bu metod ile üst katmandan alt katman fonk. erişebiliriz.
    */
    React.useImperativeHandle(ref, () => {
        return {
            printFirstName: () => {
                return value;
            },
            printLastName: () => {
                console.warn("Printing Last Name");
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
    children: PropTypes.element
};

export { Container };