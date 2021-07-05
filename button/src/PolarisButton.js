import { LionButton } from '@lion/button';
import {
  defaultStyles,
  outlineStyles,
  plainStyles,
  primaryStyles,
  destructiveStyles,
  sizeStyles,
  fullWidthStyles,
  textAlignStyles,
  disabledStyles,
} from './styles.css.js';

export class PolarisButton extends LionButton {
  static get properties() {
    return {
      outline: {
        type: Boolean,
        reflect: true,
      },
      plain: {
        type: Boolean,
        reflect: true,
      },
      primary: {
        type: Boolean,
        reflect: true,
      },
      destructive: {
        type: Boolean,
        reflect: true,
      },
      size: {
        type: String,
        reflect: true,
      },
      fullWidth: {
        type: Boolean,
        reflect: true,
        attribute: 'full-width',
      },
      textAlign: {
        type: String,
        reflect: true,
        attribute: 'text-align',
      },
      disabled: {
        type: Boolean,
        reflect: true,
      },
    };
  }

  static get styles() {
    return [
      ...super.styles,
      defaultStyles,
      outlineStyles,
      plainStyles,
      primaryStyles,
      destructiveStyles,
      sizeStyles,
      fullWidthStyles,
      textAlignStyles,
      disabledStyles,
    ];
  }
}
