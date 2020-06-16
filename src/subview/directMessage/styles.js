import { Colors, Fonts, Mixins } from '_styles';

export const item = {
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    leftColumn: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    pic: {
        width: 40,
        height: 40,
        borderRadius: 3,
        overflow: 'hidden',
        marginRight: 10,
    },
    icon: {
        width: 19,
        height: 19,
        resizeMode: 'contain'
    },
    name: {
        flex: 1,
        fontSize: 16,
        color: Colors.black
    },
    username: {
        flex: 1,
        fontSize: 14,
        color: Colors.boulder
    }
};

export const directMessage = {
    wrapper: {
    },

    header: {
        paddingHorizontal: 20,
    },

    searchInput: {
        marginBottom: 28
    },

    title:{
        color: Colors.boulder,
        fontSize: 14,
    },

    body: {
        minHeight: 300
    },

    footer: {
        minHeight: 80
    }
};