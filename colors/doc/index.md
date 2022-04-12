# Colors

```js script
import { html } from '~/core';
import '~/token-display';
import * as _colors from '~/colors';
```

## Usage

The color palettes are tokenized as CSS tagged literals (CSSResult) which can be used directly inside `static get styles`.

You can import the token group from the main entrypoint (or `/tokens`):

```js
import { colors } from '@divriots/simba'; // colors.red500
```

or a specific color from the token entrypoint:

```js
import { red500 } from '@divriots/simba/colors';
```

```js preview-story
import { css, LitElement } from '@divriots/simba';
import { red500 } from '@divriots/simba/colors';

class DemoRed extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        width: 50px;
        height: 50px;
        background-color: ${red500};
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
  html`<token-display
    token-type="color"
    .tokens=${Object.entries(_colors).filter((entry) =>
      entry[0].startsWith('coolGray')
    )}
  ></token-display>`;
```

### Red

```js story
export const redd = () =>
  html`<token-display
    token-type="color"
    .tokens=${Object.entries(_colors).filter((entry) =>
      entry[0].startsWith('red')
    )}
  ></token-display>`;
```

### Amber

```js story
export const amber = () =>
  html`<token-display
    token-type="color"
    .tokens=${Object.entries(_colors).filter((entry) =>
      entry[0].startsWith('amber')
    )}
  ></token-display>`;
```

### Emerald

```js story
export const emerald = () =>
  html`<token-display
    token-type="color"
    .tokens=${Object.entries(_colors).filter((entry) =>
      entry[0].startsWith('emerald')
    )}
  ></token-display>`;
```

### Blue

```js story
export const blue = () =>
  html`<token-display
    token-type="color"
    .tokens=${Object.entries(_colors).filter((entry) =>
      entry[0].startsWith('blue')
    )}
  ></token-display>`;
```

### Indigo

```js story
export const indigo = () =>
  html`<token-display
    token-type="color"
    .tokens=${Object.entries(_colors).filter((entry) =>
      entry[0].startsWith('indigo')
    )}
  ></token-display>`;
```

### Purple

```js story
export const purple = () =>
  html`<token-display
    token-type="color"
    .tokens=${Object.entries(_colors).filter((entry) =>
      entry[0].startsWith('purple')
    )}
  ></token-display>`;
```

### Pink

```js story
export const pink = () =>
  html`<token-display
    token-type="color"
    .tokens=${Object.entries(_colors).filter((entry) =>
      entry[0].startsWith('pink')
    )}
  ></token-display>`;
```
