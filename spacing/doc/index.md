# Spacing

```js script
import { html } from '~/core';
import '~/token-display';
import '~/doc-styles';
import { spacing as spacingTokens } from '../src/spacing.css.js';
```

## Usage

The spacings are tokenized as CSS tagged literals (CSSResult) which can be used directly inside `static get styles`.

```js preview-story
import { css, LitElement } from '~/core';
import { indigo } from '~/colors';
import { ThemeMixin } from 'dark-theme-utils';
import { spacing } from '../src/spacing.css.js';

class DemoSpacing extends ThemeMixin(LitElement) {
  static get styles() {
    return css`
      :host {
        display: block;
        width: ${spacing[48]};
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
    .tokens=${spacingTokens}
  ></token-display>`;
```
