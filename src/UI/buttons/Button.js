import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import * as styles from './styles';
import PropTypes from 'prop-types';

/*
    Button Tipleri

    solid
    solidLarge
    solidGray
    solidGrayLarge
    solidBlack
    solidBlackLarge
    underline
    underlineBlue
    rounded
    outline
    outlineBlack

    <Button data={{ type: 'signin' }} type={'solidLarge'} onPress={_onPress}  style={{ wrapper: { marginTop: 10, marginBottom: 20, alignSelf: 'flex-end' }}}>{title}</Button>
*/


const Button = React.memo(({ children, onPress, onLayout, data, type, style }) => {

    const _onPress = () => {
        if (onPress)
            onPress(data);
    }

    const _onLayout = (e) => {
        if (onLayout)
            onLayout({ layout: e.nativeEvent.layout });
    }

    const _styles = styles[type] || {};

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={_onPress}
            onLayout={_onLayout}
            style={[_styles.wrapper, style.wrapper]}
        >
            <View style={[_styles.textWrapper, style.textWrapper]}>
                <Text style={[_styles.text, style.text]}>{children}</Text>
            </View>
        </TouchableOpacity>
    );
});

Button.defaultProps = {
    children: null,
    onPress: null,
    onLayout: null,
    data: {},
    type: 'solid',
    style: {}
};

Button.propTypes = {
    children: PropTypes.string,
    onPress: PropTypes.func,
    onLayout: PropTypes.func,
    data: PropTypes.object,
    type: PropTypes.string,
    style: PropTypes.object,
};

export { Button };