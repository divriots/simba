# Spacing

```js script
import { html } from 'lit'
import '~/token-display';
import '~/doc-styles';
import { spacing as spacingTokens } from '../src/spacing.css.js';
```

## Usage

The spacings are tokenized as CSS tagged literals (CSSResult) which can be used directly inside `static get styles`.

```js preview-story
import { css, LitElement } from '@lion/core';
import { indigo } from '~/colors';
import { spacing } from '../src/spacing.css.js';

class DemoSpacing extends LitElement { 
  static get styles() {
    return css`
      :host {
        display: block;
        width: ${spacing[48]};
        height: 10px;
        background-color: ${indigo[800]};
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
  html`<token-display token-type="spacing" .tokens=${spacingTokens}></token-display>`;
```