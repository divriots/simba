# Switch

Switch button component.

```js script
import { html } from '~/core';
import '@divriots/simba/switch/define';
```

## Usage

Import the custom element definition file.

```js
import '@divriots/simba/switch/define';
```

Or if you only need a specific element instead of all (switch, switch-button):

```js
import '@divriots/simba/switch/define-switch-button';
```

This component has an optional label and help-text, and when present (e.g. inside a form),
the switch itself is displayed next to the label and help-text.

To decrease the space between label and switch, you can always decrease the width of the simba-switch or its parent (e.g. the form).

```js preview-story
export const switchDemo = () =>
  html`
    <simba-switch label="Notifications" help-text="Toggle me"></simba-switch>
  `;
```

## Standalone outside of form

```js preview-story
export const switchStandalone = () =>
  html` <simba-switch-button></simba-switch-button> `;
```

## Disabled

```js preview-story
export const switchDisabled = () =>
  html`
    <simba-switch
      disabled
      checked
      label="Get Simba Newsletter"
      help-text="Can't disable >:)"
    ></simba-switch>
  `;
```
