import header from './header';
import { blurUpImage } from './util';
import { BASE_IMG_PATH } from './constants';

blurUpImage( `${BASE_IMG_PATH}/springbok_cover.jpg`, '.header-bg-img');

window.addEventListener('load', () => {
    header.init('#about-section');
});
