import { Colors, Fonts, Mixins } from '../../styles';

export const login = {

    general: {
        wrapper: {
            flex: 1,
            ...Mixins.padding(50, 30, 0, 30)
        }
    },

    container: {

        wrapper: {
            marginTop: 14
        },

        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            ...Mixins.margin(0, 0, 4, 0)
        },

        title: {
            color: Colors.boulder,
        },

        elementWrapper: {
            borderColor: Colors.silver,
            borderRadius: 2,
            borderWidth: 1
        },

        errorText: {
            color: Colors.red
        }

    },

    errorContainer: {

        wrapper: {
            marginTop: 14
        },

        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            ...Mixins.margin(0, 0, 4, 0)
        },

        title: {
            color: Colors.red,
        },

        elementWrapper: {
            borderRadius: 2,
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
            height: 40,
            ...Mixins.padding(0, 18, 0, 18)
        },

        placeholderTextColor: Colors.silver

    }
};