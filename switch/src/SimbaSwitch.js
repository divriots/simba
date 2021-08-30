import { LionSwitch } from '@lion/switch';
import { ScopedElementsMixin } from '~/core';
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
        // @ts-ignore we load a polyfill to support createElement on shadowRoot
        const btnEl = this.shadowRoot.createElement('simba-switch-button');
        btnEl.setAttribute('data-tag-name', 'simba-switch-button');
        return btnEl;
      },
    };
  }
}
