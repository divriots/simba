# Input Email

Email input field Webcomponent.

```js script
import { html } from 'lit';
import { Required } from '~/form-core';
import { loadDefaultFeedbackMessages } from '@lion/ui/validate-messages.js';
import { localize } from '~/localize';
import '@divriots/simba/input-email/define';

loadDefaultFeedbackMessages();
```

## Usage

Import the custom element definition file.

```js
import '@divriots/simba/input-email/define';
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
  <simba-input-email
    .validators=${[new Required()]}
    name="email"
    help-text="Your email address"
    placeholder="simba@example.com"
  ></simba-input-email>
`;
```

## Limit email domains

You can create a Validator to constrain the domains of the email address

```js preview-story
import { Validator } from '~/form-core';

class GmailValidator extends Validator {
  constructor() {
    super();
    localize.loadNamespace({
      'gmail-validator': (locale) => import(`./${locale}.js`),
    });
  }

  static async getMessage(data) {
    return localize.msg('gmail-validator:error', data);
  }

  static get validatorName() {
    return 'IsGmail';
  }

  /**
   * @param {?} value
   */
  // eslint-disable-next-line class-methods-use-this
  execute(value) {
    let hasError = false;
    const domain = value.split('@')[1];
    if (domain !== 'gmail.com') {
      hasError = true;
    }
    return hasError;
  }
}

export const inputGmail = () => html`
  <simba-input-email
    .validators=${[new Required(), new GmailValidator()]}
    name="email"
    help-text="Your gmail address"
    placeholder="simba@gmail.com"
  ></simba-input-email>
`;
```

## Disabled

You can also prefill and disable the email in case you don't want your user to change it.

```js preview-story
export const inputDisabled = () => html`
  <simba-input-email
    name="email"
    help-text="Preconfigured email"
    .modelValue=${'foo@example.com'}
    disabled
  ></simba-input-email>
`;
```
