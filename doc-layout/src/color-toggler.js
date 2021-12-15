import { LitElement, html, css, unsafeCSS } from '~/core';
import { theme, setTheme, defaultThemes } from '~/themes';
import { s5 } from '~/spacing';
import * as colors from '~/colors';

// Get unique color values, "red", "purple", without the lightness suffixes (50, 100)
const colorKeys = [
  ...new Set(
    Object.entries(colors).map(([clr, val]) => clr.replace(/\d/g, ''))
  ),
];

export class ColorToggler extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: flex;
          max-width: calc(1.25rem * 4 + 4px * 2 * 4);
          flex-wrap: wrap;
        }

        .radio {
          -webkit-appearance: none;
          -moz-appearance: none;
          width: ${s5};
          height: ${s5};
          outline: none;
          display: inline-block;
          vertical-align: top;
          position: relative;
          margin: 4px;
          cursor: pointer;
          border: 1px solid ${colors.coolGray600};
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
          border-color: ${colors.coolGray400};
        }

        ${colorKeys
          .map(
            (col) => css`
              .${unsafeCSS(col)} {
                background-color: ${colors[`${col}500`]};
              }

              .${unsafeCSS(col)}:checked {
                border-color: ${colors[`${col}500`]};
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
    // if the theme from local storage is a custom theme, don't do anything
    let colorTheme = localStorage.getItem('simba-color');
    if (!colorTheme) {
      setTheme('indigo');
    } else if (defaultThemes.includes(colorTheme)) {
      setTheme(colorTheme);
    } else {
      console.warn(
        `${colorTheme} is not a default color, this Toggler component doesn't know how to set custom themes`
      );
    }
  }

  render() {
    return html`
      ${colorKeys.map(
        (col) =>
          html`<input
            @click=${this.switchTheme}
            type="radio"
            aria-label=${col}
            ?checked=${theme === col}
            class="radio ${col}"
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

customElements.define('color-toggler', ColorToggler);
