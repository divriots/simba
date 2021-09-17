import { LitElement, html, css, unsafeCSS } from '~/core';
import { spacing } from '~/spacing';
import { theme, setTheme } from '~/themes';
import * as colors from '~/colors';

export class ColorToggler extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: flex;
          max-width: 125px;
          flex-wrap: wrap;
          margin: 0 10px;
        }

        .radio {
          -webkit-appearance: none;
          -moz-appearance: none;
          width: ${spacing['5']};
          height: ${spacing['5']};
          outline: none;
          display: inline-block;
          vertical-align: top;
          position: relative;
          margin: 4px;
          cursor: pointer;
          border: 1px solid ${colors.coolGray[600]};
          border-radius: 100%;
          transition: border-color 0.2s ease-in-out;
        }

        .radio:checked {
          background-color: white;
          border-width: 5px;
        }

        .radio:focus {
          box-shadow: 0 0 1px 1px var(--simba-focus-ring-color);
        }

        .radio:hover {
          border-color: ${colors.coolGray[400]};
        }

        ${Object.entries(colors)
          .map(
            (col) => css`
              .${unsafeCSS(col[0])} {
                background-color: ${col[1][500]};
              }

              .${unsafeCSS(col[0])}:checked {
                border-color: ${col[1][500]};
              }
            `
          )
          .reduce(
            (acc, curr) =>
              css`
                ${acc} ${curr}
              `
          )}
      `,
    ];
  }

  constructor() {
    super();
    let colorTheme = localStorage.getItem('simba-color');
    if (!colorTheme || colorTheme === 'null') {
      setTheme('indigo');
    } else {
      setTheme(colorTheme);
    }
  }

  render() {
    return html`
      ${Object.entries(colors).map(
        (col) =>
          html`<input
            @click=${this.switchTheme}
            type="radio"
            aria-label=${col[0]}
            ?checked=${theme === col[0]}
            class="radio ${col[0]}"
            name="colors"
          />`
      )}
    `;
  }

  switchTheme(ev) {
    const newColor = ev.target.getAttribute('aria-label');
    setTheme(newColor);
  }
}
