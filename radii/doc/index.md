# Borders

```js script
import { html } from '~/core';
import '~/token-display';
import * as radii from '~/radii';
```

## Usage

The border radii are tokenized as CSS tagged literals (CSSResult) which can be used directly inside `static get styles`.

You can import the token group from the main entrypoint (or `/tokens`):

```js
import { radii } from '@divriots/simba'; // radii.base
```

or a specific color from the token entrypoint:

```js
import { base } from '@divriots/simba/radii';
```

```js preview-story
import { css, LitElement } from '@divriots/simba';
import { base } from '@divriots/simba/radii';
import { ThemeMixin } from 'dark-theme-utils';

class DemoRounded extends ThemeMixin(LitElement) {
  static get styles() {
    return css`
      :host {
        display: block;
        width: 50px;
        height: 50px;
        background-color: var(--simba-color-primary-700);
        border-radius: ${base};
        transition: var(--theme-background-transition);
      }

      :host([theme='dark']) {
        background-color: var(--simba-color-primary-200);
      }
    `;
  }
}
customElements.define('demo-rounded', DemoRounded);

export const usageInCE = () => html`<demo-rounded></demo-rounded>`;
```

## Sizes

You can specify the size of the border-radius.

```js story
export const sizes = () =>
  html`
    <token-display
      token-type="radii"
      .tokens=${Object.entries(radii)}
    ></token-display>
  `;
```
