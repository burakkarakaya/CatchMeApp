import React, { useImperativeHandle } from 'react';
import {
    View,
    Text,
} from 'react-native';
import {
    CustomList,
} from '_components/CustomList';
import { Button, CommentInput } from '_UI';
import { EmptyItem } from '_subview/emptyItem/EmptyItem';
import * as styles from './styles';
import PropTypes from 'prop-types';
import { Item } from './Item';
import { CommentConfig, } from '_config/services/CommentConfig';

/* 

    {
  "data": {
        "comments": [
        {
            "id": "Unknown Type: ınteger",
            "member": {
            "memberId": "Unknown Type: ınteger",
            "username": "string",
            "profileMediaUrl": "string"
            },
            "text": "string",
            "createdAt": "2020-06-14T13:23:25.766Z"
        }
        ],
        "hasNextPage": true,
        "nextPage": "Unknown Type: ınteger"
    },
    "success": true,
    "message": "string",
    "errorCode": "Unknown Type: ınteger"
    }

*/

function Comment({ id, caption, duellingFrom, views, likes, liked, comments, onScroll }, ref) {

    useImperativeHandle(ref, () => {
        return {
            set: (offset) => {
                if (flatListRef.current)
                    flatListRef.current.scrollToOffset(offset);
            }
        };
    });

    const _config = { ...CommentConfig };
    //_config.api.param.contentId = id;
    _config.api.param.contentId = 5;


    const flatListRef = React.useRef();

    const icons = liked ? 'likedDark' : 'likedDark';

    const _onPress = ({ type }) => {

    };

    const userComment = caption != '' ? <Item wrapperStyle={{ marginTop: 20 }} {...{ comment: caption, member: { ...duellingFrom } }} /> : null;

    return (
        <View style={styles.comment.wrapper}>
            {
                /* 
                    header
                    bu bolumde genel like, comment sayıları ve direct message
                */
            }
            <View style={styles.comment.header}>

                <View style={styles.comment.headerTop}>

                    <Text style={styles.comment.views}>{views}</Text>

                    <View style={styles.comment.headerTopInner}>

                        <View style={{ flexDirection: 'row' }}>

                            <Button type={'icoButton'} leftIco={icons} data={{ type: 'like' }} icoStyle={styles.comment.buttonIco} style={{ text: { color: '#000000' }, wrapper: { marginRight: 18 } }}>{likes}</Button>

                            <Button type={'icoButton'} leftIco={'commentDark'} data={{ type: 'comment' }} icoStyle={styles.comment.buttonIco} style={{ text: { color: '#000000' } }}>{comments}</Button>

                        </View>

                        <Button onPress={_onPress} type={'icoButton'} leftIco={'shareDark'} data={{ type: 'share' }}></Button>

                    </View>

                </View>

                {userComment}

            </View>

            {
                /* 
                    bu bolumde kullanıcı yorumları gozukecek
                */
            }
            <View style={styles.comment.body}>
                <CustomList
                    ref={flatListRef}
                    config={_config}
                    ListEmptyComponent={<EmptyItem />}
                    ItemSeparatorComponent={() => <View style={{ height: 14 }} />}
                    contentContainerStyle={{ padding: 15 }}
                    style={{ flex: 1 }}
                    onScroll={onScroll}
                    props={{
                        scrollEventThrottle: 16,
                    }}
                />
            </View>

            {
                /* 
                    bu bolumde yorum yapma inputu gozukecek
                */
            }
            <View style={styles.comment.footer}>
                <CommentInput />
            </View>

        </View>
    );
};

Comment = React.forwardRef(Comment);

Comment.defaultProps = {
    views: '0',
    likes: '0',
    liked: false,
    comments: '0',
};

Comment.propTypes = {
    views: PropTypes.string,
    likes: PropTypes.number,
    liked: PropTypes.bool,
    comments: PropTypes.number,
};

export { Comment };