const REQUEST = 'REQUEST';
const LOADING = 'LOADING';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

const suffixTypes = [REQUEST, LOADING, SUCCESS, FAILURE];

function createRequestTypes(prefix = '', bases, suffixes = suffixTypes) {
  const req = {};
  bases.forEach((base) => {
    suffixes.forEach((suffix) => {
      req[`${base}_${suffix}`] = `${prefix}_${base}_${suffix}`;
    });
  });
  return req;
}

export const ACTION_TYPES = createRequestTypes('CATCHME', [
  'SIGN_IN', // Sign in already existing user
  'SIGN_UP', // Create new user account
  'RESET_PASSWORD'
], suffixTypes);

/* 

*/
export const UPDATE_OPTIN = 'UPDATE_OPTIN'; // yeni üyelik adımları
export const SET_MEMBER = 'SET_MEMBER'; // yeni üyelik adımları
export const ACTION_USER_LOGOUT = 'USER_LOGOUT';
export const USER_LOGGED_IN_STATUS = 'IS_USER_LOGGED_IN';
export const RESET_AUTH_STATE = 'RESET_AUTH_STATE';
export const IS_LOADED = 'IS_LOADED';
export const BOTTOM_TABBAR_THEME = 'BOTTOM_TABBAR_THEME';
export const BOTTOM_TABBAR_THEME_LIGHT = 'BOTTOM_TABBAR_THEME_LIGHT';
export const BOTTOM_TABBAR_THEME_DARK = 'BOTTOM_TABBAR_THEME_DARK';

/* 
  MODAL
*/
export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';
export const MODAL_TYPE = {
  DIRECT_MESSAGE: 'DIRECT_MESSAGE',
  COMMENT: 'COMMENT',
  FEEDINFO: 'FEEDINFO'
};

/* 
  PRELOADER
*/
export const SHOW_PRELOADER = 'SHOW_PRELOADER';
export const HIDE_PRELOADER = 'HIDE_PRELOADER';

/* 
    general message 
*/
export const SHOW_MESSAGE = 'SHOW_MESSAGE';
export const HIDE_MESSAGE = 'HIDE_MESSAGE';

/* 
  UPLOAD
*/
export const RESET_UPLOAD = 'RESET_UPLOAD';
export const SET_UPLOAD_VIDEO = 'SET_UPLOAD_VIDEO';
export const SET_UPLOAD_DUEL = 'SET_UPLOAD_DUEL';
export const SET_UPLOAD_CAPTION = 'SET_UPLOAD_CAPTION';

/* 
  PAGE_TYPE
*/
export const PAGE_TYPE = {
  PROFILE: 'PROFILE',
  FOLLOWING: 'FOLLOWING',
  FOLLOWERS: 'FOLLOWERS',
  DUELED: 'DUELED',
  UPLOAD: 'UPLOAD',
  DUELING_CONTENTS: 'DUELING_CONTENTS',
  HOME: 'HOME',
  DETAIL: 'DETAIL',
};

/* 

*/
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const CREATE_COMMENT_FAILURE = 'CREATE_COMMENT_FAILURE';

export const LIKE_FEED = 'LIKE_FEED';
export const LIKE_FEED_FAILURE = 'LIKE_FEED_FAILURE';
export const UN_LIKE_FEED = 'UN_LIKE_FEED';
export const UN_LIKE_FEED_FAILURE = 'LIKE_FEED_FAILURE';

export const UN_FOLLOW = 'UN_FOLLOW';
export const UN_FOLLOW_FAILURE = 'UN_FOLLOW_FAILURE';
export const FOLLOW = 'FOLLOW';
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE';
