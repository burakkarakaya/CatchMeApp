import { Colors, Fonts, Mixins } from '_styles';

export const item = {
    wrapper: {
        flexDirection: 'row'
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
        fontSize: 13,
        color: Colors.black
    }
};

export const comment = {
    wrapper: {
    },

    header: {
        paddingBottom: 20,
        borderColor: Colors.alabaster,
        borderBottomWidth: 1,
        paddingHorizontal: 15,
    },
    headerTop: {
        paddingHorizontal: 5,
        
    },
    headerTopInner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonIco: {
        marginRight: 7
    },
    views: {
        marginBottom: 10
    },


    body: {
        minHeight: 300
    },

    footer: {
        minHeight: 70
    }
};