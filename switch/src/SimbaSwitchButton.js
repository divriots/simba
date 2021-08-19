import { LionSwitchButton } from '@lion/switch';
import { ThemeMixin } from '~/themes';
import styles from './button-styles.css.js';

export class SimbaSwitchButton extends ThemeMixin(LionSwitchButton) {
  static get styles() {
    return [...super.styles, styles];
  }

  // TODO: make protected in lion
  __handleKeyup(ev) {
    switch (ev.key) {
      case ' ':
      case 'Enter':
        this._toggleChecked();
        break;
      case 'ArrowRight':
      case 'ArrowUp':
        if (!this.checked) {
          this._toggleChecked();
        }
        break;
      case 'ArrowLeft':
      case 'ArrowDown':
        if (this.checked) {
          this._toggleChecked();
        }
        break;
      /* no default */
    }
  }
}
