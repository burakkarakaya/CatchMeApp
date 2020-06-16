import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import * as styles from './styles';
import { images } from '_assets';
import PropTypes from 'prop-types';

function Item({ member, text, wrapperStyle, onPress }) {

    const [checked, setChecked] = useState(false);

    const _icon = checked ? images['successBlue'] : images['ellipse'];

    const _onPress = () => {

        setChecked(!checked);

        if (onPress)
            onPress();
    };

    const { username, firstName, lastName, profileMediaUrl } = member;

    return (
        <TouchableOpacity onPress={_onPress} activeOpacity={.8}>
            <View style={[styles.item.wrapper, wrapperStyle]}>
                <View style={[styles.item.leftColumn]} >
                    <Image
                        source={{ uri: profileMediaUrl }}
                        style={styles.item.pic}
                    />
                    <View>
                        <Text numberOfLines={1} style={[styles.item.name]}>{`${firstName} ${lastName}`}</Text>
                        <Text numberOfLines={1} style={[styles.item.username]}>{`${username}`}</Text>
                    </View>
                </View>
                <Image
                    source={_icon}
                    style={styles.item.icon}
                />
            </View>
        </TouchableOpacity>
    );
};

Item.defaultProps = {
    member: {},
    text: '',
    wrapperStyle: {}
};

Item.propTypes = {
    member: PropTypes.object,
    text: PropTypes.string,
    wrapperStyle: PropTypes.object,
};

export { Item };