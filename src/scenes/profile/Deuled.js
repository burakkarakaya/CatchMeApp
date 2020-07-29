import React from 'react';
import {
    View,
    FlatList
} from 'react-native';
import {
    Duelling as DuellingItem,
    Thumbnail as ThumbnailItem
} from '_subview';

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
        "thumbnailMediaUrl": "http://www.catch-me.io/content/users/dueling/pic/pic2.jpg",
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
        "thumbnailMediaUrl": "http://www.catch-me.io/content/users/dueling/pic/pic3.jpg",
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
        "thumbnailMediaUrl": "http://www.catch-me.io/content/users/dueling/pic/pic4.jpg",
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
            "profileMediaUrl": "http://www.catch-me.io/content/users/dueling/pic/pic2.jpg"
        },
        "thumbnailMediaUrl": "http://www.catch-me.io/content/users/dueling/pic/pic1.jpg",
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
        "thumbnailMediaUrl": "http://www.catch-me.io/content/users/dueling/pic/pic2.jpg",
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
        "thumbnailMediaUrl": "http://www.catch-me.io/content/users/dueling/pic/pic2.jpg",
        "text": "OMG! How could this happened without me being there!!!",
        "createdAt": "2020-06-14T13:23:25.766Z"
    },

];


const Deuled = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                numColumns={2}
                scrollEventThrottle={16}
                //contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 20, flex: 1 }}
                style={{ flex: 1 }}
                data={usersComments}
                renderItem={({ item, index }) => <ThumbnailItem wrapperStyle={{ marginBottom: 10 }} {...item} />}
                keyExtractor={item => item.id}
                listKey={(item, index) => item.id}
            />

        </View>
    );
}

Deuled.propTypes = {

};

Deuled.defaultProps = {

};

export { Deuled };