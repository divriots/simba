import * as colors from '~/colors';
import { family } from '~/typography';

export let theme;

let hasSetGlobalTransition = false;

export const setTheme = (_theme, _colors) => {
  theme = _theme;

  // Pick either a custom palette from the user if pass, or pick as predefined theme
  const clrs = _colors || colors[theme];

  localStorage.setItem('simba-color', theme);
  const obj = {
    '--simba-font-sans': family['sans'],
    '--simba-font-serif': family['serif'],
    '--simba-font-mono': family['mono'],
    '--simba-color-primary-50': clrs[50],
    '--simba-color-primary-100': clrs[100],
    '--simba-color-primary-200': clrs[200],
    '--simba-color-primary-300': clrs[300],
    '--simba-color-primary-400': clrs[400],
    '--simba-color-primary-500': clrs[500],
    '--simba-color-primary-600': clrs[600],
    '--simba-color-primary-700': clrs[700],
    '--simba-color-primary-800': clrs[800],
    '--simba-color-primary-900': clrs[900],
    '--simba-focus-ring-color': clrs[300],
    '--simba-text-color': colors.coolGray[900],
    '--simba-text-color-dark': colors.coolGray[50],
    '--simba-bg-color': 'white',
    '--simba-bg-color-dark': '#24292e',
    '--simba-switch-color-hover': `${clrs[500]}30`,
    '--simba-switch-color-focus': `${clrs[500]}70`,
    '--theme-toggler-focus-color': clrs[300],

    /** Used by docs only */
    '--simba-heading-color': colors.coolGray[900],
    '--simba-heading-color-dark': colors.coolGray[50],
    '--simba-blockquote-bg-color': clrs[50],
    '--simba-blockquote-bg-color-dark': `${clrs[900]}30`,
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
