import { LitElement, html, css } from '~/core';
import { coolGray } from '~/colors';
import { spacing } from '~/spacing';
import 'dark-theme-utils/theme-toggler';
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
      <theme-toggler></theme-toggler>
    `;
  }
}
