import { html } from '@lion/core';
import { LionValidationFeedback } from '@lion/form-core';
import { defaultTheme } from '~/themes';
import styles from './styles.css.js';

import '~/icons/simba-icon.js';

export class SimbaValidationFeedback extends LionValidationFeedback {
  static get properties() {
    return {};
  }

  static get styles() {
    return [defaultTheme(), styles];
  }

  _messageTemplate({ message, type }) {
    return html`
      <simba-icon class="${type}" icon-id="simba:alerts:${type}"></simba-icon>
      <span class="${type}">${message}</span>
    `;
  }
}
