import { Colors, Fonts, Mixins } from '_styles';

export const searchInput = {
    wrapper: {
        backgroundColor: Colors.alabaster,
        borderRadius: 10,
        overflow: 'hidden',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
    },

    input: {
        color: Colors.black,
        height: 36,
        ...Mixins.padding(0, 8, 0, 8)
    },

    placeholderTextColor: Colors.silver,

    buttonIco: {
        width: 14,
        height: 14,
        resizeMode: 'contain',
    }
};


export const commentInput = {
    wrapper: {
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: Colors.alabaster,
        borderTopWidth: 1,
    },

    input: {
        color: Colors.black,
        height: 36,
        flex: 1,
    },

    placeholderTextColor: Colors.black,

    buttonIco: {
        width: 14,
        height: 14,
        resizeMode: 'contain',
    },

    profilePic: {
        borderRadius: 3,
        overflow: 'hidden',
        width: 40,
        height: 40,
        resizeMode: 'contain',
        overflow: 'hidden',
        marginRight: 15,
    }
};