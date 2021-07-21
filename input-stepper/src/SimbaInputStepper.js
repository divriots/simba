import { html } from '@lion/core';
import { LionInputStepper } from '@lion/input-stepper';
import { InputMixin } from '~/form-system';
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

  constructor() {
    super();
    this.__boundOnBlurButton = this._onBlurButton.bind(this);
  }

  _decrementorTemplate() {
    return html`
      <simba-button
        ?disabled=${this.disabled || this.readOnly}
        @click=${this.__decrement}
        @blur=${this.__boundOnBlurButton}
        tabindex="-1"
        type="tertiary"
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
        @blur=${this.__boundOnBlurButton}
        tabindex="-1"
        type="tertiary"
        aria-label="increment"
      >
        ${this._incrementorSignTemplate()}
      </simba-button>
    `;
  }

  // TODO: remove this hotfix when https://github.com/ing-bank/lion/pull/1467/ gets released
  _onBlurButton() {
    this.dispatchEvent(new Event(this._leaveEvent));
  }
}
