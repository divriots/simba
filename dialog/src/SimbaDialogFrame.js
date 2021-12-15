import { LitElement, html, css } from '~/core';
import { coolGray100, coolGray300 } from '~/colors';
import { s0_5, s3, s4, s5 } from '~/spacing';
import { md } from '~/radii';
import {
  weightSemibold,
  sizeLgSize,
  sizeLgLineHeight,
  familyMono,
} from '~/typography';
import { ThemeMixin } from 'dark-theme-utils';

export class SimbaDialogFrame extends ThemeMixin(LitElement) {
  static get styles() {
    return css`
      :host {
        display: block;
        width: 600px;
        position: relative;
        box-shadow: 0 3px 5px 1px rgba(0, 0, 0, 0.4);
        background-color: ${coolGray100};
        border-radius: ${md};
      }

      .close-btn {
        position: absolute;
        top: ${s0_5};
        right: ${s0_5};
        margin: 0;
        font-family: ${familyMono};
        font-size: ${sizeLgSize};
        line-height: ${sizeLgLineHeight};
      }

      :host(:not([no-padding])) .content-container {
        padding: ${s4} ${s5};
      }

      ::slotted([slot='header']) {
        text-align: center !important;
        padding: ${s3} !important;
        border-bottom: 1px solid ${coolGray300} !important;
        font-weight: ${weightSemibold} !important;
        font-size: ${sizeLgSize} !important;
        line-height: ${sizeLgLineHeight} !important;
      }

      :host([theme='dark']) {
        background-color: var(--simba-bg-color-dark);
      }
    `;
  }

  static get properties() {
    return {
      hasCloseButton: {
        type: Boolean,
        reflect: true,
        attribute: 'has-close-button',
      },
      noPadding: {
        type: Boolean,
        reflect: true,
        attribute: 'no-padding',
      },
    };
  }

  render() {
    return html`
      ${this.hasCloseButton
        ? html`
            <simba-button
              variation="text"
              class="close-btn"
              @click=${() => {
                this.dispatchEvent(
                  new Event('close-overlay', { bubbles: true })
                );
              }}
            >
              ✖
            </simba-button>
          `
        : ''}
      <slot name="header"></slot>
      <div class="content-container">
        <slot name="content"></slot>
        <slot name="footer"></slot>
      </div>
    `;
  }
}
