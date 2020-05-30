import { Colors, Fonts, Mixins } from '_styles';

// icon button

export const buttonIco = {
    width: 32,
    height: 32,
    resizeMode: 'contain'
};

export const icoButton = {
    wrapper: {

    },

    textWrapper: {

    },

    text: {
        color: Colors.white,
        ...Fonts.medium,
        fontSize: 14
    }
};

// solid blue

export const solid = {
    wrapper: {
        backgroundColor: Colors.cornflowerBlue,
        borderRadius: 5,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        //alignSelf: 'flex-start',
        ...Mixins.padding(0, 15, 0, 15)
    },

    textWrapper: {

    },

    text: {
        color: Colors.white,
        ...Fonts.bold,
        fontSize: 12
    }
};

export const solidLarge = {
    wrapper: {
        ...solid.wrapper,
        height: 46
    },

    textWrapper: {
        ...solid.textWrapper,
    },

    text: {
        ...solid.text,
        ...Fonts.medium,
        fontSize: 16
    }
};

// solid gray

export const solidGray = {
    wrapper: {
        ...solid.wrapper,
        backgroundColor: Colors.alabaster,
    },

    textWrapper: {
        ...solid.textWrapper,
    },

    text: {
        ...solid.text,
        color: Colors.cornflowerBlue
    }
};

export const solidGrayLarge = {
    wrapper: {
        ...solid.wrapper,
        backgroundColor: Colors.alabaster,
        height: 46
    },

    textWrapper: {
        ...solid.textWrapper,
    },

    text: {
        ...solid.text,
        ...Fonts.medium,
        fontSize: 16,
        color: Colors.cornflowerBlue
    }
};

// solid black

export const solidBlack = {
    wrapper: {
        ...solid.wrapper,
        backgroundColor: Colors.black,
    },

    textWrapper: {
        ...solid.textWrapper,
    },

    text: {
        ...solid.text,
        color: Colors.white
    }
};

export const solidBlackLarge = {
    wrapper: {
        ...solid.wrapper,
        backgroundColor: Colors.black,
        height: 46
    },

    textWrapper: {
        ...solid.textWrapper,
    },

    text: {
        ...solid.text,
        ...Fonts.medium,
        fontSize: 16,
        color: Colors.white
    }
};

// underline

export const underline = {
    wrapper: {
        alignSelf: 'flex-start',
    },

    textWrapper: {

    },

    text: {
        color: Colors.black,
        fontSize: 12,
        textDecorationLine: 'underline',
    }
};

export const underlineBlue = {
    wrapper: {
        ...underline.wrapper
    },

    textWrapper: {
        ...underline.textWrapper
    },

    text: {
        ...underline.text,
        color: Colors.cornflowerBlue,
    }
};

// rounded

export const rounded = {
    wrapper: {
        backgroundColor: Colors.chambray,
        borderRadius: 15,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        ...Mixins.padding(0, 15, 0, 15)
    },

    textWrapper: {

    },

    text: {
        color: Colors.white,
        fontSize: 14
    }
};

// outline
export const outline = {
    wrapper: {
        borderColor: Colors.cornflowerBlue,
        borderWidth: 1,
        borderRadius: 5,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        //alignSelf: 'flex-start',
        ...Mixins.padding(0, 15, 0, 15)
    },

    textWrapper: {

    },

    text: {
        color: Colors.cornflowerBlue,
        ...Fonts.bold,
        fontSize: 12
    }
};

export const outlineBlack = {
    wrapper: {
        borderColor: Colors.black,
        borderWidth: 1,
        borderRadius: 5,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        //alignSelf: 'flex-start',
        ...Mixins.padding(0, 15, 0, 15)
    },

    textWrapper: {

    },

    text: {
        color: Colors.black,
        ...Fonts.bold,
        fontSize: 12
    }
};