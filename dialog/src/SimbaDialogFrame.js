import { LitElement, html, css } from '~/core';
import { coolGray } from '~/colors';
import { spacing } from '~/spacing';
import { borderRadiusMixin } from '~/borders';
import { typographyMixin } from '~/typography';
import { ThemeMixin } from 'dark-theme-utils';

export class SimbaDialogFrame extends ThemeMixin(LitElement) {
  static get styles() {
    return css`
      :host {
        display: block;
        width: 600px;
        position: relative;
        box-shadow: 0 3px 5px 1px rgba(0, 0, 0, 0.4);
        background-color: ${coolGray[100]};
        ${borderRadiusMixin('md')};
      }

      .close-btn {
        position: absolute;
        top: ${spacing['0.5']};
        right: ${spacing['0.5']};
        margin: 0;
        ${typographyMixin('mono', 'lg', 'normal')}
      }

      :host(:not([no-padding])) .content-container {
        padding: ${spacing['4']} ${spacing['5']};
      }

      ::slotted([slot='header']) {
        text-align: center;
        padding: ${spacing['3']};
        border-bottom: 1px solid ${coolGray[300]};
        ${typographyMixin('sans', 'lg', 'semibold')}
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
