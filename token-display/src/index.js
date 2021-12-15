import { LitElement, html, css } from '~/core';
import { coolGray400, blue300, blue500 } from '~/colors';
import { sm, none, base } from '~/radii';
import { ThemeMixin } from 'dark-theme-utils';

class TokenDisplay extends ThemeMixin(LitElement) {
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

      :host([token-type='spacing']) .row {
        flex-direction: column;
        gap: 0.25em;
      }

      .item p {
        margin: 4px;
      }

      :host([token-type='spacing']) .item p {
        margin: 0;
      }

      :host([token-type='typography']) .item p {
        margin: 1em 0 0 0;
      }

      .item__css-text {
        color: ${coolGray400};
      }

      .cell {
        width: 50px;
        height: 25px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
        border-radius: ${sm};
        transition: var(--simba-theme-transition);
      }

      .cell--border {
        width: 100px;
        height: 100px;
        background-color: var(--simba-color-primary-700);
        box-shadow: none;
        border-radius: ${none};
      }

      :host([theme='dark']) .cell--border {
        background-color: var(--simba-color-primary-200);
      }

      .cell--typography {
        width: auto;
        height: auto;
        box-shadow: none;
        color: var(--simba-color-primary-700);
      }

      .cell--line-height {
        border: 1px solid ${blue500};
        border-radius: ${base};
      }

      :host([theme='dark']) .cell--typography {
        color: var(--simba-color-primary-200);
      }

      :host([theme='dark']) .cell--line-height {
        border-color: ${blue300};
      }

      .cell--spacing {
        height: 10px;
        background-color: var(--simba-color-primary-700);
        box-shadow: none;
        border-radius: ${none};
      }

      :host([theme='dark']) .cell--spacing {
        background-color: var(--simba-color-primary-200);
      }

      .horizontal-layout {
        display: flex;
        align-items: center;
      }
    `;
  }

  static get properties() {
    return {
      tokenType: {
        type: String,
        reflect: true,
        attribute: 'token-type',
      },
      tokens: { attribute: false },
      cssProp: { attribute: false },
    };
  }

  constructor() {
    super();
    this.tokenType = '';
    this.cssProp = '';
    this.tokens = {};
    this.cssKeyIncluded = false;
  }

  sortTokens() {
    switch (this.tokenType) {
      case 'spacing':
        return this.tokens.sort((a, b) => {
          const spaceMatchA = a[1].cssText.match(/([\d.]+)(.+)/);
          const spaceMatchB = b[1].cssText.match(/([\d.]+)(.+)/);
          const pixelsA =
            spaceMatchA[2] === 'rem'
              ? parseFloat(spaceMatchA[1]) * 16
              : parseFloat(spaceMatchA);
          const pixelsB =
            spaceMatchB[2] === 'rem'
              ? parseFloat(spaceMatchB[1]) * 16
              : parseFloat(spaceMatchB);

          return pixelsA - pixelsB;
        });
      case 'color':
        return this.tokens.sort((a, b) => {
          const lightnessAMatch = a[0].match(/(.+?)(\d+)/);
          const lightnessBMatch = b[0].match(/(.+?)(\d+)/);
          if (lightnessAMatch[1] !== lightnessBMatch[1]) {
            return a[0] - b[0];
          }
          return (
            parseInt(lightnessAMatch[2], 10) - parseInt(lightnessBMatch[2], 10)
          );
        });
      case 'typography':
        if (
          this.tokens[0][0].endsWith('Size') ||
          this.tokens[0][0].endsWith('LineHeight') ||
          this.tokens[0][0].startsWith('weight')
        ) {
          return this.tokens.sort((a, b) => {
            const aNumber = parseFloat(a[1].cssText.match(/[\d.]+/g)[0]);
            const bNumber = parseFloat(b[1].cssText.match(/[\d.]+/g)[0]);
            return aNumber - bNumber;
          });
        }
        return this.tokens;
    }
    return this.tokens;
  }

  colorTemplate(cssLiteral, opts) {
    return html`
      <div
        class="cell cell--simba-color"
        style="background-color: ${cssLiteral.cssText};"
      ></div>
      <p class="item__key">${opts.key}</p>
      <p class="item__css-text">${cssLiteral.cssText}</p>
    `;
  }

  radiiTemplate(cssLiteral, opts) {
    return html`
      <div
        class="cell cell--border"
        style="border-radius: ${cssLiteral.cssText}"
      ></div>
      <p class="item__key">${opts.param}</p>
      <pre class="item__css-text"><code>${cssLiteral.cssText}</code></pre>
    `;
  }

  typographyTemplate(cssLiteral, opts) {
    return html`
      <div
        class="cell cell--typography${this.cssProp === 'line-height'
          ? ' cell--line-height'
          : ''}"
        style="${this.cssProp}: ${cssLiteral.cssText}"
      >
        The quick brown fox jumped over the lazy dog.
      </div>
      <p class="item__key">${opts.key}</p>
      <pre class="item__css-text"><code>${this
        .cssProp}: ${cssLiteral.cssText}</code></pre>
    `;
  }

  spacingTemplate(cssLiteral, opts) {
    return html`
      <div class="horizontal-layout">
        <p class="item__key" style="width: 35px;">${opts.key}</p>
        <p class="item__css-text" style="width: 75px;">${cssLiteral.cssText}</p>
        <div
          class="cell cell--spacing"
          style="width: ${cssLiteral.cssText}"
        ></div>
      </div>
    `;
  }

  tokenTemplate(cssLiteral, opts) {
    switch (this.tokenType) {
      case 'color':
        return this.colorTemplate(cssLiteral, opts);
      case 'radii':
        return this.radiiTemplate(cssLiteral, opts);
      case 'typography':
        return this.typographyTemplate(cssLiteral, opts);
      case 'spacing':
        return this.spacingTemplate(cssLiteral, opts);
      /* no default */
    }
  }

  /**
   * Mixin Template is used when attribute css-mixin is applied
   * 4 Properties are required for the demo to render:
   * - mixin --> the CSS mixin we are going to use
   * - mixinParams --> an array of parameters that is passed to the mixin, excluding dynamic one
   * - mixinDynamicParamIndex --> which parameter we're dynamically showcasing
   * - mixinDynamicParams --> array of different variations of the dynamic paramater
   */
  cssMixinTemplate() {
    return html`
      ${this.mixinDynamicParams.map((param) => {
        const fullMixinParams = [...this.mixinParams];
        fullMixinParams.splice(this.mixinDynamicParamIndex, 0, param);
        const cssOutput = this.mixin.apply(null, fullMixinParams);
        return html`
          <div class="item">${this.tokenTemplate(cssOutput, { param })}</div>
        `;
      })}
    `;
  }

  render() {
    return html`
      <div class="row">
        ${this.cssMixin
          ? this.cssMixinTemplate()
          : this.sortTokens().map(
              (entry) => html`
                <div class="item">
                  ${this.tokenTemplate(entry[1], { key: entry[0] })}
                </div>
              `
            )}
      </div>
    `;
  }
}
customElements.define('token-display', TokenDisplay);
