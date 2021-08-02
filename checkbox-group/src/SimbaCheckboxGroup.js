import { LionCheckboxGroup } from '@lion/checkbox-group';
import { ThemeMixin } from '~/themes';
import { inputStyles } from '~/form-system';

export class SimbaCheckboxGroup extends ThemeMixin(LionCheckboxGroup) {
  static get styles() {
    return [...super.styles, inputStyles];
  }
}
