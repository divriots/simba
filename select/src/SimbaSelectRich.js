import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { LionSelectRich } from '@lion/ui/select-rich.js';
import { InputMixin } from '~/form-core';
import { SimbaOptions } from './SimbaOptions.js';
import { SimbaSelectInvoker } from './SimbaSelectInvoker.js';
import { optionsStyles } from './styles.css.js';

export class SimbaSelectRich extends ScopedElementsMixin(
  InputMixin(LionSelectRich)
) {
  static get scopedElements() {
    return {
      ...super.scopedElements,
      'simba-options': SimbaOptions,
      'simba-select-invoker': SimbaSelectInvoker,
    };
  }

  get slots() {
    return {
      ...super.slots,
      input: () => {
        const simbaOptions = this.createScopedElement('simba-options');
        simbaOptions.setAttribute('data-tag-name', 'simba-options');
        simbaOptions.registrationTarget = this;
        return simbaOptions;
      },
      invoker: () => {
        const invokerEl = this.createScopedElement('simba-select-invoker');
        invokerEl.setAttribute('data-tag-name', 'simba-select-invoker');
        return invokerEl;
      },
    };
  }

  static get localizeNamespaces() {
    return [
      {
        'simba-select-rich': /** @param {string} locale */ (locale) => {
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
    return [...super.styles, optionsStyles];
  }

  constructor() {
    super();

    // Make arrow wider to include some "margin", used when calculating invoker width
    this._arrowWidth = 40;
  }
}
