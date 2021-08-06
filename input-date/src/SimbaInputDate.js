import { LionInputDate } from '@lion/input-date';
import { InputMixin } from '~/form-core';
import styles from './styles.css.js';

export class SimbaInputDate extends InputMixin(LionInputDate) {
  static get localizeNamespaces() {
    return [
      {
        'simba-input-date': /** @param {string} locale */ (locale) => {
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
}
