import { Colors, Fonts, Mixins } from '_styles';
import { PosterWidth, PosterHeight, HeaderHeight } from './constants';

export const drawer = {
    header: {
        padding: 15,
        flexDirection: 'row',
        backgroundColor: Colors.alabaster,
        alignItems: 'center'
    },
    thumb: {
        width: 50,
        height: 50,
        borderRadius: 10,
        overflow: 'hidden',
        marginRight: 10
    },
    userName: {
        ...Fonts.bold,
        fontSize: 16
    },
    body: {
        paddingHorizontal: 15,
        paddingVertical: 20
    },
    buttonWrapper: {
        marginBottom: 20
    },
    buttonText: {
        fontSize: 16,
        color: Colors.black
    },
};

export const stickyHeader = {

    wrapper: {
        top: 0,
        height: HeaderHeight,
        width: '100%',
        position: 'absolute',
    }

};

export const header = {

    wrapper: {
        paddingLeft: 20,
        paddingRight: 10,
        backgroundColor: '#FF0000',
    },

    //
    menuWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingBottom: 30,
    },

    //
    topWrapper: {
        //marginTop: -35,
        flexDirection: 'row',
        marginBottom: 12,
    },
    thumb: {
        width: 70,
        height: 70,
        borderRadius: 10,
        overflow: 'hidden',
        marginRight: 10
    },
    topTextWrapper: {
        height: 70,
        justifyContent: 'space-around'
    },
    userName: {
        color: Colors.white,
        fontSize: 16,
        ...Fonts.bold
    },
    name: {
        color: Colors.black,
        fontSize: 16,
        ...Fonts.bold
    },

    //
    content: {
        flexDirection: 'row',
        marginBottom: 15,
    },
    inside: {
        marginRight: 40
    },
    title: {
        color: Colors.boulder,
        fontSize: 14,
        marginBottom: 3
    },
    value: {
        ...Fonts.bold,
        color: Colors.black,
        fontSize: 18
    },

    //
    caption: {
        color: Colors.black,
        fontSize: 14,
        marginBottom: 25,
    }

};




export const tabBar = {

    wrapper: {
        backgroundColor: Colors.white,
        zIndex: 2,
        borderBottomColor: 'rgba(0, 0, 0, 0.2)',
        borderBottomWidth: 1,
    },
    label: {
        fontSize: 14,
        color: '#000'
    },
    indicator: {
        backgroundColor: '#000'
    },

};

export const tabItem = {
    wrapper: {
        position: 'relative',
        width: PosterWidth,
        height: PosterHeight,
        borderRadius: 5,
        overflow: 'hidden'
    },
    poster: {
        width: PosterWidth,
        height: PosterHeight,
        resizeMode: 'cover'
    },
    overlay: {
        flex: 1,
        position: 'absolute',
        zIndex: 2,
        left: 0,
        top: 0,
        width: '100%',
        height: '100%'
    },
    inside: {
        zIndex: 3,
        position: 'absolute',
        bottom: 0,
        left: 0,
        padding: 8
    },
    caption: {
        fontSize: 12,
        ...Fonts.regular,
        color: Colors.white
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    thumb: {
        borderRadius: 3,
        width: 28,
        height: 28,
        resizeMode: 'cover',
        marginRight: 5
    },
    username: {
        fontSize: 12,
        ...Fonts.medium,
        color: Colors.white
    }
};

export const poster = {
    width: '100%',
    height: 130,
    overflow: 'hidden',
    position: 'absolute'
};