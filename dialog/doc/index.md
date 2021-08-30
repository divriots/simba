# Dialog

Dialog webcomponent. This component is often used in conjunction with `simba-dialog-frame`.

The frame acts as a visual container and allows adding an easy to use close button, header, content and footer slottable.

> To close the overlay through a button inside the overlay content node,
> make sure to dispatch a `close-overlay` event that bubbles, so the event can reach the dialog frame.
> There, it will be listened to by the dialog component itself, triggering the close.

```js script
import { html } from '~/core';
import '~/button/simba-button.js';
import '~/doc-styles';
import '../simba-dialog.js';
import '../simba-dialog-frame.js';
import { emerald, coolGray } from '~/colors';
import { spacing } from '~/spacing';
import { borderRadiusMixin } from '~/borders';
import { typographyMixin } from '~/typography';
```

```js preview-story
export const dialogFrame = () => html`
  <simba-dialog>
    <simba-button slot="invoker">Open</simba-button>
    <simba-dialog-frame has-close-button slot="content">
      <div slot="header">
        Dialog Frame Title
      </div>
      <div slot="content">
        Hello, World!
      </div>
      <div slot="footer" style="display: flex; justify-content: flex-end">
        <simba-button @click=${(ev) => {
          ev.target.dispatchEvent(new Event('close-overlay', { bubbles: true }));
        }}>Close</simba-button>
      </div>
    </simba-dialog-frame>
  </simba-dialog>
`;
```

## Simple

This shows the dialog with just a content slot in the frame and the default close button.

```js preview-story
export const simple = () => html`
  <simba-dialog>
    <simba-button slot="invoker">Open</simba-button>
    <simba-dialog-frame has-close-button slot="content">
      <div slot="content">
        Hello, World!
      </div>
    </simba-dialog-frame>
  </simba-dialog>
`;
```

## No padding

This shows the dialog frame without the default padding, in case you need to space the content yourself.

```js preview-story
export const noPadding = () => html`
  <simba-dialog>
    <simba-button slot="invoker">Open</simba-button>
    <simba-dialog-frame no-padding slot="content">
      <div slot="content">
        Hello, World!
        <simba-button style="float: right" @click=${(ev) => {
          ev.target.dispatchEvent(new Event('close-overlay', { bubbles: true }));
        }}>Close</simba-button>
      </div>
    </simba-dialog-frame>
  </simba-dialog>
`;
```

## No header

There are examples of dialogs which do not require a title or header element.

For example a payment confirmation with two call to action buttons.

```js preview-story
export const noHeader = () => html`
  <simba-dialog>
    <simba-button slot="invoker">Open</simba-button>
    <simba-dialog-frame slot="content" style="text-align: center;">
      <div slot="content">
        <div style="
          font-size: 1.5rem; color: ${emerald[500]}; 
          padding: ${spacing['1.5']};
          width: 30px;
          height: 30px;
          margin: 20px auto;
          background-color: ${emerald[100]};
          ${borderRadiusMixin('full')}
        ">✓</div>
        <h3 style="${typographyMixin('sans', 'xl', 'semibold')}">Payment successful!</h3>
        <p style="margin-bottom: 35px; color: ${coolGray[500]}; ${typographyMixin('sans', 'base')}">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius aliquam laudantium explicabo pariatur iste doorem animi vitae error totam. At sapiente aliquam accusamus facere veritatis.</p>
      </div>
      <div slot="footer" style="display: flex; gap: 3rem; justify-content: space-between">
        <simba-button style="width: 100%" variation="outline" @click=${(ev) => {
          ev.target.dispatchEvent(new Event('close-overlay', { bubbles: true }));
        }}>Cancel</simba-button>
        <simba-button style="width: 100%" @click=${(ev) => {
          ev.target.dispatchEvent(new Event('close-overlay', { bubbles: true }));
        }}>Deactivate</simba-button>
      </div>
    </simba-dialog-frame>
  </simba-dialog>
`;
```
