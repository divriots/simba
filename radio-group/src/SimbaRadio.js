import { html } from '@lion/core';
import { LionRadio } from '@lion/radio-group';
import { inputStyles } from '~/form-system';
import styles from './styles.css.js';

export class SimbaRadio extends LionRadio {
  static get styles() {
    return [...super.styles, inputStyles, styles];
  }

  render() {
    return html`
      <slot name="input"></slot>
      <div class="choice-field__label">
        <slot name="label"></slot>
      </div>
    `;
  }
}
