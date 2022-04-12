# Radio Group

Radio group Webcomponent.

```js script
import { html } from '~/core';
import { Required, Validator } from '~/form-core';
import { localize } from '~/localize';
import { loadDefaultFeedbackMessages } from '@lion/validate-messages';
import '@divriots/simba/radio-group/define';

loadDefaultFeedbackMessages();
```

## Usage

Import the custom element definition file.

```js
import '@divriots/simba/radio-group/define';
```

Or if you only need a specific element instead of all (radio, radio-group):

```js
import '@divriots/simba/radio-group/define-radio';
```

```js preview-story
export const input = () => html`
  <simba-radio-group
    name="lion_favorite"
    label="Favorite lion"
    help-text="Don't pick Scar >:("
  >
    <simba-radio label="Simba" .choiceValue=${'simba'}></simba-radio>
    <simba-radio
      label="Sarafina"
      .choiceValue=${'sarafina'}
      checked
    ></simba-radio>
    <simba-radio label="Mufasa" .choiceValue=${'mufasa'}></simba-radio>
    <simba-radio label="Scar" disabled .choiceValue=${'scar'}></simba-radio>
    <simba-radio label="Nala" .choiceValue=${'nala'}></simba-radio>
  </simba-radio-group>
`;
```

## Disabled

You can also prefill and disable the stepper in case you don't want your user to change it.

```js preview-story
export const inputDisabled = () => html`
  <simba-radio-group
    .validators=${[new Required()]}
    label="Worst lion"
    name="lion_worst"
    disabled
  >
    <simba-radio label="Simba" .choiceValue=${'simba'}></simba-radio>
    <simba-radio label="Sarafina" .choiceValue=${'sarafina'}></simba-radio>
    <simba-radio label="Mufasa" .choiceValue=${'mufasa'}></simba-radio>
    <simba-radio label="Scar" checked .choiceValue=${'scar'}></simba-radio>
    <simba-radio label="Nala" .choiceValue=${'nala'}></simba-radio>
  </simba-radio-group>
`;
```
