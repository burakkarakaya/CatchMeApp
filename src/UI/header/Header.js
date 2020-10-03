import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import { Button } from '_UI/buttons/Button';
import { Layout } from '_constants';
import { Translation } from '_context';
import * as styles from './styles';
import PropTypes from 'prop-types';

const Header = ({ title, style, navigation, leftButton, rightButton, mode, onPress }) => {

    const t = Translation('header');

    const insets = { paddingBottom: 12, paddingTop: Layout.insets().top || 0 };

    const _onPress = ({ type }) => {
        if (onPress)
            onPress({ type });

        if (navigation)
            navigation.goBack();
    };

    const _getHeader = () => {
        switch (mode) {
            case 'mode-1':
                return (
                    <View style={[insets, style]}>
                        <Button style={styles.header.button} data={{ type: 'back' }} type={'icoButton'} onPress={_onPress} leftIco={'back'}>{t('back')}</Button>
                    </View>
                );

            case 'mode-2':
                const _leftButton = leftButton || <Button style={styles.header.button} data={{ type: 'back' }} type={'icoButton'} onPress={_onPress} leftIco={'backArrow'}></Button>;
                return (
                    <View style={[insets, styles.header.wrapper, style]}>
                        {_leftButton}
                        <Text style={styles.header.title}>{title}</Text>
                        <View style={styles.header.rightColumn}>{rightButton}</View>
                    </View>
                );

            case 'mode-3':
                return (
                    <View style={[insets, { paddingBottom: 0 }, style]}>
                    </View>
                );

            default:
                break;
        }
    }



    return _getHeader();
};

Header.propTypes = {
    style: PropTypes.object,
    onPress: PropTypes.func,
    mode: PropTypes.string,
    title: PropTypes.string,
    leftButton: PropTypes.element,
    rightButton: PropTypes.element,
    navigation: PropTypes.object,
};

Header.defaultProps = {
    style: {},
    onPress: null,
    mode: 'mode-1',
    title: 'Burak',
    leftButton: null,
    rightButton: null,
    navigation: null
};

export { Header };