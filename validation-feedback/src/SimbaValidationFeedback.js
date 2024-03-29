import { html } from 'lit';
import { LionValidationFeedback } from '~/form-core';
import { ThemeMixin } from 'dark-theme-utils';
import styles from './styles.css.js';

import '~/icons/define';

export class SimbaValidationFeedback extends ThemeMixin(
  LionValidationFeedback
) {
  static get styles() {
    return [...[super.styles ?? []], styles];
  }

  _messageTemplate({ message, type }) {
    return html`
      <div class="feedback-container">
        <simba-icon
          class="icon ${type}"
          icon-id="simba:alerts:${type}"
        ></simba-icon>
        <span class="text ${type}">${message}</span>
      </div>
    `;
  }
}
