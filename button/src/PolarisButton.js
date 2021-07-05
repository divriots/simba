import { LionButton } from '@lion/button';
import styles from './styles.css.js';

export class PolarisButton extends LionButton {
  static get styles() {
    return [...super.styles, styles];
  }
}
