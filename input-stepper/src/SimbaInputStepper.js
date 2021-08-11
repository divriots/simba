import { html } from '~/core';
import { LionInputStepper } from '@lion/input-stepper';
import { InputMixin } from '~/form-core';
import styles from './styles.css.js';
import '~/button/simba-button.js';

export class SimbaInputStepper extends InputMixin(LionInputStepper) {
  static get localizeNamespaces() {
    return [
      {
        'simba-input-stepper': /** @param {string} locale */ (locale) => {
          switch (locale) {
            case 'nl-BE':
            case 'nl-NL':
              return import('~/input-amount/src/nl.js');
            default:
              return import('~/input-amount/src/en.js');
          }
        },
      },
      ...super.localizeNamespaces,
    ];
  }

  static get styles() {
    return [...super.styles, styles];
  }

  _decrementorTemplate() {
    return html`
      <simba-button
        ?disabled=${this.disabled || this.readOnly}
        @click=${this.__decrement}
        tabindex="-1"
        variation="outline"
        aria-label="decrement"
      >
        ${this._decrementorSignTemplate()}
      </simba-button>
    `;
  }

  _incrementorTemplate() {
    return html`
      <simba-button
        ?disabled=${this.disabled || this.readOnly}
        @click=${this.__increment}
        tabindex="-1"
        variation="outline"
        aria-label="increment"
      >
        ${this._incrementorSignTemplate()}
      </simba-button>
    `;
  }
}
