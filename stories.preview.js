import { setTheme, defaultThemes } from '~/themes';

const colorTheme = localStorage.getItem('simba-color');

if (colorTheme && defaultThemes.includes(colorTheme)) {
  setTheme(colorTheme);
} else {
  setTheme('indigo');
}
