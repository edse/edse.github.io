import { MDCRipple } from '@material/ripple';
import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCDrawer } from "@material/drawer";
import { MDCList } from '@material/list';
import {MDCTabBar} from '@material/tab-bar';
// import {MDCTextField} from '@material/textfield';
// import {MDCDialog} from '@material/dialog';
// import {MDCChipSet} from '@material/chips';

const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
const ripples = [].map.call(document.querySelectorAll(selector), function (el) {
    return new MDCRipple(el);
});

const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
drawer.open = false;

const topAppBar = new MDCTopAppBar(document.querySelector('.mdc-top-app-bar'));
topAppBar.setScrollTarget(document.getElementById('main-content'));
topAppBar.listen('MDCTopAppBar:nav', () => {
  drawer.open = !drawer.open;
});

// document.querySelector('.mdc-drawer .mdc-list').addEventListener('click', (event) => {
//   drawer.open = false;
// });

// const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));

const list = new MDCList(document.querySelector('.mdc-deprecated-list'));
list.wrapFocus = true;
const listItemRipples = list.listElements.map((listItemEl) => new MDCRipple(listItemEl));
