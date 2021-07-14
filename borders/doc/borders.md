# Borders

```js script
import { html } from 'lit'
import '~/token-display';
import '~/doc-styles';
import { blue } from '~/colors';
import {
  borderRadiusMixin as _borderRadiusMixin,
} from '../src/radius.css.js';
```

## Usage

The color palettes are tokenized as CSS tagged literals (CSSResult) which can be used directly inside `static get styles`.

```js preview-story
import { css, LitElement } from '@lion/core';
import { borderRadiusMixin } from '../src/radius.css.js';

class DemoRounded extends LitElement { 
  static get styles() {
    return css`
      :host {
        display: block;
        width: 50px;
        height: 50px;
        background-color: ${blue[400]};
        ${borderRadiusMixin()}
      }
    `;
  }
}
customElements.define('demo-rounded', DemoRounded);

export const usageInCE = () => html`<demo-rounded></demo-rounded>`;
```

## Sizes

You can specify the size of the border-radius as the first parameter.

E.g. for 2xl borders:

```js
borderRadiusMixin('2xl')
```

```js story
export const sizes = () =>
  html`
    <token-display 
      css-mixin
      token-type="border"
      .mixin=${_borderRadiusMixin}
      .mixinParams=${['']}
      .mixinDynamicParamIndex=${0}
      .mixinDynamicParams=${[
        'none',
        'sm',
        '',
        'md',
        'lg',
        'xl',
        '2xl',
        '3xl',
        'full'
      ]}
    ></token-display>
  `;
```

## Corners

You can specify the corners as the second parameter.

E.g. for only the top corners:

```js
borderRadiusMixin('', 't')
```

```js story
export const corners = () =>
  html`
    <token-display 
      css-mixin
      token-type="border"
      .mixin=${_borderRadiusMixin} 
      .mixinParams=${['md']}
      .mixinDynamicParamIndex=${1}
      .mixinDynamicParams=${['tl', 'tr', 'bl', 'br', 't', 'b', 'l', 'r']}
    ></token-display>
  `;
```