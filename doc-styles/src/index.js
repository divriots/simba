import './styles.css';
import 'https://gitcdn.link/repo/PrismJS/prism-themes/master/themes/prism-vsc-dark-plus.css';
import { defaultTheme } from '~/themes';

const cssText = defaultTheme(true);
const styleSheet = document.createElement('style');
styleSheet.innerText = cssText;
document.head.appendChild(styleSheet);
