import { ScopedElementsMixin } from '~/core';
import { LionSelectInvoker } from '@lion/select-rich';
import { SimbaIcon } from '~/icons';
import { ThemeMixin } from 'dark-theme-utils';
import { invokerStyles } from './styles.css.js';
import '~/icons/simba-icon.js';

export class SimbaSelectInvoker extends ScopedElementsMixin(
  ThemeMixin(LionSelectInvoker)
) {
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
