import { html } from 'lit';
import { LionRadio } from '@lion/ui/radio-group.js';
import { inputStyles, choiceBoxStyles } from '~/form-core';
import { ThemeMixin } from 'dark-theme-utils';
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
