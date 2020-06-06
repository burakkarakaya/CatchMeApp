import { Colors, Fonts, Mixins } from '_styles';

export const user = {

    wrapper: {
        flex: 1,
    },

    caption: {
        ...Fonts.regular,
        fontSize: 12,
        color: Colors.white,
        marginBottom: 3,
    },

    name: {
        ...Fonts.medium,
        fontSize: 14,
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
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
    },

    vsWrapper: {
        backgroundColor: Colors.cornflowerBlue,
        borderRadius: 3,
        zIndex: 2,
        marginLeft: -5,
        marginRight: -5,
        overflow: 'hidden',
        width: 20,
        height: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    vsText: {
        ...Fonts.medium,
        fontSize: 12,
        color: Colors.white,
    }
};