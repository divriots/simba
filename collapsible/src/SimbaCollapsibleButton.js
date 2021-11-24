import { html, css } from '~/core';
import { SimbaButton } from '~/button';
import {
  familyMono,
  size2xlSize,
  size2xlLineHeight,
  weightBold,
} from '~/typography';
import { none } from '~/radii';

export class SimbaCollapsibleButton extends SimbaButton {
  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          width: 100%;
          border-radius: ${none};
        }

        .button-content {
          justify-content: space-between;
        }

        .suffix {
          font-family: ${familyMono};
          font-size: ${size2xlSize};
          line-height: ${size2xlLineHeight};
          font-weight: ${weightBold};
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
