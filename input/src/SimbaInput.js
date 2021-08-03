import { LionInput } from '@lion/input';
import { InputMixin } from '~/form-core';

export class SimbaInput extends InputMixin(LionInput) {
  static get localizeNamespaces() {
    return [
      {
        'simba-input': /** @param {string} locale */ (locale) => {
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
