import { css } from '@lion/core';
import { indigo, coolGray } from '~/colors';
import { family } from '~/typography';

// Easily adjust to a different color in Simba's palettes
const mainColor = indigo;

export const _defaultTheme = css`
  --font-sans: ${family['sans']};
  --font-serif: ${family['serif']};
  --font-mono: ${family['mono']};

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
