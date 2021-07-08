import { html } from '@lion/core';
import { LionButton } from '@lion/button';
import { defaultTheme } from '~/themes';
import styles from './styles.css.js';

export class SimbaButton extends LionButton {
  static get properties() {
    return {
      type: {
        // primary, secondary, tertiary
        type: String,
        reflect: true,
      },
      rounded: {
        type: Boolean,
        reflect: true,
      },
      size: {
        type: String, // 'small', '', 'large'
        reflect: true,
      },
    };
  }

  static get styles() {
    return [...super.styles, defaultTheme(), styles];
  }

  render() {
    return html`
      <div class="button-content" id="${this._buttonId}">
        <slot name="prefix"></slot>
        <slot></slot>
        <slot name="suffix"></slot>
      </div>
    `;
  }
}
