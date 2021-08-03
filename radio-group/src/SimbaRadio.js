import { html } from '@lion/core';
import { LionRadio } from '@lion/radio-group';
import { inputStyles, choiceBoxStyles } from '~/form-core';
import { ThemeMixin } from '~/themes';
import styles from './styles.css.js';

export class SimbaRadio extends ThemeMixin(LionRadio) {
  static get styles() {
    return [...super.styles, inputStyles, choiceBoxStyles, styles];
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
