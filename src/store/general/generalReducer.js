import { IS_LOADED, USER_LOGGED_IN_STATUS } from '_constants';

// TODO: SignIn need to be reset if user hit back from SignInPage
const INITIAL_STATE = {
    isLoaded: false,
    userLoggedInStatus: false
};

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case IS_LOADED:
            return {
                ...state,
                isLoaded: payload
            };
        case USER_LOGGED_IN_STATUS:
            return {
                ...state,
                userLoggedInStatus: payload
            };

        default:
            return state;
    }
};