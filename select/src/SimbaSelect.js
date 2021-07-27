import { html, ScopedElementsMixin } from '@lion/core';
import { LionSelect } from '@lion/select';
import { InputMixin } from '~/form-system';
import { SimbaIcon } from '~/icons';
import styles from './styles.css.js';

export class SimbaSelect extends ScopedElementsMixin(InputMixin(LionSelect)) {
  static get scopedElements() {
    return {
      'simba-icon': SimbaIcon,
    };
  }

  static get localizeNamespaces() {
    return [
      {
        'simba-select': /** @param {string} locale */ (locale) => {
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

  _inputGroupInputTemplate() {
    return html`
      <div class="input-group__input">
        <slot name="input"></slot>
        <simba-icon
          class="input-group__arrow"
          icon-id="simba:arrows:arrowDown"
        ></simba-icon>
      </div>
    `;
  }
}
