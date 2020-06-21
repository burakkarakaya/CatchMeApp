import { Colors, Fonts, Mixins } from '_styles';

export const item = {
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    leftColumn: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
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


export const message = {
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
    },
    leftColumn: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    pic: {
        width: 40,
        height: 40,
        borderRadius: 3,
        overflow: 'hidden',
        marginRight: 10,
    },
    text: {
        flex: 1,
        width: '85%'
    },
    time: {
        color: Colors.boulder,
        fontSize: 12
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

export const forYou = {
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
    },
    pic: {
        width: 40,
        height: 40,
        borderRadius: 3,
        overflow: 'hidden',
        marginRight: 10,
    },
    caption: {
        flex: 1,
        width: '85%'
    }
};

/* 
    thumbnail
*/

export const thumbnail = {

}