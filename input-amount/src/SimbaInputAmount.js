import { LionInputAmount } from '@lion/input-amount';
import { formatNumber } from '@lion/localize';
import { InputMixin } from '~/form-core';
import styles from './styles.css.js';

export class SimbaInputAmount extends InputMixin(LionInputAmount) {
  static get localizeNamespaces() {
    return [
      {
        'simba-input-amount': /** @param {string} locale */ (locale) => {
          switch (locale) {
            case 'nl-BE':
            case 'nl-NL':
              return import('./nl.js');
            default:
              return import('./en.js');
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
    this.placeholder = formatNumber(0, { minimumFractionDigits: 2 });
  }

  onLocaleUpdated() {
    super.onLocaleUpdated();
    this.placeholder = formatNumber(0, { minimumFractionDigits: 2 });
  }
}
