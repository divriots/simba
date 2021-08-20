# Collapsible

Collapsible component, folds out content.

```js script
import { html } from '~/core';
import '~/doc-styles';
import '../simba-collapsible.js';
import '../simba-collapsible-button.js';
import '~/button/simba-button.js';
```

```js preview-story
export const collapsible = () => html`
  <simba-collapsible>
    <simba-collapsible-button variation="outline" slot="invoker"
      >More about cars</simba-collapsible-button
    >
    <div slot="content">
      Most definitions of cars say that they run primarily on roads, seat one to
      eight people, have four tires, and mainly transport people rather than
      goods.
    </div>
  </simba-collapsible>
`;
```

## Opened

Use the `opened` property or reflected attribute to open or close declaratively or imperatively with JavaScript.

```js preview-story
import { ref, createRef } from 'lit/directives/ref.js';
const contentRef = createRef();

export const opened = () => html`
  <simba-button
    style="margin-bottom: 15px;"
    @click=${() => contentRef.value.toggle()}
    >Toggle</simba-button
  >
  <simba-collapsible ${ref(contentRef)} opened>
    <simba-collapsible-button variation="outline" slot="invoker"
      >More about cars</simba-collapsible-button
    >
    <div slot="content">
      Most definitions of cars say that they run primarily on roads, seat one to
      eight people, have four tires, and mainly transport people rather than
      goods.
    </div>
  </simba-collapsible>
`;
```

## Changing the invoker

We suggest using the outline button as the collapsible button variant, but you are free to use the other button variants.
See Button docs for more information.

It must use `simba-collapsible-button` in order for the + - sign toggle to work and be design compliant.

```js preview-story
export const btnVariation = () => html`
  <simba-collapsible opened>
    <simba-collapsible-button variation="primary" slot="invoker"
      >More about cars</simba-collapsible-button
    >
    <div slot="content">
      Most definitions of cars say that they run primarily on roads, seat one to
      eight people, have four tires, and mainly transport people rather than
      goods.
    </div>
  </simba-collapsible>
`;
```

## Focusable content

If you have focusable content in your collapsible content,
a focus state will be shown on the content node when the user tabs into the focusable content inside.

```js preview-story
export const focusable = () => html`
  <simba-collapsible opened>
    <simba-collapsible-button variation="outline" slot="invoker"
      >More about cars</simba-collapsible-button
    >
    <div slot="content">
      Most definitions of cars say that they run primarily on roads, seat one to
      eight
      <a
        href="https://en.wikipedia.org/wiki/People"
        target="_blank"
        noopener
        noreferrer
        >people</a
      >, have four tires, and mainly transport people rather than goods.
    </div>
  </simba-collapsible>
`;
```
