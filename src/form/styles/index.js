import { Colors, Fonts, Mixins } from '../../styles';

export const general = {
    wrapper: {
        flex: 1,
        ...Mixins.padding(50, 20, 0, 20)
    }
}

export const container = {

    wrapper: {
        marginTop: 18
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        ...Mixins.margin(0, 0, 4, 0)
    },

    title: {
        color: Colors.black,
        ...Fonts.medium
    },

    elementWrapper: {
        borderColor: Colors.silver,
        borderRadius: 2,
        borderWidth: 1
    },

    errorText: {
        color: Colors.red
    }

};

export const errorContainer = {

    wrapper: {
        ...container.wrapper,
    },

    header: {
        ...container.header,
    },

    title: {
        ...container.title,
        color: Colors.red,
    },

    elementWrapper: {
        ...container.elementWrapper,
        borderColor: Colors.red,
    },

    errorText: {
        color: Colors.red
    }

};

export const textField = {

    input: {
        color: Colors.black,
        height: 40,
        ...Mixins.padding(0, 18, 0, 18)
    },

    placeholderTextColor: Colors.silver



};



export const info = {

    wrapper: {
        
    },

    text: {
        color: '#484848',
        fontSize: 14
    }

};