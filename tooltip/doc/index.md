# Tooltip

Tooltip webcomponent.

Interactive content should not be placed in a tooltip content slot. Tooltips are just meant for showing additional information.

```js script
import { html } from '~/core';
import '~/icons/define';
import '@divriots/simba/tooltip/define';
import {
  red400,
  red700,
  amber400,
  amber700,
  emerald400,
  emerald700,
  blue400,
  blue700,
} from '~/colors';
```

## Usage

Import the custom element definition file.

```js
import '@divriots/simba/tooltip/define';
```

```js preview-story
export const tooltip = () => html`
  <style>
    .demo-tooltip-invoker {
      margin: 30px;
      fill: ${red700};
    }
  </style>
  <simba-tooltip .config=${{ popperConfig: { placement: 'right' } }}>
    <simba-icon
      class="demo-tooltip-invoker"
      icon-id="simba:alerts:error"
      slot="invoker"
    ></simba-icon>
    <span slot="content"> Error! </span>
  </simba-tooltip>
`;
```

## Placements

We only allow four placements, `top`, `bottom`, `left` and `right`.

```js preview-story
export const placements = () => html`
  <style>
    .demo-tooltip-invoker {
      margin: 50px;
    }

    [icon-id$='error'] {
      fill: ${red700};
    }

    [icon-id$='warning'] {
      fill: ${amber700};
    }

    [icon-id$='success'] {
      fill: ${emerald700};
    }

    [icon-id$='info'] {
      fill: ${blue700};
    }

    html[theme='dark'] [icon-id$='error'] {
      fill: ${red400};
    }

    html[theme='dark'] [icon-id$='warning'] {
      fill: ${amber400};
    }

    html[theme='dark'] [icon-id$='success'] {
      fill: ${emerald400};
    }

    html[theme='dark'] [icon-id$='info'] {
      fill: ${blue400};
    }
  </style>
  <simba-tooltip .config=${{ popperConfig: { placement: 'top' } }}>
    <simba-icon
      class="demo-tooltip-invoker"
      icon-id="simba:alerts:error"
      slot="invoker"
    ></simba-icon>
    <span slot="content"> Error! </span>
  </simba-tooltip>
  <simba-tooltip .config=${{ popperConfig: { placement: 'right' } }}>
    <simba-icon
      class="demo-tooltip-invoker"
      icon-id="simba:alerts:warning"
      slot="invoker"
    ></simba-icon>
    <span slot="content"> Warning </span>
  </simba-tooltip>
  <simba-tooltip .config=${{ popperConfig: { placement: 'bottom' } }}>
    <simba-icon
      class="demo-tooltip-invoker"
      icon-id="simba:alerts:success"
      slot="invoker"
    ></simba-icon>
    <span slot="content"> Success </span>
  </simba-tooltip>
  <simba-tooltip .config=${{ popperConfig: { placement: 'left' } }}>
    <simba-icon
      class="demo-tooltip-invoker"
      icon-id="simba:alerts:info"
      slot="invoker"
    ></simba-icon>
    <span slot="content"> Info </span>
  </simba-tooltip>
`;
```
