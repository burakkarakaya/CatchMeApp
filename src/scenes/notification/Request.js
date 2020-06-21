import React from 'react';
import {
    View,
    FlatList
} from 'react-native';
import {
    Request as RequestItem
} from '_subview';

const usersComments = [
    {
        "id": "1511",
        "member": {
            "memberId": "100",
            "username": "@dinaesmaker",
            "firstName": "dina",
            "lastName": "esmaker",
            "profileMediaUrl": "http://www.catch-me.io/upload/app/pic/pic1.jpg"
        },
        "text": "OMG! How could this happened without me being there!!!",
        "createdAt": "2020-06-14T13:23:25.766Z"
    },
    {
        "id": "2511",
        "member": {
            "memberId": "100",
            "username": "@kristenalove",
            "firstName": "dina",
            "lastName": "esmaker",
            "profileMediaUrl": "http://www.catch-me.io/upload/app/pic/pic1.jpg"
        },
        "text": "Cooom on Nathan it was so obvious when Kristy moved that ball behind the couch :’D if I was there probably I will ruin the Deul guys",
        "createdAt": "2020-06-14T13:23:25.766Z"
    },
    {
        "id": "3511",
        "member": {
            "memberId": "100",
            "username": "@dinaesmaker",
            "firstName": "dina",
            "lastName": "esmaker",
            "profileMediaUrl": "http://www.catch-me.io/upload/app/pic/pic1.jpg"
        },
        "text": "OMG! How could this happened without me being there!!!",
        "createdAt": "2020-06-14T13:23:25.766Z"
    },
    {
        "id": "9811",
        "member": {
            "memberId": "100",
            "username": "@dinaesmaker",
            "firstName": "dina",
            "lastName": "esmaker",
            "profileMediaUrl": "http://www.catch-me.io/upload/app/pic/pic1.jpg"
        },
        "text": "OMG! How could this happened without me being there!!!",
        "createdAt": "2020-06-14T13:23:25.766Z"
    },
    {
        "id": "9911",
        "member": {
            "memberId": "100",
            "username": "@kristenalove",
            "firstName": "dina",
            "lastName": "esmaker",
            "profileMediaUrl": "http://www.catch-me.io/upload/app/pic/pic1.jpg"
        },
        "text": "Cooom on Nathan it was so obvious when Kristy moved that ball behind the couch :’D if I was there probably I will ruin the Deul guys",
        "createdAt": "2020-06-14T13:23:25.766Z"
    },
    {
        "id": "10111",
        "member": {
            "memberId": "100",
            "username": "@dinaesmaker",
            "firstName": "dina",
            "lastName": "esmaker",
            "profileMediaUrl": "http://www.catch-me.io/upload/app/pic/pic1.jpg"
        },
        "text": "OMG! How could this happened without me being there!!!",
        "createdAt": "2020-06-14T13:23:25.766Z"
    },
    {
        "id": "16511",
        "member": {
            "memberId": "100",
            "username": "@dinaesmaker",
            "firstName": "dina",
            "lastName": "esmaker",
            "profileMediaUrl": "http://www.catch-me.io/upload/app/pic/pic1.jpg"
        },
        "text": "OMG! How could this happened without me being there!!!",
        "createdAt": "2020-06-14T13:23:25.766Z"
    },
    {
        "id": "29511",
        "member": {
            "memberId": "100",
            "username": "@kristenalove",
            "firstName": "dina",
            "lastName": "esmaker",
            "profileMediaUrl": "http://www.catch-me.io/upload/app/pic/pic1.jpg"
        },
        "text": "Cooom on Nathan it was so obvious when Kristy moved that ball behind the couch :’D if I was there probably I will ruin the Deul guys",
        "createdAt": "2020-06-14T13:23:25.766Z"
    },
    {
        "id": "39511",
        "member": {
            "memberId": "100",
            "username": "@dinaesmaker",
            "firstName": "dina",
            "lastName": "esmaker",
            "profileMediaUrl": "http://www.catch-me.io/upload/app/pic/pic1.jpg"
        },
        "text": "OMG! How could this happened without me being there!!!",
        "createdAt": "2020-06-14T13:23:25.766Z"
    },
];


const Request = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                scrollEventThrottle={16}
                contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 20 }}
                style={{ flex: 1 }}
                data={usersComments}
                renderItem={({ item, index }) => <RequestItem wrapperStyle={{ marginBottom: 10 }} {...item} />}
                keyExtractor={item => item.id}
            />

        </View>
    );
}

Request.propTypes = {

};

Request.defaultProps = {

};

export { Request };