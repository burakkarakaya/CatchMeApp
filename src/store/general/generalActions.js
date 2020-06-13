import {
    IS_LOADED,
    BOTTOM_TABBAR_THEME,
    SHOW_MODAL,
    HIDE_MODAL,
} from '_constants';

export const isLoaded = (payload) => ({
    type: IS_LOADED,
    payload: payload
});

export const setBottomTabbarTheme = (payload) => ({
    type: BOTTOM_TABBAR_THEME,
    payload: payload
});

export const showModal = (payload) => ({
    type: SHOW_MODAL,
    payload: payload
});

export const hideModal = () => ({
    type: HIDE_MODAL
});