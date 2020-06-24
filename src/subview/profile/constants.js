import {
    Dimensions,
} from 'react-native';
const _width = Dimensions.get('window').width;
const _height = Dimensions.get('window').height;
export const TabBarHeight = 48;
export const HeaderHeight = 300;
export const tab1ItemSize = (_width - 30) / 2;
export const tab2ItemSize = (_width - 40) / 3;
export const windowHeight = _height;
export const BackgroundMinHeight = 130;
export const BackgroundMaxHeight = 300;