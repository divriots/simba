# Typography

```js script
import { html } from '~/core';
import '~/token-display';
import '~/doc-styles';
import { typographyMixin as _typographyMixin } from '../src/typography.css.js';
```

## Usage

The color palettes are tokenized as CSS tagged literals (CSSResult) which can be used directly inside `static get styles`.

```js preview-story
import { css, LitElement } from '~/core';
import { indigo } from '~/colors';
import { ThemeMixin } from 'dark-theme-utils';
import { typographyMixin } from '../src/typography.css.js';

class DemoTypography extends ThemeMixin(LitElement) {
  static get styles() {
    return css`
      :host {
        color: var(--simba-color-primary-700);
        ${typographyMixin('sans', 'xl', 'semibold')};
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

## CSS Values only

It is also possible to only grab `family`, `size` or `weight` e.g. to create CSS custom properties,
instead of using the mixin to grab the full set of typography declarations.

```js
import { css } from '~/core';
import { family, size, weight } from '../src/typography.css.js';

css`
  :host {
    --simba-font-sans: ${family['sans']};
    --simba-font-serif: ${family['serif']};
    --simba-font-mono: ${family['mono']};
    --simba-font-size-base: ${size['base'].size};
    --simba-font-line-height-base: ${size['base'].lineHeight};
    --simba-font-weight-normal: ${weight['normal']};
  }
`;
```

## Family

You can specify the family of the font as the first parameter.

E.g. for monospace:

```js
typographyMixin('mono');
```

```js story
export const family = () =>
  html`
    <token-display
      css-mixin
      token-type="typography"
      .mixin=${_typographyMixin}
      .mixinParams=${['lg', 'normal']}
      .mixinDynamicParamIndex=${0}
      .mixinDynamicParams=${['sans', 'serif', 'mono']}
    ></token-display>
  `;
```

## Sizes

You can specify the size of font as the second parameter.

E.g. for large font-size:

```js
typographyMixin('sans', 'lg');
```

```js story
export const sizes = () =>
  html`
    <token-display
      css-mixin
      token-type="typography"
      .mixin=${_typographyMixin}
      .mixinParams=${['sans', 'normal']}
      .mixinDynamicParamIndex=${1}
      .mixinDynamicParams=${[
        'xs',
        'sm',
        'base',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ]}
    ></token-display>
  `;
```

## Weights

You can specify the weight of font as the third parameter.

E.g. for large font-size:

```js
typographyMixin('sans', 'lg', 'bold');
```

```js story
export const weights = () =>
  html`
    <token-display
      css-mixin
      token-type="typography"
      .mixin=${_typographyMixin}
      .mixinParams=${['sans', 'lg']}
      .mixinDynamicParamIndex=${2}
      .mixinDynamicParams=${[
        'thin',
        'extralight',
        'light',
        'normal',
        'medium',
        'semibold',
        'bold',
        'extrabold',
        'black',
      ]}
    ></token-display>
  `;
```
