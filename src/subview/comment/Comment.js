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
import { CommentItem } from '_subview/noResult/CommentItem';
import * as styles from './styles';
import PropTypes from 'prop-types';
import { Item } from './Item';
import { CommentConfig, } from '_config/services/CommentConfig';
import { createComment } from '_store/actions';
import { connect } from 'react-redux';

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

function Main({ id, caption, duellingFrom, views, likes, liked, comments, onScroll, _member, createComment: _createComment }, ref) {

    useImperativeHandle(ref, () => {
        return {
            set: (offset) => {
                if (flatListRef.current)
                    flatListRef.current.scrollToOffset(offset);
            }
        };
    });

    const _config = { ...CommentConfig };
    _config.api.param.contentId = id;
    //_config.api.param.contentId = 5;

    const flatListRef = React.useRef();

    const commentInputRef = React.useRef();

    const icons = liked ? 'likedDark' : 'likedDark';

    const _onPress = ({ type }) => {

    };

    const userComment = caption != '' ? <Item wrapperStyle={{ marginTop: 20 }} {...{ comment: caption, member: { ...duellingFrom } }} /> : null;

    const _onSend = async (text) => {

        // { "comment": "	OMG! How could this happened without me being there!!! - Comment 14	", "createdAt": "0001-01-01T00:00:00Z", "id": 0, "member": { "id": 53, "profileMediaUrl": null, "username": "yasone" } }

        try {
            await _createComment({ "contentId": id, "comment": text });
            commentInputRef.current.reset();
        } catch (error) {
            console.warn(error)
        }


    }

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
                    NoResultComponent={<CommentItem style={{ height: 260 }} />}
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
                <CommentInput ref={commentInputRef} onSend={_onSend} {..._member} />
            </View>

        </View>


    );
};

Main = React.forwardRef(Main);

Main.defaultProps = {
    views: '0',
    likes: '0',
    liked: false,
    comments: '0',
};

Main.propTypes = {
    views: PropTypes.string,
    likes: PropTypes.number,
    liked: PropTypes.bool,
    comments: PropTypes.number,
};

const mapStateToProps = ({ general }) => {
    const { member: _member } = general;
    return {
        _member
    };
};

const Comment = connect(mapStateToProps, { createComment }, null, { forwardRef: true })(Main);

export { Comment };