import {
    IS_LOADED,
    USER_LOGGED_IN_STATUS,
    BOTTOM_TABBAR_THEME,
    BOTTOM_TABBAR_THEME_LIGHT,
    SHOW_MODAL,
    HIDE_MODAL,
} from '_constants';

const INITIAL_STATE = {
    isLoaded: false,
    userLoggedInStatus: false,
    bottomTabbarTheme: BOTTOM_TABBAR_THEME_LIGHT,
    modal: {
        visibility: false,
        type: '',
        data: {}
    }
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

        case BOTTOM_TABBAR_THEME:
            return {
                ...state,
                bottomTabbarTheme: payload
            };

        case SHOW_MODAL:
            return {
                ...state,
                modal: {
                    visibility: true,
                    ...payload
                }
            };

        case HIDE_MODAL:
            return {
                ...state,
                modal: INITIAL_STATE.modal
            };

        default:
            return state;
    }
};