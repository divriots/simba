import * as colors from '~/colors';
import { family } from '~/typography';

export let theme;

let hasSetGlobalTransition = false;

export const setTheme = (_theme) => {
  theme = _theme;
  localStorage.setItem('simba-color', theme);
  const obj = {
    '--simba-font-sans': family['sans'],
    '--simba-font-serif': family['serif'],
    '--simba-font-mono': family['mono'],
    '--simba-color-primary-50': colors[theme][50],
    '--simba-color-primary-100': colors[theme][100],
    '--simba-color-primary-200': colors[theme][200],
    '--simba-color-primary-300': colors[theme][300],
    '--simba-color-primary-400': colors[theme][400],
    '--simba-color-primary-500': colors[theme][500],
    '--simba-color-primary-600': colors[theme][600],
    '--simba-color-primary-700': colors[theme][700],
    '--simba-color-primary-800': colors[theme][800],
    '--simba-color-primary-900': colors[theme][900],
    '--simba-focus-ring-color': colors[theme][300],
    '--simba-text-color': colors.coolGray[900],
    '--simba-text-color-dark': colors.coolGray[50],
    '--simba-bg-color': 'white',
    '--simba-bg-color-dark': '#24292e',
    '--simba-switch-color-hover': `${colors[theme][500]}30`,
    '--simba-switch-color-focus': `${colors[theme][500]}70`,
    '--theme-toggler-focus-color': colors[theme][300],

    /** Used by docs only */
    '--simba-heading-color': colors.coolGray[900],
    '--simba-heading-color-dark': colors.coolGray[50],
    '--simba-blockquote-bg-color': colors[theme][50],
    '--simba-blockquote-bg-color-dark': `${colors[theme][900]}30`,
  };

  for (let [key, value] of Object.entries(obj)) {
    document.documentElement.style.setProperty(key, value);
  }

  if (!hasSetGlobalTransition) {
    const styleSheet = document.createElement('style');
    styleSheet.innerText = `
      html,
      body {
        transition: var(--theme-background-transition), var(--theme-color-transition);
      }
    `;
    document.head.appendChild(styleSheet);
    hasSetGlobalTransition = true;
  }
};
