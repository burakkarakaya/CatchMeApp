import { IS_LOADED } from '_constants';

export const isLoaded = (payload) => ({
    type: IS_LOADED,
    payload: payload
});