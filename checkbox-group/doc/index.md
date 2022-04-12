# Checkbox Group

Checkbox group Webcomponent.

```js script
import { html } from '~/core';
import { localize } from '~/localize';
import { loadDefaultFeedbackMessages } from '@lion/validate-messages';
import '@divriots/simba/checkbox-group/define';

loadDefaultFeedbackMessages();
```

## Usage

Import the custom element definition file.

```js
import '@divriots/simba/checkbox-group/define';
```

Or if you only need a specific element instead of all (group, checkbox and indeterminate):

```js
import '@divriots/simba/checkbox-group/define-checkbox';
```

```js preview-story
export const input = () => html`
  <simba-checkbox-group
    name="lion_favorite"
    label="Favorite lions"
    help-text="Don't pick Scar >:("
  >
    <simba-checkbox label="Simba" .choiceValue=${'simba'}></simba-checkbox>
    <simba-checkbox
      label="Sarafina"
      .choiceValue=${'sarafina'}
      checked
    ></simba-checkbox>
    <simba-checkbox label="Mufasa" .choiceValue=${'mufasa'}></simba-checkbox>
    <simba-checkbox
      label="Scar"
      disabled
      .choiceValue=${'scar'}
    ></simba-checkbox>
    <simba-checkbox label="Nala" .choiceValue=${'nala'}></simba-checkbox>
  </simba-checkbox-group>
`;
```

## Indeterminate

You can use indeterminate checkboxes to nest and group categories.

```js preview-story
export const indeterminate = () => html`
  <simba-checkbox-group name="scientists[]">
    <simba-checkbox-indeterminate label="Favorite scientists">
      <simba-checkbox slot="checkbox" label="Isaac Newton"></simba-checkbox>
      <simba-checkbox slot="checkbox" label="Galileo Galilei"></simba-checkbox>
      <simba-checkbox-indeterminate slot="checkbox" label="Greek scientists">
        <simba-checkbox slot="checkbox" label="Archimedes"></simba-checkbox>
        <simba-checkbox slot="checkbox" label="Plato"></simba-checkbox>
        <simba-checkbox slot="checkbox" label="Pythagoras"></simba-checkbox>
      </simba-checkbox-indeterminate>
    </simba-checkbox-indeterminate>
  </simba-checkbox-group>
`;
```

## Disabled

You can also prefill and disable the stepper in case you don't want your user to change it.

```js preview-story
export const inputDisabled = () => html`
  <simba-checkbox-group label="Worst lions" name="lion_worst" disabled>
    <simba-checkbox label="Simba" .choiceValue=${'simba'}></simba-checkbox>
    <simba-checkbox
      label="Sarafina"
      .choiceValue=${'sarafina'}
    ></simba-checkbox>
    <simba-checkbox
      label="Mufasa"
      checked
      .choiceValue=${'mufasa'}
    ></simba-checkbox>
    <simba-checkbox
      label="Scar"
      checked
      .choiceValue=${'scar'}
    ></simba-checkbox>
    <simba-checkbox label="Nala" .choiceValue=${'nala'}></simba-checkbox>
  </simba-checkbox-group>
`;
```
