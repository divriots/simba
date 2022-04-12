# Typography

```js script
import { html } from '~/core';
import '~/token-display';
import * as typography from '~/typography';
```

## Usage

The typography parts are tokenized as CSS tagged literals (CSSResult) which can be used directly inside `static get styles`.

You can import the token group from the main entrypoint (or `/tokens`):

```js
import { typography } from '@divriots/simba'; // typography.familyMono
```

or a specific color from the token entrypoint:

```js
import { familyMono } from '@divriots/simba/typography';
```

```js preview-story
import { ThemeMixin } from 'dark-theme-utils';
import { css, LitElement } from '@divriots/simba';
import {
  familySans,
  sizeXlSize,
  sizeXlLineHeight,
  weightSemibold,
} from '@divriots/simba/typography';

class DemoTypography extends ThemeMixin(LitElement) {
  static get styles() {
    return css`
      :host {
        color: var(--simba-color-primary-700);
        font-family: ${familySans};
        font-size: ${sizeXlSize};
        line-height: ${sizeXlLineHeight};
        font-weight: ${weightSemibold};
        transition: var(--theme-color-transition);
      }

      :host([theme='dark']) {
        color: var(--simba-color-primary-200);
      }
    `;
  }

  render() {
    return html`The quick brown fox jumped over the lazy dog.`;
  }
}
customElements.define('demo-typography', DemoTypography);

export const usageInCE = () => html`<demo-typography></demo-typography>`;
```

## Family

You can specify the family of the font.

```js story
export const family = () =>
  html`
    <token-display
      token-type="typography"
      .cssProp=${'font-family'}
      .tokens=${Object.entries(typography).filter((entry) =>
        entry[0].startsWith('family')
      )}
    ></token-display>
  `;
```

## Sizes

You can specify the size of font, which goes hand in hand with line-height.

```js story
export const sizes = () =>
  html`
    <token-display
      token-type="typography"
      .cssProp=${'font-size'}
      .tokens=${Object.entries(typography).filter(
        (entry) => entry[0].startsWith('size') && entry[0].endsWith('Size')
      )}
    ></token-display>
  `;
```

## Line Heights

You can specify the line height, line heights and sizes go hand in hand.

```js story
export const lineHeights = () =>
  html`
    <token-display
      token-type="typography"
      .cssProp=${'line-height'}
      .tokens=${Object.entries(typography).filter(
        (entry) =>
          entry[0].startsWith('size') && entry[0].endsWith('LineHeight')
      )}
    ></token-display>
  `;
```

## Weights

You can get different font weights.

```js story
export const weights = () =>
  html`
    <token-display
      token-type="typography"
      .cssProp=${'font-weight'}
      .tokens=${Object.entries(typography).filter((entry) =>
        entry[0].startsWith('weight')
      )}
    ></token-display>
  `;
```
