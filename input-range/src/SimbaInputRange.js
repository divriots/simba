import { html } from '~/core';
import { LionInputRange } from '@lion/input-range';
import { formatNumber } from '@lion/localize';
import { InputMixin } from '~/form-core';
import styles, { inputRangeStyles } from './styles.css.js';

export class SimbaInputRange extends InputMixin(LionInputRange) {
  static get localizeNamespaces() {
    return [
      {
        'simba-input-range': /** @param {string} locale */ (locale) => {
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

  static rangeStyles(scope) {
    return inputRangeStyles(scope);
  }

  constructor() {
    super();
    this.min = 0;
    this.max = 100;
    this.__boundSetBarBackground = this.__setBarBackground.bind(this);
    this.addEventListener('input', this.__boundSetBarBackground);
  }

  connectedCallback() {
    super.connectedCallback();
    if (!(typeof this.modelValue === 'number' && isFinite(this.modelValue))) {
      this.modelValue = Math.round((this.max - this.min) / 2);
    }
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.__setBarBackground();
    this._inputNode.addEventListener('focus', this.__boundSetBarBackground);
    this._inputNode.addEventListener('blur', this.__boundSetBarBackground);
    this._inputNode.addEventListener(
      'mouseenter',
      this.__boundSetBarBackground
    );
    this._inputNode.addEventListener(
      'mouseleave',
      this.__boundSetBarBackground
    );
  }

  _groupOneTemplate() {
    return html`
      <div class="form-field__group-one-container">
        <div>${this._labelTemplate()} ${this._helpTextTemplate()}</div>
        <div class="input-range__value-container">
          <span class="input-range__value"
            >${formatNumber(
              parseFloat(/** @type {string} */ (this.formattedValue))
            )}</span
          >
          <span class="input-range__unit">${this.unit}</span>
        </div>
      </div>
    `;
  }

  _inputGroupTemplate() {
    return html`
      <div class="input-group">
        ${this._inputGroupBeforeTemplate()}
        <div class="input-group__container">
          ${this._inputGroupPrefixTemplate()} ${this._inputGroupInputTemplate()}
          ${this._inputGroupSuffixTemplate()}
        </div>
        ${this._inputGroupAfterTemplate()}
      </div>
    `;
  }

  _inputGroupTemplate() {
    return html`
      <div class="input-group">
        ${this._inputGroupBeforeTemplate()}
        <div class="input-group__container">
          ${this._inputGroupPrefixTemplate()} ${this._inputGroupInputTemplate()}
          ${this._inputGroupSuffixTemplate()}
        </div>
        ${this._inputGroupAfterTemplate()}
      </div>
    `;
  }

  __setBarBackground() {
    const sliderPercentage =
      ((this.modelValue - this.min) / (this.max - this.min)) * 100;
    let mainColor;
    let secondaryColor = 'primary-200';
    if (document.activeElement === this._inputNode) {
      mainColor = 'primary-700';
    } else if (this.disabled) {
      mainColor = 'primary-300';
      secondaryColor = 'primary-100';
    } else if (this._inputNode.matches('input:hover')) {
      mainColor = 'primary-600';
    } else {
      mainColor = 'primary-500';
    }

    this._inputNode.style.background = `
      linear-gradient(
        to right, var(--simba-color-${mainColor}) 0%, var(--simba-color-${mainColor}) ${sliderPercentage}%,
        var(--simba-color-${secondaryColor}) ${sliderPercentage}%, var(--simba-color-${secondaryColor}) 100%
      )
    `;
  }
}
