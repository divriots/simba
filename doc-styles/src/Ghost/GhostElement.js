import { LitElement, html, css } from '~/core';

class GhostElement extends LitElement {
  static get styles() {
    return css`
      :host {
        position: absolute;
        --scale-x: 1;
        z-index: 999999;
      }

      img {
        width: 80px;
        transform: scaleX(var(--scale-x));
      }
    `;
  }

  static get properties() {
    return {
      hide: {
        type: Boolean,
        reflect: true,
      },
      xDirection: {
        type: String,
        reflect: true,
        attribute: 'x-direction',
      },
    };
  }

  updated(changedProperties) {
    if (changedProperties.has('xDirection')) {
      this.style.setProperty('--scale-x', this.xDirection === 'right' ? -1 : 1);
    }
  }

  render() {
    return html`
      <img
        src="https://jorenbroekema.nl/mario-ghost${this.hide
          ? '-hide'
          : ''}.png"
      />
    `;
  }
}
customElements.define('ghost-element', GhostElement);
