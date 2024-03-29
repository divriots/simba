# Button

Button web component.

```js script
import { html } from 'lit';
import '@divriots/simba/button/define';
import '../define-submit-button.js';
```

## Usage

Import the custom element definition file.

```js
import '@divriots/simba/button/define';
import '@divriots/simba/button/define-submit';
```

```js preview-story
export const submitButton = () => html`<simba-button>Submit</simba-button>`;
```

## Types

Visual hierarchy is important, therefore multiple variations are possible.
Secondary and outline variation buttons should be used for less important call to actions.
Text buttons don't have outlines and are the least priority buttons.

### Secondary

```js preview-story
export const secondaryButton = () =>
  html`<simba-button variation="secondary">Submit</simba-button>`;
```

### Outline

```js preview-story
export const outlineButton = () =>
  html`<simba-button variation="outline">Submit</simba-button>`;
```

### Text

```js preview-story
export const textButton = () =>
  html`<simba-button variation="text">Submit</simba-button>`;
```

## Sizes

Apart from the default size, there is also a small and large variation.

### Small

```js preview-story
export const smallButton = () =>
  html`<simba-button size="small">Submit</simba-button>`;
```

### Large

```js preview-story
export const largeButton = () =>
  html`<simba-button size="large">Submit</simba-button>`;
```

## Rounded

```js preview-story
export const roundedButton = () =>
  html`<simba-button rounded>Submit</simba-button>`;
```

```js preview-story
export const circularButton = () =>
  html`<simba-button rounded>+</simba-button>`;
```

## Prefix & Suffix slots

The simba-button supports having a prefix or a suffix, through content projection.

```js preview-story
export const prefixButton = () => html`
  <simba-button>
    <svg
      slot="prefix"
      style="width: 18px; fill: white;"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
    >
      <path
        d="M561.938 158.06L417.94 14.092C387.926-15.922 336 5.097 336 48.032v57.198c-42.45 1.88-84.03 6.55-120.76 17.99-35.17 10.95-63.07 27.58-82.91 49.42C108.22 199.2 96 232.6 96 271.94c0 61.697 33.178 112.455 84.87 144.76 37.546 23.508 85.248-12.651 71.02-55.74-15.515-47.119-17.156-70.923 84.11-78.76V336c0 42.993 51.968 63.913 81.94 33.94l143.998-144c18.75-18.74 18.75-49.14 0-67.88zM384 336V232.16C255.309 234.082 166.492 255.35 206.31 376 176.79 357.55 144 324.08 144 271.94c0-109.334 129.14-118.947 240-119.85V48l144 144-144 144zm24.74 84.493a82.658 82.658 0 0 0 20.974-9.303c7.976-4.952 18.286.826 18.286 10.214V464c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h132c6.627 0 12 5.373 12 12v4.486c0 4.917-2.987 9.369-7.569 11.152-13.702 5.331-26.396 11.537-38.05 18.585a12.138 12.138 0 0 1-6.28 1.777H54a6 6 0 0 0-6 6v340a6 6 0 0 0 6 6h340a6 6 0 0 0 6-6v-25.966c0-5.37 3.579-10.059 8.74-11.541z"
      />
    </svg>
    Submit
  </simba-button>
`;
```

```js preview-story
export const suffixButton = () => html`
  <simba-button>
    Submit
    <svg
      slot="suffix"
      style="width: 18px; fill: white;"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
    >
      <path
        d="M561.938 158.06L417.94 14.092C387.926-15.922 336 5.097 336 48.032v57.198c-42.45 1.88-84.03 6.55-120.76 17.99-35.17 10.95-63.07 27.58-82.91 49.42C108.22 199.2 96 232.6 96 271.94c0 61.697 33.178 112.455 84.87 144.76 37.546 23.508 85.248-12.651 71.02-55.74-15.515-47.119-17.156-70.923 84.11-78.76V336c0 42.993 51.968 63.913 81.94 33.94l143.998-144c18.75-18.74 18.75-49.14 0-67.88zM384 336V232.16C255.309 234.082 166.492 255.35 206.31 376 176.79 357.55 144 324.08 144 271.94c0-109.334 129.14-118.947 240-119.85V48l144 144-144 144zm24.74 84.493a82.658 82.658 0 0 0 20.974-9.303c7.976-4.952 18.286.826 18.286 10.214V464c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h132c6.627 0 12 5.373 12 12v4.486c0 4.917-2.987 9.369-7.569 11.152-13.702 5.331-26.396 11.537-38.05 18.585a12.138 12.138 0 0 1-6.28 1.777H54a6 6 0 0 0-6 6v340a6 6 0 0 0 6 6h340a6 6 0 0 0 6-6v-25.966c0-5.37 3.579-10.059 8.74-11.541z"
      />
    </svg>
  </simba-button>
`;
```

## Disabled

```js preview-story
export const disabledButton = () => html`
  <simba-button disabled>Submit</simba-button>
  <simba-button variation="secondary" disabled>Submit</simba-button>
  <simba-button variation="outline" disabled>Submit</simba-button>
  <simba-button variation="text" disabled>Submit</simba-button>
`;
```

## Form Submit

```js preview-story
export const submit = () => html`
  <form
    @submit=${(ev) => {
      ev.preventDefault();
      console.log(ev.target.elements);
    }}
  >
    <label>
      Text input
      <input name="text_input" />
    </label>
    <simba-button-submit>Submit</simba-button-submit>
  </form>
`;
```
