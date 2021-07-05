import { html } from 'lit';
import '../polaris-button.js';
import './stories.css';

export default {
  parameters: {
    layout: 'centered',
  },
};

export const button = () => html`<polaris-button>Test</polaris-button>`;

export const button_outline = () =>
  html`<polaris-button outline>Test</polaris-button>`;

export const button_plain = () =>
  html`<polaris-button plain>Test</polaris-button>`;

export const button_primary = () =>
  html`<polaris-button primary>Test</polaris-button>`;

export const button_destructive = () =>
  html`<polaris-button destructive>Test</polaris-button>`;

export const button_slim = () =>
  html`<polaris-button size="slim">Test</polaris-button>`;

export const button_large = () =>
  html`<polaris-button size="large">Test</polaris-button>`;

export const button_full_width = () =>
  html`<polaris-button full-width>Test</polaris-button>`;

export const button_text_align_left = () =>
  html`<polaris-button style="max-width: 400px;" plain text-align="left"
    >This is a really long string of text that overflows onto the next line we
    need to put in a lot of words now you can see the alignment. It is very long
    but a customer could potentially name something this long. Other options are
    'center' or 'right'</polaris-button
  >`;

export const button_disabled = () =>
  html`<div class="button-group">
    <polaris-button disabled>Default</polaris-button>
    <polaris-button outline disabled>Outline</polaris-button>
    <polaris-button primary disabled>Primary</polaris-button>
    <polaris-button destructive disabled>Destructive</polaris-button>
    <polaris-button plain disabled>Plain</polaris-button>
    <polaris-button plain destructive disabled
      >Plain Destructive</polaris-button
    >
  </div>`;
