import {
    IS_LOADED,
    USER_LOGGED_IN_STATUS,
    BOTTOM_TABBAR_THEME,
    BOTTOM_TABBAR_THEME_LIGHT,
    SHOW_MODAL,
    HIDE_MODAL,

    SHOW_PRELOADER,
    HIDE_PRELOADER,

    SET_MEMBER,
    UPDATE_OPTIN,

    /* 

    */
    RESET_UPLOAD,
    SET_UPLOAD_VIDEO,
    SET_UPLOAD_DUEL,
    SET_UPLOAD_CAPTION,

    /* 
        general message 
    */
    SHOW_MESSAGE,
    HIDE_MESSAGE,

} from '_constants';

const INITIAL_STATE = {
    isLoaded: false,
    userLoggedInStatus: false,

    /* 
      change theme  
    */

    bottomTabbarTheme: BOTTOM_TABBAR_THEME_LIGHT,

    /* 
      modal  
    */

    modal: {
        visibility: false,
        type: '',
        data: {}
    },

    /* 
      message  
    */

    message: {
        visibility: false,
        type: '',
        data: []
    },

    /* 
      preloader  
    */

    preloader: false,

    /* 
        RESET_AUTH_STATE redux resetlediği için member ve optin buraya taşıdım
    */

    /* 
        login yapıldıktan sonra kullanıcının donen bilgilerini member objesinde tutulacak
    */
    member: null,

    /* 
        signup optin her bir aşama bilgisi buraya yazılacak
    */
    optin: {
        firstName: null,
        lastName: null,
        userName: null,
        email: null,
        password: null,
        gender: null,
        birthday: null,
        phone: null,
        phone_verification: null,
    },

    /* 
      upload  
    */
    upload: {
        video: {},
        duel: [],
        caption: []
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



        case SHOW_PRELOADER:
            return {
                ...state,
                preloader: true
            };

        case HIDE_PRELOADER:
            return {
                ...state,
                preloader: false
            };

        case SET_MEMBER:
            return {
                ...state,
                member: payload
            };

        case UPDATE_OPTIN:
            return {
                ...state,
                optin: {
                    ...state.optin,
                    ...payload
                }
            };

        /* 
            GENERAL MESSAGE
        */

        case SHOW_MESSAGE:
            return {
                ...state,
                message: {
                    visibility: true,
                    ...payload
                }
            };

        case HIDE_MESSAGE:
            return {
                ...state,
                message: INITIAL_STATE.message
            };

        /* 
            UPLOAD
        */
        case RESET_UPLOAD:
            return {
                ...state,
                upload: INITIAL_STATE.upload
            };

        case SET_UPLOAD_VIDEO:
            return {
                ...state,
                upload: {
                    ...state.upload,
                    video: payload
                }
            };


        case SET_UPLOAD_DUEL:
            return {
                ...state,
                upload: {
                    ...state.upload,
                    duel: payload
                }
            };

        case SET_UPLOAD_CAPTION:
            return {
                ...state,
                upload: {
                    ...state.upload,
                    caption: payload
                }
            };

        default:
            return state;
    }
};