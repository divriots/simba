# Input IBAN

IBAN input field Webcomponent.

```js script
import { html } from 'lit';
import { Required, Validator } from '@lion/form-core';
import { localize } from '@lion/localize';
import { loadDefaultFeedbackMessages } from '@lion/validate-messages';
import '~/doc-styles';
import '../simba-input-iban.js';

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
  <simba-input-iban 
    .validators=${[new Required()]}
    name="iban" 
    help-text="Your bank account number"
  ></simba-input-iban>
`;
```

## Country Restrictions

By default, we validate the input to ensure the IBAN is valid.

In the example below, we restrict IBANs to only Dutch IBANs.

> TODO: when [Lion PR](https://github.com/ing-bank/lion/pull/1462) is done,
> showcase enforcing IBAN to multiple possible countries, e.g. BeNeLux (Belgium, Netherlands, Luxembourg).
> Another use case is a whitelist of only EU IBANs, which is easier than a blacklist of non EU countries.

```js preview-story
import { IsCountryIBAN } from '@lion/input-iban';

export const inputCountryRestrictions = () => html`
  <simba-input-iban 
    .validators=${[new Required(), new IsCountryIBAN('NL')]}
    .modelValue=${'DE89370400440532013000'}
    name="iban" 
    help-text="Your Dutch bank account number"
  ></simba-input-iban>
  <br />
  <small>Demo instructions: you can use NL20 INGB 0001 2345 67</small>
`;
```

## Disabled

You can also prefill and disable the iban in case you don't want your user to change it.

```js preview-story
export const inputDisabled = () => html`
  <simba-input-iban 
    name="iban" 
    help-text="Preconfigured IBAN"
    .modelValue=${'NL91ABNA0417164300'}
    disabled
  ></simba-input-iban>
`;
```
