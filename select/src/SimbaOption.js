import { LionOption } from '@lion/listbox';
import { ThemeMixin } from '~/themes';
import { optionStyles } from './styles.css.js';

export class SimbaOption extends ThemeMixin(LionOption) {
  static get styles() {
    return [...super.styles, optionStyles];
  }
}
