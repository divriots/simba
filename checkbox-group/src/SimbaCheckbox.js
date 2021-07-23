import { html } from '@lion/core';
import { LionCheckbox } from '@lion/checkbox-group';
import { inputStyles, choiceBoxStyles } from '~/form-system';
import styles from './styles.css.js';

export class SimbaCheckbox extends LionCheckbox {
  static get styles() {
    return [...super.styles, inputStyles, choiceBoxStyles, styles];
  }

  render() {
    return html`
      <slot name="input"></slot>
      <div class="choice-field__graphic-container">
        ${this._choiceGraphicTemplate()}
      </div>
      <div class="choice-field__label">
        <slot name="label"></slot>
      </div>
    `;
  }
}
