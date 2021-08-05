import { LitElement, html, css } from '@lion/core';
import { coolGray } from '~/colors';
import { spacing } from '~/spacing';
import '~/themes/simba-theme-toggler.js';
import '../color-toggler.js';

export class DocsMenu extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          position: fixed;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.6);
          top: 0;
          left: 0;
          padding: ${spacing['2.5']};
        }

        p {
          color: ${coolGray[50]};
          padding-right: ${spacing['2']};
        }
      `,
    ];
  }

  render() {
    return html`
      <p>Themes</p>
      <color-toggler></color-toggler>
      <simba-theme-toggler></simba-theme-toggler>
    `;
  }
}
