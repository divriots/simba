import { LionTextarea } from '@lion/textarea';
import { InputMixin } from '~/form-core';

export class SimbaTextarea extends InputMixin(LionTextarea) {
  static get properties() {
    return {
      horizontalResize: {
        type: Boolean,
        reflect: true,
        attribute: 'horizontal-resize',
      },
    };
  }
  static get localizeNamespaces() {
    return [
      {
        'simba-textarea': /** @param {string} locale */ (locale) => {
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

  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has('horizontalResize')) {
      if (this.horizontalResize) {
        this._inputNode.style.resize = 'horizontal';
      } else {
        this._inputNode.style.resize = 'none';
      }
    }
  }
}
