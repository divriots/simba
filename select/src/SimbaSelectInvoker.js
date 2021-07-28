import { ScopedElementsMixin } from '@lion/core';
import { LionSelectInvoker } from '@lion/select-rich';
import { SimbaIcon } from '~/icons';
import { invokerStyles } from './styles.css.js';
import '~/icons/simba-icon.js';

export class SimbaSelectInvoker extends ScopedElementsMixin(LionSelectInvoker) {
  static get scopedElements() {
    return {
      'simba-icon': SimbaIcon,
    };
  }

  static get styles() {
    return [...super.styles, invokerStyles];
  }

  get slots() {
    return {
      ...super.slots,
      after: () => {
        const icon = document.createElement('simba-icon');
        icon.setAttribute('icon-id', 'simba:arrows:arrowDown');
        return icon;
      },
    };
  }
}
