import { Colors, Fonts, Mixins } from '_styles';

export const container = {
    flex: 1,
    justifyContent: 'space-between',
    ...Mixins.padding(9, 20, 0, 20),
    backgroundColor: Colors.white
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
        color: Colors.black,
        marginRight: 6
    },
    registerNow: {
        fontSize: 12,
        color: Colors.cornflowerBlue
    },
}

export const phoneVerify = {
    container: {
        ...Mixins.padding(30, 30, 0, 30),
    },
    verifyPhoneNumber: {
        marginBottom: 20,
        fontSize: 22,
        ...Fonts.medium,
        alignSelf: 'center'
    },
    verificationCode: {
        marginBottom: 40,
        fontSize: 16,
        textAlign: 'center',
        alignSelf: 'center'
    },
    counter: {
        alignSelf: 'center',
        marginTop: 17
    },
    receiveCode: {
        color: '#484848',
        fontSize: 16,
        alignSelf: 'center',
    },
    sendAgain: {
        wrapper: {
            marginTop: 7,
            marginBottom: 32,
            alignSelf: 'center'
        },
        text: {
            ...Fonts.medium,
            fontSize: 16
        }
    },
    verify: {

    }
};

export const personalInfo = {
    logo: {
        width: 174, 
        height: 51, 
        alignSelf: 'center', 
        marginBottom: 40,
    },
    title: {
        ...Fonts.medium,
        fontSize: 22,
        alignSelf: 'center',
        marginBottom: 30,
    }
};