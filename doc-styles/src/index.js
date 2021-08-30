import 'https://gitcdn.link/repo/PrismJS/prism-themes/master/themes/prism-vsc-dark-plus.css';
import './styles.css';
import '../docs-menu.js';
import { preventFart } from 'dark-theme-utils';

/**
 * TODO: Find a way to put this inside a regular script tag in head so it executes
 * before anything renders, this will prevent FART (Flash of inAccurate coloR Theme).
 * Buildless -> use any transform hook on the dev server to inject this before sending back to user
 * Build -> use any transform hook in the build tool to inject this before outputting the html file
 */
preventFart();

const docsMenu = document.createElement('docs-menu');
document.body.prepend(docsMenu);
