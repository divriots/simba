# Dialog

Dialog webcomponent. This component is often used in conjunction with `simba-dialog-frame`.

The frame acts as a visual container and allows adding an easy to use close button, header, content and footer slottable.

> To close the overlay through a button inside the overlay content node,
> make sure to dispatch a `close-overlay` event that bubbles, so the event can reach the dialog frame.
> There, it will be listened to by the dialog component itself, triggering the close.

```js script
import { html } from '~/core';
import '@divriots/simba/button/define';
import '@divriots/simba/dialog/define';
import { emerald100, emerald500, coolGray500 } from '~/colors';
import { s1_5 } from '~/spacing';
import { full } from '~/radii';
import { sizeXlSize, sizeXlLineHeight, weightSemibold } from '~/typography';
```

## Usage

Import the custom element definition file.

```js
import '@divriots/simba/dialog/define';
```

Or if you only need a specific element instead of all (dialog, dialog-frame):

```js
import '@divriots/simba/collapsible/define-dialog-frame';
```

```js preview-story
export const dialogFrame = () => html`
  <simba-dialog>
    <simba-button slot="invoker">Open</simba-button>
    <simba-dialog-frame has-close-button slot="content">
      <div slot="header">Dialog Frame Title</div>
      <div slot="content">Hello, World!</div>
      <div slot="footer" style="display: flex; justify-content: flex-end">
        <simba-button
          @click=${(ev) => {
            ev.target.dispatchEvent(
              new Event('close-overlay', { bubbles: true })
            );
          }}
          >Close</simba-button
        >
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
      <div slot="content">Hello, World!</div>
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
        <simba-button
          style="float: right"
          @click=${(ev) => {
            ev.target.dispatchEvent(
              new Event('close-overlay', { bubbles: true })
            );
          }}
          >Close</simba-button
        >
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
        <div
          style="
          box-sizing: content-box;
          font-size: 1.5rem; color: ${emerald500}; 
          padding: ${s1_5};
          width: 30px;
          height: 30px;
          margin: 20px auto;
          background-color: ${emerald100};
          border-radius: ${full};
        "
        >
          ✓
        </div>
        <h3
          style="font-size: ${sizeXlSize}; line-height: ${sizeXlLineHeight}; font-weight: ${weightSemibold};"
        >
          Payment successful!
        </h3>
        <p style="margin-bottom: 35px; color: ${coolGray500};">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius aliquam
          laudantium explicabo pariatur iste doorem animi vitae error totam. At
          sapiente aliquam accusamus facere veritatis.
        </p>
      </div>
      <div
        slot="footer"
        style="display: flex; gap: 3rem; justify-content: space-between"
      >
        <simba-button
          style="width: 100%"
          variation="outline"
          @click=${(ev) => {
            ev.target.dispatchEvent(
              new Event('close-overlay', { bubbles: true })
            );
          }}
          >Cancel</simba-button
        >
        <simba-button
          style="width: 100%"
          @click=${(ev) => {
            ev.target.dispatchEvent(
              new Event('close-overlay', { bubbles: true })
            );
          }}
          >Deactivate</simba-button
        >
      </div>
    </simba-dialog-frame>
  </simba-dialog>
`;
```
