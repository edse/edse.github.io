import { MDCRipple } from '@material/ripple';
import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCDrawer } from "@material/drawer";
import { MDCList } from '@material/list';
// import {MDCTextField} from '@material/textfield';
// import {MDCDialog} from '@material/dialog';
// import {MDCChipSet} from '@material/chips';

const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
const ripples = [].map.call(document.querySelectorAll(selector), function (el) {
    return new MDCRipple(el);
});

const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
const topAppBar = MDCTopAppBar.attachTo(document.getElementById('app-bar'));
topAppBar.setScrollTarget(document.getElementById('main-content'));
topAppBar.listen('MDCTopAppBar:nav', () => {
  drawer.open = !drawer.open;
});

const list = new MDCList(document.querySelector('.mdc-deprecated-list'));
list.wrapFocus = true;
const listItemRipples = list.listElements.map((listItemEl) => new MDCRipple(listItemEl));

// const textFields = [].map.call(document.querySelectorAll('.mdc-text-field'), function (el) {
//     return new MDCTextField(el);
// });

// const
//   screen = {
//     small: 0,
//     medium: 960,
//     large: 1280
//   };

// // observe window resize
// window.addEventListener('resize', resizeHandler);

// // initial call
// resizeHandler();

// // calculate size
// function resizeHandler() {
//   // get window width
//   const iw = window.innerWidth; 
//   // determine named size
//   let size = null;
//   for (let s in screen) {
//     if (iw >= screen[s]) size = s;
//   }
//   if(size == "large") {
//     drawer.open = true;
//   } else {
//     drawer.open = false;
//   }
// }
