import { html } from '@lion/core';
import '../polaris-button.js';

export default {
  parameters: {
    layout: 'centered',
  },
};

export const button = () => html`<polaris-button>Test</polaris-button>`;
