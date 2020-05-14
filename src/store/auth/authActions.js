import { ACTION_TYPES, RESET_AUTH_STATE } from '_constants';

export const signIn = (email, password) => ({
    type: ACTION_TYPES.SIGN_IN_REQUEST,
    payload: {
        email,
        password
    }
});

export const signUp = payload => ({
    type: ACTION_TYPES.SIGN_UP_REQUEST,
    payload,
});

export const resetPassword = email => ({
    type: ACTION_TYPES.RESET_PASSWORD_REQUEST,
    payload: { email },
});

export const resetAuthState = () => ({
    type: RESET_AUTH_STATE,
});