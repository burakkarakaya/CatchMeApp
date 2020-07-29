import React, { useImperativeHandle } from 'react';
import {
    View,
    Text,
    FlatList,
} from 'react-native';
import { SearchInput, CommentInput } from '_UI';
import * as styles from './styles';
import PropTypes from 'prop-types';
import { Item } from './Item';

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
            "firstName": "dina",
            "lastName": "esmaker",
            "profileMediaUrl": "http://www.catch-me.io/content/users/dueling/pic/pic1.jpg"
        },
        "text": "OMG! How could this happened without me being there!!!",
        "createdAt": "2020-06-14T13:23:25.766Z"
    },
    {
        "id": "25",
        "member": {
            "memberId": "100",
            "username": "@kristenalove",
            "firstName": "dina",
            "lastName": "esmaker",
            "profileMediaUrl": "http://www.catch-me.io/content/users/dueling/pic/pic1.jpg"
        },
        "text": "Cooom on Nathan it was so obvious when Kristy moved that ball behind the couch :’D if I was there probably I will ruin the Deul guys",
        "createdAt": "2020-06-14T13:23:25.766Z"
    },
    {
        "id": "35",
        "member": {
            "memberId": "100",
            "username": "@dinaesmaker",
            "firstName": "dina",
            "lastName": "esmaker",
            "profileMediaUrl": "http://www.catch-me.io/content/users/dueling/pic/pic1.jpg"
        },
        "text": "OMG! How could this happened without me being there!!!",
        "createdAt": "2020-06-14T13:23:25.766Z"
    },
    {
        "id": "98",
        "member": {
            "memberId": "100",
            "username": "@dinaesmaker",
            "firstName": "dina",
            "lastName": "esmaker",
            "profileMediaUrl": "http://www.catch-me.io/content/users/dueling/pic/pic1.jpg"
        },
        "text": "OMG! How could this happened without me being there!!!",
        "createdAt": "2020-06-14T13:23:25.766Z"
    },
    {
        "id": "99",
        "member": {
            "memberId": "100",
            "username": "@kristenalove",
            "firstName": "dina",
            "lastName": "esmaker",
            "profileMediaUrl": "http://www.catch-me.io/content/users/dueling/pic/pic1.jpg"
        },
        "text": "Cooom on Nathan it was so obvious when Kristy moved that ball behind the couch :’D if I was there probably I will ruin the Deul guys",
        "createdAt": "2020-06-14T13:23:25.766Z"
    },
    {
        "id": "101",
        "member": {
            "memberId": "100",
            "username": "@dinaesmaker",
            "firstName": "dina",
            "lastName": "esmaker",
            "profileMediaUrl": "http://www.catch-me.io/content/users/dueling/pic/pic1.jpg"
        },
        "text": "OMG! How could this happened without me being there!!!",
        "createdAt": "2020-06-14T13:23:25.766Z"
    },
    {
        "id": "165",
        "member": {
            "memberId": "100",
            "username": "@dinaesmaker",
            "firstName": "dina",
            "lastName": "esmaker",
            "profileMediaUrl": "http://www.catch-me.io/content/users/dueling/pic/pic1.jpg"
        },
        "text": "OMG! How could this happened without me being there!!!",
        "createdAt": "2020-06-14T13:23:25.766Z"
    },
    {
        "id": "295",
        "member": {
            "memberId": "100",
            "username": "@kristenalove",
            "firstName": "dina",
            "lastName": "esmaker",
            "profileMediaUrl": "http://www.catch-me.io/content/users/dueling/pic/pic1.jpg"
        },
        "text": "Cooom on Nathan it was so obvious when Kristy moved that ball behind the couch :’D if I was there probably I will ruin the Deul guys",
        "createdAt": "2020-06-14T13:23:25.766Z"
    },
    {
        "id": "395",
        "member": {
            "memberId": "100",
            "username": "@dinaesmaker",
            "firstName": "dina",
            "lastName": "esmaker",
            "profileMediaUrl": "http://www.catch-me.io/content/users/dueling/pic/pic1.jpg"
        },
        "text": "OMG! How could this happened without me being there!!!",
        "createdAt": "2020-06-14T13:23:25.766Z"
    },
];


function DirectMessage({ views, likes, liked, comments, onScroll }, ref) {

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
        <View style={styles.directMessage.wrapper}>
            {
                /* 
                    header
                    bu bolumde genel like, comment sayıları ve direct message
                */
            }
            <View style={styles.directMessage.header}>

                <SearchInput wrapperStyle={styles.directMessage.searchInput} />

                <Text style={styles.directMessage.title}>{'My Friends'}</Text>
            </View>

            {
                /* 
                    bu bolumde kullanıcı yorumları gozukecek
                */
            }
            <View style={styles.directMessage.body}>
                <FlatList
                    ref={flatListRef}
                    scrollEventThrottle={16}
                    onScroll={_onScroll}
                    contentContainerStyle={{ paddingHorizontal: 20 }}
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
            <View style={styles.directMessage.footer}>

                <CommentInput />

            </View>

        </View>
    );
};

DirectMessage = React.forwardRef(DirectMessage);

DirectMessage.defaultProps = {
    views: '1,542,653',
    likes: '903',
    liked: false,
    comments: '30',
};

DirectMessage.propTypes = {
    views: PropTypes.string,
    likes: PropTypes.string,
    liked: PropTypes.bool,
    comments: PropTypes.string,
};

export { DirectMessage };