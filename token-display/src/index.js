import { LitElement, html, css } from '~/core';
import { coolGray } from '~/colors';
import { borderRadiusMixin } from '~/borders';
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

      .item__css-text {
        color: ${coolGray[400]};
      }

      .cell {
        width: 50px;
        height: 25px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
        ${borderRadiusMixin('sm')};
        transition: var(--simba-theme-transition);
      }

      .cell--border {
        width: 100px;
        height: 50px;
        background-color: var(--simba-color-primary-700);
        box-shadow: none;
        ${borderRadiusMixin('none')};
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

      :host([theme='dark']) .cell--typography {
        color: var(--simba-color-primary-200);
      }

      .cell--spacing {
        height: 10px;
        background-color: var(--simba-color-primary-700);
        box-shadow: none;
        ${borderRadiusMixin('none')};
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
      cssKeyIncluded: {
        type: Boolean,
        reflect: true,
        attribute: 'css-key-included',
      },
      cssMixin: {
        type: Boolean,
        reflect: true,
        attribute: 'css-mixin',
      },
    };
  }

  constructor() {
    super();
    this.tokenType = '';
    this.tokens = {};
    this.cssKeyIncluded = false;
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

  borderTemplate(cssLiteral, opts) {
    return html`
      <div class="cell cell--border" style="${cssLiteral.cssText}"></div>
      <p class="item__key">${opts.param}</p>
      <pre class="item__css-text"><code>${cssLiteral.cssText}</code></pre>
    `;
  }

  typographyTemplate(cssLiteral, opts) {
    return html`
      <div class="cell cell--typography" style="${cssLiteral.cssText}">
        The quick brown fox jumped over the lazy dog.
      </div>
      <p class="item__key">${opts.param}</p>
      <pre class="item__css-text"><code>${cssLiteral.cssText}</code></pre>
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
      case 'border':
        return this.borderTemplate(cssLiteral, opts);
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
    let entries = Object.entries(this.tokens);
    if (this.tokenType === 'spacing') {
      entries = entries.sort((a, b) => {
        let _a = a[0] === 'px' ? '0.25' : a[0];
        let _b = b[0] === 'px' ? '0.25' : b[0];
        return _a - _b;
      });
    }

    return html`
      <div class="row">
        ${this.cssMixin
          ? this.cssMixinTemplate()
          : entries.map(
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
