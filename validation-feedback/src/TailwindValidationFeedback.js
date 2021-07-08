import { html } from '@lion/core';
import { LionValidationFeedback } from '@lion/form-core';
import { defaultTheme } from '~/themes';
import styles from './styles.css.js';

import '~/icons/tailwind-icon.js';

export class TailwindValidationFeedback extends LionValidationFeedback {
  static get properties() {
    return {};
  }

  static get styles() {
    return [defaultTheme(), styles];
  }

  _messageTemplate({ message, type }) {
    return html`
      <tailwind-icon
        class="${type}"
        icon-id="tailwind:alerts:${type}"
      ></tailwind-icon>
      <span class="${type}">${message}</span>
    `;
  }
}
