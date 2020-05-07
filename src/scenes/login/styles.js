import { Colors, Fonts, Mixins } from '_styles';

export const container = {
    ...Mixins.padding(0, 30, 35, 30)
};

export const login = {
    logo: {
        ...Mixins.size(158, 55),
        ...Mixins.margin(0, 0, 30, 0)
    },
    hello: {
        ...Fonts.bold,
        fontSize: 22,
        color: Colors.black,
        ...Mixins.margin(0, 0, 6, 0)
    },
    enterInformation: {
        fontSize: 14,
        color: Colors.black,
        ...Mixins.margin(0, 0, 16, 0),
        width: '70%'
    },
    newTo: {
        fontSize: 12,
        color: Colors.black
    },
    registerNow: {
        fontSize: 12,
        color: Colors.cornflowerBlue
    },
}