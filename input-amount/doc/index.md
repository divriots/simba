# Input Amount

Amount input field Webcomponent.

```js script
import { html } from 'lit';
import { Required, Validator } from '~/form-core';
import { localize } from '~/localize';
import { loadDefaultFeedbackMessages } from '@lion/ui/validate-messages.js';
import '@divriots/simba/input-amount/define';

loadDefaultFeedbackMessages();
```

## Usage

Import the custom element definition file.

```js
import '@divriots/simba/input-amount/define';
```

Click the flip locale button to see localized default label in action as well as the validator messages, switching between Dutch and English.

Additionally, you can also see that the placeholder and the formatted value of the input gets reformatted on locale changes.

For example, for Dutch locale the thousand separator is a `.` and the decimal a `,`, for English locale this is the opposite.

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
  <simba-input-amount
    .validators=${[new Required()]}
    name="donation_amount"
    help-text="Donation amount"
  ></simba-input-amount>
`;
```

## Amount Restrictions

You can import and apply specific `NumberValidator`s, like `MinNumber`, `MaxNumber` or `MinMaxNumber` to constrain the allowed amounts.

```js preview-story
import { MinNumber } from '~/form-core';

export const inputMinimum = () => html`
  <simba-input-amount
    .validators=${[new Required(), new MinNumber(100)]}
    name="price"
    help-text="Must exceed 100"
  ></simba-input-amount>
`;
```

```js preview-story
import { MinMaxNumber } from '~/form-core';

export const inputRange = () => html`
  <simba-input-amount
    .validators=${[new Required(), new MinMaxNumber({ min: 100, max: 1000 })]}
    name="price"
    help-text="Must be in the range of 100 - 1000"
  ></simba-input-amount>
`;
```

## Disabled

You can also prefill and disable the amount in case you don't want your user to change it.

```js preview-story
export const inputDisabled = () => html`
  <simba-input-amount
    name="price"
    help-text="Preconfigured price"
    .modelValue=${123.45}
    disabled
  ></simba-input-amount>
`;
```
