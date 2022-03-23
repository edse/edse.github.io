import { MDCDialog } from '@material/dialog';
const dialog = new MDCDialog(document.querySelector('.mdc-dialog'));

// Making dialogs accessible
/*
dialog.listen('MDCDialog:opened', function () {
    // Assuming contentElement references a common parent element with the rest of the page's content
    contentElement.setAttribute('aria-hidden', 'true');
});
dialog.listen('MDCDialog:closing', function () {
    contentElement.removeAttribute('aria-hidden');
});
*/

dialog.open()