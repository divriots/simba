import { html } from '@lion/core';
import { LionCheckboxIndeterminate } from '@lion/checkbox-group';
import { inputStyles, choiceBoxStyles } from '~/form-system';
import styles from './styles.css.js';
import indeterminateStyles from './indeterminate-styles.css.js';

export class SimbaCheckboxIndeterminate extends LionCheckboxIndeterminate {
  static get styles() {
    return [
      ...super.styles,
      inputStyles,
      choiceBoxStyles,
      styles,
      indeterminateStyles,
    ];
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
      ${this._afterTemplate()}
    `;
  }
}
