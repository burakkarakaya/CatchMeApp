import { Colors, Fonts, Mixins } from '../../styles';

export const login = {

    general: {
        wrapper: {
            flex: 0,
            ...Mixins.padding(0, 0, 0, 0)
        }
    },

    container: {

        wrapper: {
            marginTop: 21
        },

        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            ...Mixins.margin(0, 0, 10, 0)
        },

        title: {
            color: Colors.black,
        },

        elementWrapper: {
            borderColor: Colors.silver,
            borderRadius: 4,
            borderWidth: 1
        },

        errorText: {
            color: Colors.red
        }

    },

    errorContainer: {

        wrapper: {
            marginTop: 21
        },

        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            ...Mixins.margin(0, 0, 10, 0)
        },

        title: {
            color: Colors.red,
        },

        elementWrapper: {
            borderRadius: 4,
            borderWidth: 1,
            borderColor: Colors.red,
        },

        errorText: {
            color: Colors.red
        }

    },

    textField: {

        input: {
            color: Colors.black,
            height: 48,
            ...Mixins.padding(0, 13, 0, 13),
            fontSize: 16
        },

        placeholderTextColor: Colors.silver

    }
};