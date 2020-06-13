import { Colors, Fonts, Mixins } from '_styles';

export const modal = {
    wrapper: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    inside: (_height = 'auto') => ({
        backgroundColor: Colors.white,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        height: _height,
        minHeight: 150,
        marginHorizontal: 20,
    }),
    header: {
        paddingTop: 5,
        height: 30,
        alignItems: 'center'
    },
    indicator: {
        backgroundColor: Colors.silver,
        height: 5,
        width: 45,
        borderRadius: 5,
    },
};