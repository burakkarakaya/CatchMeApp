import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import * as styles from './styles';
import { images } from '_assets';
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
    icoButton
    blueButton

    <Button data={{ type: 'signin' }} type={'solidLarge'} onPress={_onPress}  style={{ wrapper: { marginTop: 10, marginBottom: 20, alignSelf: 'flex-end' }}}>{title}</Button>
*/


const Button = React.memo(({ children, onPress, onLayout, data, type, style, icoStyle, leftIco, rightIco }) => {

    const _onPress = () => {
        if (onPress)
            onPress(data);
    }

    const _onLayout = (e) => {
        if (onLayout)
            onLayout({ layout: e.nativeEvent.layout });
    }

    const _styles = styles[type] || {};
    const _leftIco = leftIco && <Image style={[styles.buttonIco, icoStyle]} source={images[leftIco]} />;
    const _rightIco = rightIco && <Image style={[styles.buttonIco, icoStyle]} source={images[rightIco]} />;
    const _text = children && <Text style={[_styles.text, style.text]}>{children}</Text>;


    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={_onPress}
            onLayout={_onLayout}
            style={[_styles.wrapper, style.wrapper]}
        >
            <View style={[{ flexDirection: 'row', alignItems: 'center' }, _styles.textWrapper, style.textWrapper]}>
                {_leftIco}
                {_text}
                {_rightIco}
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
    style: {},
    icoStyle: {},
    leftIco: null,
    rightIco: null
};

Button.propTypes = {
    children: PropTypes.string,
    onPress: PropTypes.func,
    onLayout: PropTypes.func,
    data: PropTypes.object,
    type: PropTypes.string,
    style: PropTypes.object,
    icoStyle: PropTypes.object,
    leftIco: PropTypes.string,
    rightIco: PropTypes.string
};

export { Button };