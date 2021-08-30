import { html } from '~/core';
import { LionCheckbox } from '@lion/checkbox-group';
import { inputStyles, choiceBoxStyles } from '~/form-core';
import { ThemeMixin } from 'dark-theme-utils';
import styles from './styles.css.js';

export class SimbaCheckbox extends ThemeMixin(LionCheckbox) {
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
