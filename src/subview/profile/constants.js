import {
    Dimensions,
} from 'react-native';
import { Layout, } from '_constants';

const _width = Dimensions.get('window').width;
const _height = Dimensions.get('window').height;
export const TabBarHeight = 48;
export const HeaderHeight = 225;
export const windowHeight = _height;
export const BackgroundMinHeight = 130;
export const BackgroundMaxHeight = HeaderHeight;
export const PosterWidth = Math.round(((_width * .5) - 25));
export const PosterHeight = Math.round(PosterWidth * 1.5093);
export const MainPosterWidth = _width;
export const MainPosterHeight = Layout.StatusBarHeight + ( 70 * .5 ) + 30 + 32; //( StatusBarHeight + thumb height * .5 + top menu icon padding bottom + top menu icon  )