// Import
import {MDCRipple} from '@material/ripple';
import {MDCTopAppBar} from '@material/top-app-bar';


// Instantiate
try {
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);
const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));
const fabRipple = new MDCRipple(document.querySelector('.mdc-fab'));
}
catch {};
