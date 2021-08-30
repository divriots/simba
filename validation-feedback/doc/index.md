# Validation Feedback

```js script
import { html } from '~/core';
import '~/doc-styles';
import '../simba-validation-feedback.js';
```

Validation feedback is useful for giving the user feedback about the values they assigned to input fields in a form.

In Simba, we have 4 different types of feedback: error, warning, info, success.

The feedback component is to be used in conjunction with the `ValidateMixin`'s `feedback` slot, the mixin ensures feedback gets updated, hidden or shown when needed.
The component can be used standalone, but relies on `feedbackData` property to contain the necessary data to render.

## Usage

Below is an example of using the component as standalone.

```js preview-story
export const feedback = () =>
  html`
    <simba-validation-feedback
      .feedbackData=${[
        { message: 'This is an error', type: 'error' },
        { message: 'This is a warning', type: 'warning' },
        { message: 'This is an info message', type: 'info' },
        { message: 'This is a success message', type: 'success' },
      ]}
    ></simba-validation-feedback>
  `;
```
