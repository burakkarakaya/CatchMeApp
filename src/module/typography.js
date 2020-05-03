/* 
  https://ospfolio.com/two-way-to-change-default-font-family-in-react-native/
*/

import React from 'react'
import { Text, StyleSheet } from 'react-native';
import { Fonts } from '../styles';

const typography = () => {
    const oldTextRender = Text.render
    Text.render = function (...args) {
        const origin = oldTextRender.call(this, ...args)
        return React.cloneElement(origin, {
            style: [styles.defaultText, origin.props.style],
        })
    }
}

const styles = StyleSheet.create({
    defaultText: {
        ...Fonts.regular,
        fontSize: 14
    }
});

export { typography }