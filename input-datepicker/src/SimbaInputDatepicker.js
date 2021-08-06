import { html, ifDefined } from '~/core';
import { LionInputDatepicker } from '@lion/input-datepicker';
import { withModalDialogConfig, withBottomSheetConfig } from '@lion/overlays';
import { formatDate } from '@lion/localize';
import { InputMixin } from '~/form-core';
import '~/button/simba-button.js';
import { pickerStyles } from './styles.css.js';
import { SimbaCalendarOverlayFrame } from './SimbaCalendarOverlayFrame.js';
import { SimbaCalendar } from './SimbaCalendar.js';

export class SimbaInputDatepicker extends InputMixin(LionInputDatepicker) {
  static get properties() {
    return {
      centralDate: { attribute: false },
    };
  }

  static get scopedElements() {
    return {
      ...super.scopedElements,
      'simba-calendar-overlay-frame': SimbaCalendarOverlayFrame,
      'simba-calendar': SimbaCalendar,
    };
  }

  static get localizeNamespaces() {
    return [
      {
        'simba-input-datepicker': /** @param {string} locale */ (locale) => {
          switch (locale) {
            case 'nl-BE':
            case 'nl-NL':
              return import('~/input-date/src/nl.js');
            default:
              return import('~/input-date/src/en.js');
          }
        },
      },
      ...super.localizeNamespaces,
    ];
  }

  static get styles() {
    return [...super.styles, pickerStyles];
  }

  _setupOverlayCtrl() {
    super._setupOverlayCtrl();
    this._calendarNode.addEventListener('central-date-changed', () => {
      this.centralDate = this._calendarNode.centralDate;
    });

    /**
     * Override the backdrop background-color for dark-mode.
     * TODO: File issue on lion, as this way of doing it is not
     * very developer-friendly.
     */
    const globalStyleNode = document.querySelector(
      'style[data-global-overlays]'
    );
    globalStyleNode.sheet.insertRule(
      'html[theme="dark"] .global-overlays .global-overlays__backdrop { background-color: #000 }',
      globalStyleNode.sheet.cssRules.length
    );
  }

  _defineOverlayConfig() {
    if (window.innerWidth >= 600) {
      this.mobile = false;
      return {
        ...withModalDialogConfig(),
        hidesOnOutsideClick: true,
      };
    }
    this.mobile = true;
    return withBottomSheetConfig();
  }

  // Weekday, Mon, year
  _overlayTemplate() {
    return html`
      <div id="overlay-content-node-wrapper">
        <simba-calendar-overlay-frame
          class="calendar__overlay-frame ${this.mobile
            ? 'calendar__overlay-frame-sheet'
            : ''}"
          .current=${formatDate(this.centralDate, {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        >
          <span slot="heading">${this.calendarHeading}</span>
          ${this._calendarTemplate()}
        </simba-calendar-overlay-frame>
      </div>
    `;
  }

  _invokerTemplate() {
    return html`
      <simba-button
        type="button"
        variation="outline"
        @click="${this.__openCalendarOverlay}"
        id="${this.__invokerId}"
        aria-label="${this.msgLit('lion-input-datepicker:openDatepickerLabel')}"
        title="${this.msgLit('lion-input-datepicker:openDatepickerLabel')}"
      >
        📅
      </simba-button>
    `;
  }

  __openCalendarOverlay(ev) {
    if (this.__blockOpenOnEnterKeyUp) {
      return;
    }
    super.__openCalendarOverlay(ev);
  }

  _calendarTemplate() {
    return html`
      <simba-calendar
        slot="content"
        .selectedDate="${
          /** @type {typeof LionInputDatepicker} */ (
            this.constructor
          ).__getSyncDownValue(this.modelValue)
        }"
        .minDate="${this.__calendarMinDate}"
        .maxDate="${this.__calendarMaxDate}"
        .disableDates="${ifDefined(this.__calendarDisableDates)}"
        @user-selected-date-changed="${this._onCalendarUserSelectedChanged}"
      ></simba-calendar>
    `;
  }

  /**
   * Calendar closes on enter keydown
   * Calendar opens on enter keyup (on invoker)
   * This ensures that when closing with keydown, immediately followed up by
   * keyup, doesn't reopen the calendar, so essentially this is a debounce..
   */
  _onCalendarUserSelectedChanged(ev) {
    super._onCalendarUserSelectedChanged(ev);
    if (ev.detail.isMouse) {
      return;
    }
    this.__blockOpenOnEnterKeyUp = true;
    setTimeout(() => {
      this.__blockOpenOnEnterKeyUp = false;
    }, 200);
  }
}
