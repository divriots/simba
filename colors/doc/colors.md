# Colors

```js script
import { html } from 'lit'
import '~/token-display';
import '~/doc-styles';
import {
  coolGray as coolGrayTokens,
  red as redTokens,
  amber as amberTokens,
  emerald as emeraldTokens,
  blue as blueTokens,
  indigo as indigoTokens,
  purple as purpleTokens,
  pink as pinkTokens,
} from '../src/index.css.js';

```

## Usage

The color palettes are tokenized as CSS tagged literals (CSSResult) which can be used directly inside `static get styles`.

```js preview-story
import { css, LitElement } from '@lion/core';
import { red } from '../src/index.css.js';

class DemoRed extends LitElement { 
  static get styles() {
    return css`
      :host {
        display: block;
        width: 50px;
        height: 50px;
        background-color: ${red[500]};
      }
    `;
  }
}
customElements.define('demo-red', DemoRed);

export const usageInCE = () => html`<demo-red></demo-red>`;
```

## Palettes

### Cool Gray

```js story
export const coolGray = () =>
  html`<token-display .tokens=${coolGrayTokens}></token-display>`;
```

### Red

```js story
export const redd = () =>
  html`<token-display .tokens=${redTokens}></token-display>`;
```

### Amber

```js story
export const amber = () =>
  html`<token-display .tokens=${amberTokens}></token-display>`;
```

### Emerald

```js story
export const emerald = () =>
  html`<token-display .tokens=${emeraldTokens}></token-display>`;
```

### Blue

```js story
export const blue = () =>
  html`<token-display .tokens=${blueTokens}></token-display>`;
```

### Indigo

```js story
export const indigo = () =>
  html`<token-display .tokens=${indigoTokens}></token-display>`;
```

### Purple

```js story
export const purple = () =>
  html`<token-display .tokens=${purpleTokens}></token-display>`;
```

### Pink

```js story
export const pink = () => html`<token-display .tokens=${pinkTokens}></token-display>`;
```
