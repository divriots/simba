import { LionOption } from '@lion/listbox';
import { optionStyles } from './styles.css.js';

export class SimbaOption extends LionOption {
  static get styles() {
    return [...super.styles, optionStyles];
  }
}
