import { dedupeMixin } from '@open-wc/dedupe-mixin';
import { html } from 'lit';
import { ThemeMixin } from 'dark-theme-utils';
import styles from './styles.css.js';

export const SimbaButtonMixinImplementation = (superclass) =>
  class extends ThemeMixin(superclass) {
    static get properties() {
      return {
        variation: {
          // primary, secondary, outline, text
          type: String,
          reflect: true,
        },
        rounded: {
          type: Boolean,
          reflect: true,
        },
        size: {
          type: String, // 'small', '', 'large'
          reflect: true,
        },
      };
    }

    static get styles() {
      return [...super.styles, styles];
    }

    render() {
      return html`
        <div class="button-content" id="${this._buttonId}">
          <slot name="prefix"></slot>
          <slot></slot>
          <slot name="suffix"></slot>
        </div>
      `;
    }
  };

export const SimbaButtonMixin = dedupeMixin(SimbaButtonMixinImplementation);
