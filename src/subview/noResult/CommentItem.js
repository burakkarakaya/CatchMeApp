import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { Translation } from '_context';
import PropTypes from 'prop-types';

function CommentItem({ style }) {
    const t = Translation('noResult');

    return (
        <View style={[styles.container, style]}>
            <>
                <Text>{t('comment.text1')}</Text>
                <Text>{t('comment.text2')}</Text>
            </>
        </View>
    );
};

CommentItem.defaultProps = {

};

CommentItem.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string,
    style: PropTypes.object,
};

CommentItem = React.memo(CommentItem);

export { CommentItem };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});