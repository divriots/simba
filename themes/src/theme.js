import * as colors from '~/colors';
import { family } from '~/typography';

export let theme;

let hasSetGlobalTransition = false;

export const setTheme = (_theme) => {
  theme = _theme;
  localStorage.setItem('simba-color', theme);
  const obj = {
    '--font-sans': family['sans'],
    '--font-serif': family['serif'],
    '--font-mono': family['mono'],
    '--color-primary-50': colors[theme][50],
    '--color-primary-100': colors[theme][100],
    '--color-primary-200': colors[theme][200],
    '--color-primary-300': colors[theme][300],
    '--color-primary-400': colors[theme][400],
    '--color-primary-500': colors[theme][500],
    '--color-primary-600': colors[theme][600],
    '--color-primary-700': colors[theme][700],
    '--color-primary-800': colors[theme][800],
    '--color-primary-900': colors[theme][900],
    '--focus-ring-color': colors[theme][300],
    '--text-color': colors.coolGray[900],
    '--text-color-dark': colors.coolGray[50],
    '--bg-color': 'white',
    '--bg-color-dark': '#24292e',

    /** Used by docs only */
    '--heading-color': colors.coolGray[900],
    '--heading-color-dark': colors.coolGray[50],
    '--blockquote-bg-color': colors[theme][50],
    '--blockquote-bg-color-dark': `${colors[theme][900]}30`,
  };

  for (let [key, value] of Object.entries(obj)) {
    document.documentElement.style.setProperty(key, value);
  }

  if (!hasSetGlobalTransition) {
    const styleSheet = document.createElement('style');
    styleSheet.innerText = `
      html,
      body {
        transition: var(--simba-theme-transition);
      }
    `;
    document.head.appendChild(styleSheet);
    hasSetGlobalTransition = true;
  }
};
