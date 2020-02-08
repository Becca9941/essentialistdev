// Import
// Top App Bar
import {MDCTopAppBar} from '@material/top-app-bar';
// Ripple
import {MDCRipple} from '@material/ripple';


// Instantiate
// Top App Bar
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);
// Fab
const fabRipple = new MDCRipple(document.querySelector('.mdc-fab'));
