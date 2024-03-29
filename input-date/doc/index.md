# Input Date

Date input field Webcomponent.

```js script
import { html } from 'lit';
import { Required, Validator } from '~/form-core';
import { localize } from '~/localize';
import { loadDefaultFeedbackMessages } from '@lion/ui/validate-messages.js';
import '@divriots/simba/input-date/define';

loadDefaultFeedbackMessages();
```

## Usage

Import the custom element definition file.

```js
import '@divriots/simba/input-date/define';
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
  <simba-input-date
    .validators=${[new Required()]}
    name="date"
    help-text="DD/MM/YYYY"
    placeholder="01/01/2021"
  ></simba-input-date>
`;
```

## Date Restrictions

You can import and apply specific `NumberValidator`s, like `MinNumber`, `MaxNumber` or `MinMaxNumber` to constrain the allowed amounts.

```js preview-story
import { formatDate } from '~/localize';
import { MinDate } from '~/form-core';

const today = formatDate(new Date());

export const inputMinimum = () => html`
  <simba-input-date
    .validators=${[new Required(), new MinDate(new Date())]}
    name="date"
    placeholder="${today}"
    help-text="Must be later than today"
  ></simba-input-date>
`;
```

```js preview-story
import { MinMaxDate } from '~/form-core';

const date = new Date();
const month = date.getMonth();
const year = date.getFullYear();
const firstDay = new Date(year, month, 1);
const lastDay = new Date(year, month + 1, 0);

export const inputRange = () => html`
  <simba-input-date
    .validators=${[
      new Required(),
      new MinMaxDate({ min: firstDay, max: lastDay }),
    ]}
    name="date"
    placeholder="01/${`0${month + 1}`.slice(-2)}/${year}"
    help-text="Must be in this month"
  ></simba-input-date>
`;
```

## Disabled

You can also prefill and disable the date in case you don't want your user to change it.

```js preview-story
export const inputDisabled = () => html`
  <simba-input-date
    name="date"
    help-text="Preconfigured date"
    .modelValue=${new Date()}
    disabled
  ></simba-input-date>
`;
```
