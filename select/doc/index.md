# Select

Select and select-rich Webcomponent.

```js script
import { html, LitElement, render } from '~/core';
import { Required } from '@lion/form-core';
import { loadDefaultFeedbackMessages } from '@lion/validate-messages';
import { localize } from '@lion/localize';
import '~/doc-styles';
import { SimbaOption } from '../src/SimbaOption.js';
import '../simba-select.js';
import '../simba-select-rich.js';
import '../simba-option.js';

loadDefaultFeedbackMessages();

class ColorOption extends SimbaOption {
  static get properties() {
    return {
      color: { attribute: false },
    };
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has('color')) {
      this.choiceValue = this.color.toLowerCase();
    }

    // Render to LightDOM, otherwise invokerNode cannot clone
    // Keep ShadowDOM intact for styling purposes
    render(
      html`
        <div style="display:flex; align-items: center; gap: 0.5em">
          <div
            style="width: 20px; height: 15px; background-color: ${this.color.toLowerCase()}"
          ></div>
          <p style="margin: 0">${this.color}</p>
        </div>
      `,
      this
    );
  }
}
customElements.define('color-option', ColorOption);
```

Click the flip locale button to see localized default label in action as well as the validator messages, switching between Dutch and English.

```js preview-story
export const select = () => html`
  <button
    @click=${() => {
      if (localize.locale === 'en-GB') {
        localize.locale = 'nl-NL';
      } else {
        localize.locale = 'en-GB';
      }
    }}
  >
    flip locale
  </button>
  <simba-select
    style="max-width: 400px;"
    .validators=${[new Required()]}
    name="select"
    help-text="Pick an option"
  >
    <select slot="input">
      <option selected hidden>Please select</option>
      <option value="red">Red</option>
      <option value="hotpink">Hotpink</option>
      <option value="teal">Teal</option>
    </select>
  </simba-select>
`;
```

Making the first option selected and hidden, you can put a placeholder if needed:

```html
<option selected hidden>Please select</option>
```

## Disabled

You can also prefill and disable the select in case you don't want your user to change it.

```js preview-story
export const selectDisabled = () => html`
  <simba-select
    style="max-width: 400px;"
    name="select"
    help-text="Pick an option"
    disabled
  >
    <select slot="input">
      <option value="red">Red</option>
      <option selected value="hotpink">Hotpink</option>
      <option value="teal">Teal</option>
    </select>
  </simba-select>
`;
```

## Select Rich

A rich version of the regular select.

- Allows rich HTML content inside options
- As it does not use native select, the select and its dropdown looks the same on all browsers / devices

```js preview-story
export const selectRich = () => html`
  <simba-select-rich name="favoriteColor" label="Favorite color">
    <color-option .color=${'Red'}></color-option>
    <color-option .color=${'Hotpink'}></color-option>
    <color-option .color=${'Blue'}></color-option>
  </simba-select-rich>
`;
```

In case you're curious, below is the code for the color-option element, which is an extension of `SimbaOption`.

<details>
  <summary>Code</summary>

```js copy
import { html, LitElement, render } from '~/core';
import { SimbaOption } from '../src/SimbaOption.js';

/**
 * .color prop assumes a color value as "english word",
 * e.g. pink, blue, lightgreen.
 *
 * Feel free to capitalize the first letter so it looks better,
 * the component will lowercase where needed (CSS, choiceValue)
 */
class ColorOption extends SimbaOption {
  static get properties() {
    return {
      color: { attribute: false },
    };
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has('color')) {
      this.choiceValue = this.color.toLowerCase();
    }

    // Render to LightDOM, otherwise invokerNode cannot clone
    // Keep ShadowDOM intact for styling purposes
    render(
      html`
        <div style="display:flex; align-items: center; gap: 0.5em">
          <div
            style="width: 20px; height: 15px; background-color: ${this.color.toLowerCase()}"
          ></div>
          <p style="margin: 0">${this.color}</p>
        </div>
      `,
      this
    );
  }
}
customElements.define('color-option', ColorOption);
```

</details>

## No default selected

You can specify `has-no-default-selected` attribute, to ensure no option is pre-selected, which would be the first option by default.

```js preview-story
export const selectRichDefault = () => html`
  <simba-select-rich
    has-no-default-selected
    name="favoriteColor"
    label="Favorite color"
  >
    <color-option .color=${'Red'}></color-option>
    <color-option .color=${'Hotpink'}></color-option>
    <color-option .color=${'Blue'}></color-option>
  </simba-select-rich>
`;
```

## Single option

Having a single option means the dropdown is disabled, and the arrow is removed.

```js preview-story
export const selectRichSingle = () => html`
  <simba-select-rich name="favoriteColor" label="Favorite color">
    <color-option .color=${'Red'}></color-option>
  </simba-select-rich>
`;
```
