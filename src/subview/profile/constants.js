import {
    Dimensions,
} from 'react-native';
const _width = Dimensions.get('window').width;
const _height = Dimensions.get('window').height;
export const TabBarHeight = 48;
export const HeaderHeight = 300;
export const windowHeight = _height;
export const BackgroundMinHeight = 130;
export const BackgroundMaxHeight = 300;
export const PosterWidth = Math.round(((_width * .5) - 25));
export const PosterHeight = Math.round(PosterWidth * 1.5093);