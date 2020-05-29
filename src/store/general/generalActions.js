import {
    IS_LOADED,
    BOTTOM_TABBAR_THEME
} from '_constants';

export const isLoaded = (payload) => ({
    type: IS_LOADED,
    payload: payload
});

export const setBottomTabbarTheme = (payload) => ({
    type: BOTTOM_TABBAR_THEME,
    payload: payload
});