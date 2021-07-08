import { css } from '@lion/core';
import { indigo, coolGray } from '~/colors';

// Easily adjust to a different color in Tailwind's palettes
const mainColor = indigo;

export const _defaultTheme = css`
  --font-sans: 'Inter var', ui-sans-serif, system-ui, -apple-system,
    BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans',
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    'Noto Color Emoji';
  --font-serif: ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    'Liberation Mono', 'Courier New', monospace;

  --color-primary: ${mainColor[500]};
  --color-primary-lightest: ${mainColor[50]};
  --color-primary-lighter: ${mainColor[100]};
  --color-primary-light: ${mainColor[200]};
  --focus-ring-color: ${mainColor[300]};
  --color-primary-dark: ${mainColor[700]};
  --color-primary-darker: ${mainColor[800]};
  --color-primary-darkest: ${mainColor[900]};
  --heading-color: ${coolGray[900]};
  --text-color: ${coolGray[900]};
  --text-color-light: ${coolGray[50]};
`;

export const defaultTheme = (root = false) => css`
  ${root
    ? css`
        :root {
          ${_defaultTheme}
        }
      `
    : css`
        :host {
          ${_defaultTheme}
        }
      `}
`;
