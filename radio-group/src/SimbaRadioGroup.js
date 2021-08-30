import { LionRadioGroup } from '@lion/radio-group';
import { inputStyles } from '~/form-core';
import { ThemeMixin } from 'dark-theme-utils';

export class SimbaRadioGroup extends ThemeMixin(LionRadioGroup) {
  static get styles() {
    return [...super.styles, inputStyles];
  }
}
