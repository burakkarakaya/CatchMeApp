import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import * as styles from './styles';
import { User } from './User';
import { Translation } from '_context';
import { Button } from '_UI';
import PropTypes from 'prop-types';

const Header = ({ onPress, duellingFrom, duellingTo }) => {
    
    const t = Translation('feedItem');

    const _onPress = (obj = {}) => {
        if (onPress)
            onPress(obj);
    };

    const _vs = (
        <View style={styles.header.vsWrapper}>
            <Text numberOfLines={1} style={styles.header.vsText}>VS</Text>
        </View>
    );

    return (
        <View style={styles.header.wrapper}>

            <View style={styles.header.container}>
                <TouchableOpacity onPress={() => _onPress({ type: 'startedDuel' })} activeOpacity={0.8} style={{ flex: 1 }}>
                    <User
                        {...duellingFrom}
                        caption={t('startedDuel')}
                        direction={'right'}

                        badge={'http://www.catch-me.io/upload/app/pic/king-crown.png'}
                        profileMediaUrl={'http://www.catch-me.io/upload/app/pic/pic1.jpg'}
                        username={'@kristenhanby'}
                    />
                </TouchableOpacity>
                {_vs}
                <TouchableOpacity onPress={() => _onPress({ type: 'gotDuel' })} activeOpacity={0.8} style={{ flex: 1 }}>
                    <User
                        {...duellingTo}
                        caption={t('gotDuel')}
                        profileMediaUrl={'http://www.catch-me.io/upload/app/pic/pic2.jpg'}
                        username={'@nathanby'}
                    />
                </TouchableOpacity>
            </View>

            <Button onPress={_onPress} type={'icoButton'} leftIco={'threedots'} data={{ type: 'info' }}></Button>

        </View>
    );
};

Header.defaultProps = {
    duellingFrom: {},
    duellingTo: {},
};

Header.propTypes = {
    duellingFrom: PropTypes.object,
    duellingTo: PropTypes.object,
    onPress: PropTypes.func,
};

export { Header };