import { LitElement, html } from '~/core';
import { LocalizeMixin } from '@lion/localize';
import { ThemeMixin } from 'dark-theme-utils';
import { frameStyles } from './styles.css.js';
import '~/button/simba-button.js';

export class SimbaCalendarOverlayFrame extends ThemeMixin(
  LocalizeMixin(LitElement)
) {
  static get properties() {
    return {
      current: { attribute: false },
    };
  }

  static get styles() {
    return [frameStyles];
  }

  static get localizeNamespaces() {
    return [
      {
        'simba-calendar-overlay-frame': /** @param {string} locale */ (
          locale
        ) => {
          switch (locale) {
            case 'nl-BE':
            case 'nl-NL':
              return import('./frame-nl.js');
            default:
              return import('./frame-en.js');
          }
        },
      },
      ...super.localizeNamespaces,
    ];
  }

  /** @private */
  __dispatchCloseEvent() {
    this.dispatchEvent(new Event('close-overlay'));
  }

  render() {
    // eslint-disable-line class-methods-use-this
    return html`
      <div class="calendar-overlay">
        <div class="calendar-overlay__header">
          <h1 class="calendar-overlay__heading">
            <slot name="heading"></slot>
          </h1>
          <p class="calendar-overlay__current">${this.current}</p>
          <simba-button
            variation="text"
            @click="${this.__dispatchCloseEvent}"
            id="close-button"
            title="${this.msgLit('simba-calendar-overlay-frame:close')}"
            aria-label="${this.msgLit('simba-calendar-overlay-frame:close')}"
            class="calendar-overlay__close-button"
          >
            <slot name="close-icon">&times;</slot>
          </simba-button>
        </div>
        <div id="overlay-content-node-wrapper">
          <slot name="content"></slot>
        </div>
      </div>
    `;
  }
}
