import * as colors from '~/colors';
import { familySans, familySerif, familyMono } from '~/typography';

export let theme;

export const defaultThemes = [
  'coolGray',
  'red',
  'amber',
  'emerald',
  'blue',
  'indigo',
  'purple',
  'pink',
];

let hasSetGlobalTransition = false;

export const setTheme = (_theme, _colors) => {
  if (!_theme) {
    return;
  }

  if (!colors[`${_theme}50`] && !_colors) {
    console.error(
      `${_theme} is not a default color, please pass a scheme e.g. {50: #fff, 100: #eee}`
    );
    return;
  }

  theme = _theme;
  localStorage.setItem('simba-color', theme);

  // Pick either a custom palette from the user if pass, or pick as predefined theme
  const clrs = _colors || {};

  const obj = {
    '--simba-font-sans': familySans,
    '--simba-font-serif': familySerif,
    '--simba-font-mono': familyMono,
    '--simba-color-primary-50': clrs[50] || colors[`${theme}50`],
    '--simba-color-primary-100': clrs[100] || colors[`${theme}100`],
    '--simba-color-primary-200': clrs[200] || colors[`${theme}200`],
    '--simba-color-primary-300': clrs[300] || colors[`${theme}300`],
    '--simba-color-primary-400': clrs[400] || colors[`${theme}400`],
    '--simba-color-primary-500': clrs[500] || colors[`${theme}500`],
    '--simba-color-primary-600': clrs[600] || colors[`${theme}600`],
    '--simba-color-primary-700': clrs[700] || colors[`${theme}700`],
    '--simba-color-primary-800': clrs[800] || colors[`${theme}800`],
    '--simba-color-primary-900': clrs[900] || colors[`${theme}900`],
    '--simba-focus-ring-color': clrs[300] || colors[`${theme}300`],
    '--simba-text-color': colors.coolGray900,
    '--simba-text-color-dark': colors.coolGray50,
    '--simba-bg-color': 'white',
    '--simba-bg-color-dark': '#24292e',
    '--simba-switch-color-hover': `${clrs[500] || colors[`${theme}500`]}30`,
    '--simba-switch-color-focus': `${clrs[500] || colors[`${theme}500`]}70`,
    '--theme-toggler-focus-color': clrs[300] || colors[`${theme}300`],

    /** Used by docs only */
    '--simba-heading-color': colors.coolGray900,
    '--simba-heading-color-dark': colors.coolGray50,
    '--simba-blockquote-bg-color': clrs[50] || colors[`${theme}50`],
    '--simba-blockquote-bg-color-dark': `${
      clrs[900] || colors[`${theme}900`]
    }30`,
  };

  for (let [key, value] of Object.entries(obj)) {
    document.documentElement.style.setProperty(key, value);
  }

  if (!hasSetGlobalTransition) {
    const styleElement = document.createElement('style');
    styleElement.appendChild(
      document.createTextNode(`
        html,
        body {
          transition: var(--theme-background-transition), var(--theme-color-transition);
        }
      `)
    );
    document.head.appendChild(styleElement);
    hasSetGlobalTransition = true;
  }
};
