# Spacing

```js script
import { html } from '~/core';
import '~/token-display';
import * as spacing from '~/spacing';
```

## Usage

The spacings are tokenized as CSS tagged literals (CSSResult) which can be used directly inside `static get styles`.

You can import the token group from the main entrypoint (or `/tokens`):

```js
import { spacing } from '@divriots/simba'; // spacing.s48
```

or a specific color from the token entrypoint:

```js
import { s48 } from '@divriots/simba/spacing';
```

```js preview-story
import { ThemeMixin } from 'dark-theme-utils';
import { css, LitElement } from '@divriots/simba';
import { s48 } from '@divriots/simba/spacing';

class DemoSpacing extends ThemeMixin(LitElement) {
  static get styles() {
    return css`
      :host {
        display: block;
        width: ${s48};
        height: 10px;
        background-color: var(--simba-color-primary-700);
        transition: var(--theme-background-transition);
      }

      :host([theme='dark']) {
        background-color: var(--simba-color-primary-200);
      }
    `;
  }
}
customElements.define('demo-spacing', DemoSpacing);

export const usageInCE = () => html`<demo-spacing></demo-spacing>`;
```

## Spacings

```js story
export const spacings = () =>
  html`<token-display
    token-type="spacing"
    .tokens=${Object.entries(spacing)}
  ></token-display>`;
```
