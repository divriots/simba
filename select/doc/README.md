# Select

Select and select-rich Webcomponent.

```js script
import { html } from 'lit';
import { Required } from '@lion/form-core';
import { loadDefaultFeedbackMessages } from '@lion/validate-messages';
import { localize } from '@lion/localize';
import '~/doc-styles';
import '../simba-select.js';

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
  <simba-select 
    style="max-width: 400px;"
    .validators=${[new Required()]}
    name="select" 
    help-text="Pick an option"
  >
    <select slot="input">
      <option selected hidden>Please select</option>
      <option value="red">Red</option>
      <option value="hotpink">Hotpink</option>
      <option value="teal">Teal</option>
    </select>
  </simba-select>
`;
```

Making the first option selected and hidden, you can put a placeholder if needed:

```html
<option selected hidden>Please select</option>
```

## Disabled

You can also prefill and disable the select in case you don't want your user to change it.

```js preview-story
export const inputDisabled = () => html`
  <simba-select
    style="max-width: 400px;"
    name="select" 
    help-text="Pick an option"
    disabled
  >
    <select slot="input">
      <option value="red">Red</option>
      <option selected value="hotpink">Hotpink</option>
      <option value="teal">Teal</option>
    </select>
  </simba-select>
`;
```
