import { css } from '@lion/core';
import { indigo, coolGray } from '~/colors';
import { family } from '~/typography';

// Easily adjust to a different color in Simba's palettes
const mainColor = indigo;

export const _defaultTheme = css`
  /** Used by components */
  --font-sans: ${family['sans']};
  --font-serif: ${family['serif']};
  --font-mono: ${family['mono']};
  --color-primary-50: ${mainColor[50]};
  --color-primary-100: ${mainColor[100]};
  --color-primary-200: ${mainColor[200]};
  --color-primary-300: ${mainColor[300]};
  --color-primary-400: ${mainColor[400]};
  --color-primary-500: ${mainColor[500]};
  --color-primary-600: ${mainColor[600]};
  --color-primary-700: ${mainColor[700]};
  --color-primary-800: ${mainColor[800]};
  --color-primary-900: ${mainColor[900]};
  --focus-ring-color: ${mainColor[300]};
  --text-color: ${coolGray[900]};
  --text-color-dark: ${coolGray[50]};
  --bg-color: white;
  --bg-color-dark: #24292e;

  /** Used by docs only */
  --heading-color: ${coolGray[900]};
  --heading-color-dark: ${coolGray[50]};
  --blockquote-bg-color: ${mainColor[50]};
  --blockquote-bg-color-dark: ${mainColor[900]}30;
`;

// TODO: remove transitions on :host/::slotted and apply where necessary, case by case.
export const defaultTheme = (root = false) => css`
  ${root
    ? css`
        :root {
          ${_defaultTheme};
        }

        html,
        body {
          transition: var(--simba-darkmode-transition);
        }
      `
    : css`
        :host {
          transition: var(--simba-darkmode-transition);
        }

        ::slotted(*) {
          transition: var(--simba-darkmode-transition);
        }
      `}
`;
