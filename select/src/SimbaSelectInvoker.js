import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { LionSelectInvoker } from '@lion/ui/select-rich.js';
import { SimbaIcon } from '~/icons';
import { ThemeMixin } from 'dark-theme-utils';
import { invokerStyles } from './styles.css.js';
import '~/icons/define';

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
        const icon = this.createScopedElement('simba-icon');
        icon.setAttribute('icon-id', 'simba:arrows:arrowDown');
        return icon;
      },
    };
  }
}
