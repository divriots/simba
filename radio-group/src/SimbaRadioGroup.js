import { LionRadioGroup } from '@lion/radio-group';
import { inputStyles } from '~/form-system';

export class SimbaRadioGroup extends LionRadioGroup {
  static get styles() {
    return [...super.styles, inputStyles];
  }
}
