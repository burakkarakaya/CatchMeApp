import { 
    ACTION_TYPES, 
    RESET_AUTH_STATE, 
    ACTION_USER_LOGOUT,
    UPDATE_OPTIN 
} from '_constants';

export const signIn = (payload) => ({
    type: ACTION_TYPES.SIGN_IN_REQUEST,
    payload: payload
});

export const signUp = payload => ({
    type: ACTION_TYPES.SIGN_UP_REQUEST,
    payload,
});

export const updateOptin = payload => ({
    type: UPDATE_OPTIN,
    payload,
});

export const logout = () => ({
    type: ACTION_USER_LOGOUT,
});

export const resetPassword = email => ({
    type: ACTION_TYPES.RESET_PASSWORD_REQUEST,
    payload: { email },
});

export const resetAuthState = () => ({
    type: RESET_AUTH_STATE,
});