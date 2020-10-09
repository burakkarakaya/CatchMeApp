import {
    IS_LOADED,
    BOTTOM_TABBAR_THEME,

    SHOW_MODAL,
    HIDE_MODAL,

    CREATE_COMMENT,

    LIKE_FEED,
    UN_LIKE_FEED,

    UN_FOLLOW,
    FOLLOW,

    /* 
        general message 
    */
    SHOW_MESSAGE,
    HIDE_MESSAGE,

    /* 

    */
    RESET_UPLOAD,
    SET_UPLOAD_VIDEO,
    SET_UPLOAD_DUEL,
    SET_UPLOAD_CAPTION,

    /* 
        preloader
    */
    SHOW_PRELOADER,
    HIDE_PRELOADER,

} from '_constants';

export const isLoaded = (payload) => ({
    type: IS_LOADED,
    payload: payload
});

export const setBottomTabbarTheme = (payload) => ({
    type: BOTTOM_TABBAR_THEME,
    payload: payload
});

/* 
    Modal
*/

export const showModal = (payload) => ({
    type: SHOW_MODAL,
    payload: payload
});

export const hideModal = () => ({
    type: HIDE_MODAL
});

/* 
    General Message
*/

export const showMessage = (payload = {}) => ({
    type: SHOW_MESSAGE,
    payload: payload
});

export const hideMessage = () => ({
    type: HIDE_MESSAGE
});


/* 
    Preloader
*/

export const showPreloader = (payload) => ({
    type: SHOW_PRELOADER
});

export const hidePreloader = () => ({
    type: HIDE_PRELOADER
});

/* 
    Upload
*/

export const resetUpload = () => ({
    type: RESET_UPLOAD
});

export const setUploadVideo = (payload) => ({
    type: SET_UPLOAD_VIDEO,
    payload: payload
});

export const setUploadDuel = (payload) => ({
    type: SET_UPLOAD_DUEL,
    payload: payload
});

export const setUploadCaption = (payload) => ({
    type: SET_UPLOAD_CAPTION,
    payload: payload
});


/* 
    Services
*/

/* 
    CommentService
*/
export const createComment = (payload) => ({
    type: CREATE_COMMENT,
    payload: payload
});

/* 
    LikingService    
*/

export const likeFeed = (payload) => ({
    type: LIKE_FEED,
    payload: payload
});

export const unLikeFeed = (payload) => ({
    type: UN_LIKE_FEED,
    payload: payload
});

/* 
    FollowingService
*/

export const unFollow = (payload) => ({
    type: UN_FOLLOW,
    payload: payload
});

export const follow = (payload) => ({
    type: FOLLOW,
    payload: payload
});
