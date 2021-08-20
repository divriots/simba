import { html, css } from '~/core';
import { SimbaButton } from '~/button';
import { typographyMixin } from '~/typography';
import { borderRadiusMixin } from '~/borders';

export class SimbaCollapsibleButton extends SimbaButton {
  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          width: 100%;
          ${borderRadiusMixin('none')};
        }

        .button-content {
          justify-content: space-between;
        }

        .suffix {
          ${typographyMixin('mono', '2xl', 'bold')};
        }
      `,
    ];
  }

  static get properties() {
    return {
      opened: {
        type: Boolean,
        reflect: true,
      },
    };
  }

  render() {
    return html`
      <div class="button-content" id="${this._buttonId}">
        <slot></slot>
        <span class="suffix">${this.opened ? '−' : '+'}</span>
      </div>
    `;
  }
}
