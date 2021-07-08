# Input

Tailwind-style input web component.

```js script
import { html } from 'lit'
import { Required, Validator } from '@lion/form-core';
import { localize } from '@lion/localize';
import { loadDefaultFeedbackMessages } from '@lion/validate-messages';
import '~/doc-styles';
import '../tailwind-input.js';

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
  <tailwind-input 
    .validators=${[new Required()]}
    name="firstname" 
    help-text="Your first name" 
    placeholder="Joe"
  ></tailwind-input>
`;
```
