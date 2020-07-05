import { Colors, Fonts, Mixins } from '_styles';
import { Layout } from '_constants';

export const user = {

    wrapper: {
        flex: 1,
        alignItems: 'center'
    },

    caption: {
        ...Fonts.regular,
        fontSize: 12,
        lineHeight: 12,
        color: Colors.white,
        marginBottom: 3,
    },

    name: {
        ...Fonts.medium,
        fontSize: 14,
        lineHeight: 14,
        color: Colors.white,
    },

    pic: {
        borderRadius: 5,
        width: 36,
        height: 36,
        resizeMode: 'cover'
    },

    badge: {
        width: 16,
        height: 16,
        resizeMode: 'contain',
        position: 'absolute',
        top: -8,
        left: -8,
        zIndex: 2
    },

    directionRightMargin: {
        marginRight: 10,
        flex: 1
    },

    directionLeftMargin: {
        marginLeft: 10,
        flex: 1
    },

};

export const header = {
    wrapper: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
    },

    vsWrapper: {
        zIndex: 2,
    },
    vsText: {
        ...Fonts.medium,
        fontSize: 12,
        lineHeight: 14,
        color: Colors.white,
        overflow: 'hidden',
        textAlign: 'center',
        backgroundColor: Colors.cornflowerBlue,
        borderRadius: 3,
        zIndex: 2,
        paddingHorizontal: 1,
        marginLeft: -5,
        marginRight: -5,
    }
};

export const body = {
    wrapper: {
        marginLeft: 20,
        marginRight: 20
    },
    caption: {
        ...Fonts.bold,
        width: '55%',
        color: Colors.white,
        lineHeight: 17,
    },
    views: {
        ...Fonts.medium,
        color: Colors.white,
        marginTop: 10
    },
    footerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        paddingBottom: 9
    },
    buttonIco: {
        marginRight: 7
    }
};


export const wrapper = {
    container: {
        height: Layout.ScreenSize.height,
        flex: 1,
        backgroundColor: '#000000',
        position: 'relative'
    },
    inside: {
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: 5,
        width: '100%',
        height: '100%'
    }
};