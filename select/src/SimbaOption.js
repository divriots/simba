import { LionOption } from '@lion/ui/listbox.js';
import { ThemeMixin } from 'dark-theme-utils';
import { optionStyles } from './styles.css.js';

export class SimbaOption extends ThemeMixin(LionOption) {
  static get styles() {
    return [...super.styles, optionStyles];
  }
}
