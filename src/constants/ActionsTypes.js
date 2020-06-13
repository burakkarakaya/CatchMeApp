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

export const ACTION_USER_LOGOUT = 'USER_LOGOUT';
export const USER_LOGGED_IN_STATUS = 'IS_USER_LOGGED_IN';
export const RESET_AUTH_STATE = 'RESET_AUTH_STATE';
export const IS_LOADED = 'IS_LOADED';
export const BOTTOM_TABBAR_THEME = 'BOTTOM_TABBAR_THEME';
export const BOTTOM_TABBAR_THEME_LIGHT = 'BOTTOM_TABBAR_THEME_LIGHT';
export const BOTTOM_TABBAR_THEME_DARK = 'BOTTOM_TABBAR_THEME_DARK';
export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';