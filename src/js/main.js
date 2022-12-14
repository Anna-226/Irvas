import './slider';
import modal from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';
import gallery from './modules/gallery';

window.addEventListener('DOMContentLoaded', () => {
   'use strict';
   let modalState = {
      shape: 0,
      type: 'tree',
   };
   changeModalState(modalState);
   modal();
   tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
   tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
   tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
   forms(modalState);
   timer('11-06-2022');
   gallery();
});
