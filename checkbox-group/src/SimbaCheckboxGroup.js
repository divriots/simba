import { LionCheckboxGroup } from '@lion/checkbox-group';
import { ThemeMixin } from 'dark-theme-utils';
import { inputStyles } from '~/form-core';

export class SimbaCheckboxGroup extends ThemeMixin(LionCheckboxGroup) {
  static get styles() {
    return [...super.styles, inputStyles];
  }
}
