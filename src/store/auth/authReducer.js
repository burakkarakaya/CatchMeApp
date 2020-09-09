import {
    ACTION_TYPES,
    ACTION_USER_LOGOUT,
    RESET_AUTH_STATE,
    Status,

} from '_constants';

// TODO: SignIn need to be reset if user hit back from SignInPage
const INITIAL_STATE = {
    signInStatus: Status.DEFAULT,
    signUpStatus: Status.DEFAULT,
    resetPasswordStatus: Status.DEFAULT,

    signInErrorMessage: '',
    signUpErrorMessage: '',
    resetPasswordErrorMessage: '',
};

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case ACTION_TYPES.SIGN_IN_LOADING:
            return {
                ...state,
                signInStatus: Status.LOADING,
                signInErrorMessage: '',
            };
        case ACTION_TYPES.SIGN_IN_SUCCESS:
            return {
                ...state,
                signInStatus: Status.SUCCESS,
            };
        case ACTION_TYPES.SIGN_IN_FAILURE:
            return {
                ...state,
                signInStatus: Status.ERROR,
                signInErrorMessage: payload.errorMessage
            };
        case ACTION_TYPES.SIGN_UP_LOADING:
            return {
                ...state,
                signUpStatus: Status.LOADING,
                signUpErrorMessage: '',
            };
        case ACTION_TYPES.SIGN_UP_SUCCESS:
            return {
                ...state,
                signUpStatus: Status.SUCCESS,
            };
        case ACTION_TYPES.SIGN_UP_FAILURE:
            return {
                ...state,
                signUpStatus: Status.ERROR,
                signUpErrorMessage: payload.errorMessage,
            };
        case ACTION_USER_LOGOUT:
        case RESET_AUTH_STATE:
            return INITIAL_STATE;
        case ACTION_TYPES.RESET_PASSWORD_LOADING:
            return {
                ...state,
                resetPasswordStatus: Status.LOADING,
                resetPasswordErrorMessage: '',
            };
        case ACTION_TYPES.RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                resetPasswordStatus: Status.SUCCESS,
            };
        case ACTION_TYPES.RESET_PASSWORD_FAILURE:
            return {
                ...state,
                resetPasswordStatus: Status.ERROR,
                resetPasswordErrorMessage: payload.errorMessage
            };

        default:
            return state;
    }
};