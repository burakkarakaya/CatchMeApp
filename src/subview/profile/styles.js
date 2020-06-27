import { Colors, Fonts, Mixins } from '_styles';
import { PosterWidth, PosterHeight } from './constants';

export const header = {

    wrapper: {
        top: 0,
        height: 300,
        width: '100%',
        backgroundColor: '#FFFFFF',
        position: 'absolute',
    }

};


export const tabBar = {

    wrapper: {
        elevation: 0,
        shadowOpacity: 0,
        backgroundColor: '#FFF'
    },
    label: {
        fontSize: 16,
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