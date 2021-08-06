import { LionInputIban } from '@lion/input-iban';
import { InputMixin } from '~/form-core';

export class SimbaInputIban extends InputMixin(LionInputIban) {
  static get localizeNamespaces() {
    return [
      {
        'simba-input-iban': /** @param {string} locale */ (locale) => {
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
}
