# Input Stepper

Input stepper Webcomponent.

```js script
import { html } from '~/core';
import { setTheme } from '~/themes';
import { Required, Validator } from '~/form-core';
import { localize } from '~/localize';
import { loadDefaultFeedbackMessages } from '@lion/validate-messages';
import '@divriots/simba/input-stepper/define';

loadDefaultFeedbackMessages();
```

## Usage

Import the custom element definition file.

```js
import '@divriots/simba/input-stepper/define';
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
  <simba-input-stepper
    .validators=${[new Required()]}
    name="stepper"
    help-text="Your bank account number"
  ></simba-input-stepper>
`;
```

## Amount Restrictions

You can import and apply specific `NumberValidator`s, like `MinNumber`, `MaxNumber` or `MinMaxNumber` to constrain the allowed amounts.

```js preview-story
import { MinNumber } from '~/form-core';

export const inputMinimum = () => html`
  <simba-input-stepper
    .validators=${[new Required(), new MinNumber(100)]}
    name="stepper"
    help-text="Must exceed 100"
  ></simba-input-stepper>
`;
```

```js preview-story
import { MinMaxNumber } from '~/form-core';

export const inputRange = () => html`
  <simba-input-stepper
    .validators=${[new Required(), new MinMaxNumber({ min: 100, max: 1000 })]}
    name="stepper"
    help-text="Must be in the range of 100 - 1000"
  ></simba-input-stepper>
`;
```

## Disabled

You can also prefill and disable the stepper in case you don't want your user to change it.

```js preview-story
export const inputDisabled = () => html`
  <simba-input-stepper
    name="stepper"
    help-text="Preconfigured amount"
    .modelValue=${15}
    disabled
  ></simba-input-stepper>
`;
```
