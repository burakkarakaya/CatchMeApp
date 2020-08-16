import { Colors, Fonts, Mixins } from '_styles';

export const header = {
    wrapper: {
        backgroundColor: '#F7F7F7',
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        text: {
            color: '#484848',
            ...Fonts.medium
        }
    },
    title: {
        ...Fonts.bold,
        fontSize: 16,
        flex: 1,
        textAlign: 'center'
    },
    rightColumn: {
        minWidth: 32
    }
};