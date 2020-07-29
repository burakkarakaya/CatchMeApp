import React from 'react';
import {
    View,
    FlatList
} from 'react-native';
import {
    Duelling,
    Followers,
    Following,
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
];


const Search = ({ navigation }) => {

    return (
        <View style={{ flex: 1, paddingTop: 65 }}>
            <SearchInput wrapperStyle={{ marginHorizontal: 20, marginBottom: 20 }} />
            <FlatList
                scrollEventThrottle={16}
                contentContainerStyle={{ paddingHorizontal: 20 }}
                style={{ flex: 1 }}
                data={usersComments}
                renderItem={({ item, index }) => index % 2 ? <Duelling wrapperStyle={{ marginBottom: 10 }} {...item} /> : <Followers wrapperStyle={{ marginBottom: 10 }} {...item} />}
                keyExtractor={item => item.id}
            />

        </View>
    );
}

Search.propTypes = {

};

Search.defaultProps = {

};

export { Search };