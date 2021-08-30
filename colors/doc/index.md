# Colors

```js script
import { html } from '~/core'
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
} from '../src/colors.css.js';

```

## Usage

The color palettes are tokenized as CSS tagged literals (CSSResult) which can be used directly inside `static get styles`.

```js preview-story
import { css, LitElement } from '~/core';
import { red } from '../src/colors.css.js';

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
  html`<token-display token-type="color" .tokens=${coolGrayTokens}></token-display>`;
```

### Red

```js story
export const redd = () =>
  html`<token-display token-type="color" .tokens=${redTokens}></token-display>`;
```

### Amber

```js story
export const amber = () =>
  html`<token-display token-type="color" .tokens=${amberTokens}></token-display>`;
```

### Emerald

```js story
export const emerald = () =>
  html`<token-display token-type="color" .tokens=${emeraldTokens}></token-display>`;
```

### Blue

```js story
export const blue = () =>
  html`<token-display token-type="color" .tokens=${blueTokens}></token-display>`;
```

### Indigo

```js story
export const indigo = () =>
  html`<token-display token-type="color" .tokens=${indigoTokens}></token-display>`;
```

### Purple

```js story
export const purple = () =>
  html`<token-display token-type="color" .tokens=${purpleTokens}></token-display>`;
```

### Pink

```js story
export const pink = () => html`<token-display token-type="color" .tokens=${pinkTokens}></token-display>`;
```
