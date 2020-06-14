import React, { useImperativeHandle } from 'react';
import {
    View,
    Text,
    FlatList,
} from 'react-native';
import { Button } from '_UI';
import * as styles from './styles';
import PropTypes from 'prop-types';
import { Item } from './Item';



const userComment = {
    "id": "15",
    "member": {
        "memberId": "100",
        "username": "@dinaesmaker",
        "profileMediaUrl": "http://www.catch-me.io/upload/app/pic/pic1.jpg"
    },
    "text": "OMG! How could this happened without me being there!!!",
    "createdAt": "2020-06-14T13:23:25.766Z"
}; // Kullanıcının kendi yazmış olduğu hastagler eğer kullanıcı bişey yazmamışsa bu kısım gosterilmeye bilir.

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

const usersComments = [
    {
        "id": "15",
        "member": {
            "memberId": "100",
            "username": "@dinaesmaker",
            "profileMediaUrl": "http://www.catch-me.io/upload/app/pic/pic1.jpg"
        },
        "text": "OMG! How could this happened without me being there!!!",
        "createdAt": "2020-06-14T13:23:25.766Z"
    },
    {
        "id": "25",
        "member": {
            "memberId": "100",
            "username": "@kristenalove",
            "profileMediaUrl": "http://www.catch-me.io/upload/app/pic/pic1.jpg"
        },
        "text": "Cooom on Nathan it was so obvious when Kristy moved that ball behind the couch :’D if I was there probably I will ruin the Deul guys",
        "createdAt": "2020-06-14T13:23:25.766Z"
    },
    {
        "id": "35",
        "member": {
            "memberId": "100",
            "username": "@dinaesmaker",
            "profileMediaUrl": "http://www.catch-me.io/upload/app/pic/pic1.jpg"
        },
        "text": "OMG! How could this happened without me being there!!!",
        "createdAt": "2020-06-14T13:23:25.766Z"
    },
    {
        "id": "98",
        "member": {
            "memberId": "100",
            "username": "@dinaesmaker",
            "profileMediaUrl": "http://www.catch-me.io/upload/app/pic/pic1.jpg"
        },
        "text": "OMG! How could this happened without me being there!!!",
        "createdAt": "2020-06-14T13:23:25.766Z"
    },
    {
        "id": "99",
        "member": {
            "memberId": "100",
            "username": "@kristenalove",
            "profileMediaUrl": "http://www.catch-me.io/upload/app/pic/pic1.jpg"
        },
        "text": "Cooom on Nathan it was so obvious when Kristy moved that ball behind the couch :’D if I was there probably I will ruin the Deul guys",
        "createdAt": "2020-06-14T13:23:25.766Z"
    },
    {
        "id": "101",
        "member": {
            "memberId": "100",
            "username": "@dinaesmaker",
            "profileMediaUrl": "http://www.catch-me.io/upload/app/pic/pic1.jpg"
        },
        "text": "OMG! How could this happened without me being there!!!",
        "createdAt": "2020-06-14T13:23:25.766Z"
    },
    {
        "id": "165",
        "member": {
            "memberId": "100",
            "username": "@dinaesmaker",
            "profileMediaUrl": "http://www.catch-me.io/upload/app/pic/pic1.jpg"
        },
        "text": "OMG! How could this happened without me being there!!!",
        "createdAt": "2020-06-14T13:23:25.766Z"
    },
    {
        "id": "295",
        "member": {
            "memberId": "100",
            "username": "@kristenalove",
            "profileMediaUrl": "http://www.catch-me.io/upload/app/pic/pic1.jpg"
        },
        "text": "Cooom on Nathan it was so obvious when Kristy moved that ball behind the couch :’D if I was there probably I will ruin the Deul guys",
        "createdAt": "2020-06-14T13:23:25.766Z"
    },
    {
        "id": "395",
        "member": {
            "memberId": "100",
            "username": "@dinaesmaker",
            "profileMediaUrl": "http://www.catch-me.io/upload/app/pic/pic1.jpg"
        },
        "text": "OMG! How could this happened without me being there!!!",
        "createdAt": "2020-06-14T13:23:25.766Z"
    },
];


function Comment({ views, likes, liked, comments, onScroll }, ref) {

    useImperativeHandle(ref, () => {
        return {
            set: (p) => {
                flatListRef.current.scrollToOffset({ animated: false, offset: p.y });
            }
        };
    });

    const flatListRef = React.useRef();

    const icons = liked ? 'likedDark' : 'likedDark';

    const _onPress = ({ type }) => {

    };

    const _onScroll = (event) => {
        if (onScroll)
            onScroll(event)
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

                <Item wrapperStyle={{ marginTop: 20 }} {...userComment} />

            </View>

            {
                /* 
                    bu bolumde kullanıcı yorumları gozukecek
                */
            }
            <View style={styles.comment.body}>
                <FlatList
                    ref={flatListRef}
                    scrollEventThrottle={16}
                    onScroll={_onScroll}
                    style={{ flex: 1 }}
                    data={usersComments}
                    renderItem={({ item }) => <Item wrapperStyle={{ marginTop: 15 }} {...item} />}
                    keyExtractor={item => item.id}
                />
            </View>

            {
                /* 
                    bu bolumde yorum yapma inputu gozukecek
                */
            }
            <View style={styles.comment.footer}>

            </View>

        </View>
    );
};

Comment = React.forwardRef(Comment);

Comment.defaultProps = {
    views: '1,542,653',
    likes: '903',
    liked: false,
    comments: '30',
};

Comment.propTypes = {
    views: PropTypes.string,
    likes: PropTypes.string,
    liked: PropTypes.bool,
    comments: PropTypes.string,
};

export { Comment };