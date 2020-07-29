import React from 'react';
import {
    View,
    FlatList
} from 'react-native';
import {
    Duelling,
    Followers,
    Following,

    ForYou as ForYouItem
} from '_subview';
import {
    SearchInput,
} from '_UI';

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

    




    {
        "id": "1588",
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
        "id": "2588",
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
        "id": "3588",
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
        "id": "9888",
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
        "id": "9988",
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
        "id": "10188",
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
        "id": "16588",
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
        "id": "29588",
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
        "id": "395888",
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


const ForYou = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                scrollEventThrottle={16}
                contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 20 }}
                style={{ flex: 1 }}
                data={usersComments}
                renderItem={({ item, index }) => <ForYouItem wrapperStyle={{ marginBottom: 10 }} {...item} />}
                keyExtractor={item => item.id}
                listKey={(item, index) => item.id}
            />

        </View>
    );
}

ForYou.propTypes = {

};

ForYou.defaultProps = {

};

export { ForYou };