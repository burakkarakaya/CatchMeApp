import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { Translation } from '_context';
import PropTypes from 'prop-types';

function NoResultItem({ style }) {
    const t = Translation('noResult');

    return (
        <View style={[styles.container, style]}>
            <>
                <Text>{t('general')}</Text>
            </>
        </View>
    );
};

NoResultItem.defaultProps = {

};

NoResultItem.propTypes = {

};

NoResultItem = React.memo(NoResultItem);

export { NoResultItem };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});