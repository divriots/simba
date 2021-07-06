import { LitElement, html, css } from '@lion/core';
import { coolGray } from '~/colors';

class TokenDisplay extends LitElement {
  static get styles() {
    return css`
      :host {
        padding: 20px;
      }

      .row {
        display: flex;
        flex-wrap: wrap;
        gap: 2em;
      }

      .item p {
        margin: 4px;
      }

      .item__css-text {
        color: ${coolGray[400]};
      }

      .color-cell {
        width: 50px;
        height: 25px;
        border-radius: 4px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
      }
    `;
  }

  static get properties() {
    return {
      cssKey: { attribute: false },
      tokens: { attribute: false },
    };
  }

  constructor() {
    super();
    this.cssKey = 'color';
    this.tokens = {};
  }

  colorTemplate(cssLiteral) {
    return html`
      <div
        class="color-cell"
        style="background-color: ${cssLiteral.cssText};"
      ></div>
    `;
  }

  cssTemplate(cssLiteral) {
    switch (this.cssKey) {
      case 'color':
        return this.colorTemplate(cssLiteral);
      /* no default */
    }
  }

  render() {
    return html`
      <div class="row">
        ${Object.entries(this.tokens).map(
          (entry) => html`
            <div class="item">
              ${this.cssTemplate(entry[1])}
              <p class="item__key">${entry[0]}</p>
              <p class="item__css-text">${entry[1].cssText}</p>
            </div>
          `
        )}
      </div>
    `;
  }
}
customElements.define('token-display', TokenDisplay);
