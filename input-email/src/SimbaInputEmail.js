import { LionInputEmail } from '@lion/input-email';
import { InputMixin } from '~/form-core';

export class SimbaInputEmail extends InputMixin(LionInputEmail) {
  static get localizeNamespaces() {
    return [
      {
        'simba-input-email': /** @param {string} locale */ (locale) => {
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
