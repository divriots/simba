# Input

Text input field Webcomponent.

```js script
import { html } from '~/core';
import { Required, Validator } from '~/form-core';
import { localize } from '~/localize';
import { loadDefaultFeedbackMessages } from '@lion/validate-messages';
import '@divriots/simba/input/define';

loadDefaultFeedbackMessages();
```

## Usage

Import the custom element definition file.

```js
import '@divriots/simba/input/define';
```

Click the flip locale button to see localized default label in action as well as the validator messages, switching between Dutch and English.

```js preview-story
export const input = () => html`
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
  <simba-input
    .validators=${[new Required()]}
    name="firstname"
    help-text="Your first name"
    placeholder="Joe"
  ></simba-input>
`;
```

## Disabled

You can also prefill and disable the input in case you don't want your user to change it.

```js preview-story
export const inputDisabled = () => html`
  <simba-input
    name="firstname"
    help-text="Your first name"
    .modelValue=${'Joe'}
    disabled
  ></simba-input>
`;
```
