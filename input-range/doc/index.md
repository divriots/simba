# Input Range

Input range Webcomponent.

```js script
import { html } from '~/core';
import { Required, Validator } from '@lion/form-core';
import { localize } from '@lion/localize';
import { loadDefaultFeedbackMessages } from '@lion/validate-messages';
import '~/doc-styles';
import '../simba-input-range.js';

loadDefaultFeedbackMessages();
```

Click the flip locale button to see localized default label in action as well as the validator messages, switching between Dutch and English.

```js preview-story
export const input = () => html`
  <button @click=${() => {
    if (localize.locale === 'en-GB') {
      localize.locale = 'nl-NL';
    } else {
      localize.locale = 'en-GB';
    }
  }}>flip locale</button>
  <simba-input-range
    style="max-width: 400px;"
    min="1"
    max="10"
    .modelValue=${5}
    .validators=${[new Required()]}
    name="range" 
    help-text="How would you rate this component?"
  ></simba-input-range>
`;
```

## Amount Restrictions

You can import and apply specific `NumberValidator`s, like `MinNumber`, `MaxNumber` or `MinMaxNumber` to constrain the allowed amounts.

```js preview-story
import { MinNumber } from '@lion/form-core';

export const inputMinimum = () => html`
  <simba-input-range
    style="max-width: 400px;"
    min="0"
    max="150"
    .validators=${[new Required(), new MinNumber(100)]}
    name="range" 
    help-text="Must exceed 100"
  ></simba-input-range>
`;
```

```js preview-story
import { MinMaxNumber } from '@lion/form-core';

export const inputRange = () => html`
  <simba-input-range
    style="max-width: 400px;"
    min="0"
    max="2000"
    .modelValue=${250}
    .validators=${[new Required(), new MinMaxNumber({ min: 100, max: 1000 })]}
    name="range"
    help-text="Must be in the range of 100 - 1000"
  ></simba-input-range>
`;
```

## Disabled

You can also prefill and disable the range in case you don't want your user to change it.

```js preview-story
export const inputDisabled = () => html`
  <simba-input-range
    style="max-width: 400px;" 
    name="range"
    help-text="Preconfigured amount"
    .modelValue=${15}
    disabled
  ></simba-input-range>
`;
```
