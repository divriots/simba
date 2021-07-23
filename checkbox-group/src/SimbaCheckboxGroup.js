import { LionCheckboxGroup } from '@lion/checkbox-group';
import { inputStyles } from '~/form-system';

export class SimbaCheckboxGroup extends LionCheckboxGroup {
  static get styles() {
    return [...super.styles, inputStyles];
  }
}
