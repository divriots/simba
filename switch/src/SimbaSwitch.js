import { LionSwitch } from '@lion/ui/switch.js';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { InputMixin } from '~/form-core';
import { SimbaSwitchButton } from './SimbaSwitchButton.js';
import styles from './styles.css.js';

export class SimbaSwitch extends InputMixin(ScopedElementsMixin(LionSwitch)) {
  static get styles() {
    return [...super.styles, styles];
  }
  static get scopedElements() {
    return {
      'simba-switch-button': SimbaSwitchButton,
    };
  }
  get slots() {
    return {
      ...super.slots,
      input: () => {
        const btnEl = this.createScopedElement('simba-switch-button');
        btnEl.setAttribute('data-tag-name', 'simba-switch-button');
        return btnEl;
      },
    };
  }
}
