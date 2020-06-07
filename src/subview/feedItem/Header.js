import React from 'react';
import {
    View, Text,
} from 'react-native';
import * as styles from './styles';
import { User } from './User';
import { Translation } from '_context';
import { Button } from '_UI';
import PropTypes from 'prop-types';

const Header = ({ duellingFrom, duellingTo }) => {
    const t = Translation('feedItem');

    const _vs = (
        <View style={styles.header.vsWrapper}>
            <Text numberOfLines={1}  style={styles.header.vsText}>VS</Text>
        </View>
    );

    return (
        <View style={styles.header.wrapper}>

            <View style={styles.header.container}>
                <User
                    {...duellingFrom}
                    caption={t('startedDuel')}
                    direction={'right'}

                    badge={'http://www.catch-me.io/upload/app/pic/king-crown.png'}
                    profileMediaUrl={'http://www.catch-me.io/upload/app/pic/pic1.jpg'}
                    username={'@kristenhanby'}
                />
                {_vs}
                <User
                    {...duellingTo}
                    caption={t('gotDuel')}
                    profileMediaUrl={'http://www.catch-me.io/upload/app/pic/pic2.jpg'}
                    username={'@nathanby'}
                />
            </View>

            <Button type={'icoButton'} leftIco={'threedots'} data={{ type: 'threedots' }}></Button>

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
};

export { Header };