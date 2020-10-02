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
    Preloader
*/

export const showPreloader = (payload) => ({
    type: SHOW_PRELOADER
});

export const hidePreloader = () => ({
    type: HIDE_PRELOADER
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
