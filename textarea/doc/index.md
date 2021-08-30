# Textarea

Textarea Webcomponent.

```js script
import { html } from '~/core';
import { Required, Validator } from '@lion/form-core';
import { localize } from '@lion/localize';
import { loadDefaultFeedbackMessages } from '@lion/validate-messages';
import '~/doc-styles';
import '../simba-textarea.js';

loadDefaultFeedbackMessages();
```

Click the flip locale button to see localized default label in action as well as the validator messages, switching between Dutch and English.

```js preview-story
export const textarea = () => html`
  <button @click=${() => {
    if (localize.locale === 'en-GB') {
      localize.locale = 'nl-NL';
    } else {
      localize.locale = 'en-GB';
    }
  }}>flip locale</button>
  <simba-textarea 
    style="max-width: 400px; resize: both;"
    .validators=${[new Required()]}
    name="biography" 
    help-text="Your biography"
    placeholder="My name is Joe..."
  ></simba-textarea>
`;
```

## Rows

You can specify the `rows` attribute for a minimum amount of rows, which is `2` by default.

You can also specify the `max-rows` attribute for the maximum amount of rows, after which it will scroll instead.

```js preview-story
export const textareaRows = () => html`
  <simba-textarea 
    style="max-width: 400px;"
    rows="3"
    max-rows="4"
    name="biography" 
    help-text="Your biography"
    placeholder="My name is Joe..."
  ></simba-textarea>
`;
```

## Horizontal resize

You can enable horizontal resize by adding the `horizontal-resize` attribute.

Vertical resize is disabled, because this textarea uses `max-rows` and `rows` for vertical resize boundaries, 
and uses the `autosize` library to handle the height.

```js preview-story
export const textareaHorizontal = () => html`
  <simba-textarea 
    style="max-width: 400px;"
    horizontal-resize
    name="biography" 
    help-text="Your biography"
    placeholder="My name is Joe..."
  ></simba-textarea>
`;
```

## Disabled

You can also prefill and disable the textarea in case you don't want your user to change it.

```js preview-story
export const textareaDisabled = () => html`
  <simba-textarea 
    style="max-width: 400px;"
    name="biography" 
    help-text="Your biography"
    .modelValue=${"My name is Joe..."}
    disabled
  ></simba-textarea>
`;
```
