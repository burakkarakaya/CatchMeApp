import { Dimensions, Platform, StatusBar } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';


const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const { height, width } = Dimensions.get('window');

export const ScreenSize = {
    width: width,
    height: height
};

export const isIPhoneX = () => Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS
    ? width === X_WIDTH && height === X_HEIGHT || width === XSMAX_WIDTH && height === XSMAX_HEIGHT
    : false;

export const StatusBarHeight = Platform.select({
    ios: isIPhoneX() ? 44 : 20,
    android: StatusBar.currentHeight,
    default: 0
});

/* 
    safearea insets
*/
export const insets = () => {
    return useSafeArea() || {}
}

/* 
    mainmainnavigatorda kullanılan tabbarın yuksekliği

    50 => tabbarın yukseliği
    insets().bottom => boşluk kısmı

*/
export const mainNavigatorTabbarHeight = () => {
    return insets().bottom + 50;
}


/* 
    feedItem

*/
export const feedsTabbarPosition = () => {
    return insets().top;
}
export const feedItemPaddingTop = () => {
    const headerHeight = 50;
    const padding = 17;
    return insets().top + headerHeight + padding;
}
export const feedItemPaddingBottom = () => {
    const padding = 10;
    return mainNavigatorTabbarHeight() + padding;
}