import { html, ScopedElementsMixin, render } from '~/core';
import { LionCalendar } from '@lion/calendar';
import { getMonthNames } from '@lion/localize';
import { SimbaButton } from '~/button';
import { ThemeMixin } from 'dark-theme-utils';
import { calendarStyles } from './styles.css.js';

export class SimbaCalendar extends ScopedElementsMixin(
  ThemeMixin(LionCalendar)
) {
  static get scopedElements() {
    return {
      'simba-button': SimbaButton,
    };
  }

  static get styles() {
    return [...super.styles, calendarStyles];
  }

  __renderPreviousButton(type, previousMonth, previousYear) {
    const { disabled, month } = this.__getPreviousDisabled(
      type,
      previousMonth,
      previousYear
    );
    const previousButtonTitle = this.__getNavigationLabel(
      'previous',
      type,
      month,
      previousYear
    );
    const clickDateDelegation = () => {
      if (type === 'FullYear') {
        this.goToPreviousYear();
      } else {
        this.goToPreviousMonth();
      }
    };

    return html`
      <simba-button
        variation="text"
        class="calendar__prev-btn"
        aria-label=${previousButtonTitle}
        title=${previousButtonTitle}
        @click=${clickDateDelegation}
        ?disabled=${disabled}
      >
        &lt;
      </simba-button>
    `;
  }

  __renderNextButton(type, nextMonth, nextYear) {
    const { disabled, month } = this.__getNextDisabled(
      type,
      nextMonth,
      nextYear
    );
    const nextButtonTitle = this.__getNavigationLabel(
      'next',
      type,
      month,
      nextYear
    );
    const clickDateDelegation = () => {
      if (type === 'FullYear') {
        this.goToNextYear();
      } else {
        this.goToNextMonth();
      }
    };

    return html`
      <simba-button
        variation="text"
        class="calendar__next-btn"
        aria-label=${nextButtonTitle}
        title=${nextButtonTitle}
        @click=${clickDateDelegation}
        ?disabled=${disabled}
      >
        &gt;
      </simba-button>
    `;
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    this.__setHeightToSixRows();
  }

  onLocaleUpdated() {
    super.onLocaleUpdated();
    this.__setMonthMaxWidth();
  }

  __centralDateChanged() {
    super.__centralDateChanged();
    this.dispatchEvent(new Event('central-date-changed'));
  }

  __copyNodeStyle(sourceNode, targetNode) {
    const computedStyle = window.getComputedStyle(sourceNode);
    Array.from(computedStyle).forEach((key) =>
      targetNode.style.setProperty(
        key,
        computedStyle.getPropertyValue(key),
        computedStyle.getPropertyPriority(key)
      )
    );
    targetNode.style.setProperty('display', 'inline-block');
  }

  __renderOnlineAndGetWidth(templ, sourceEl) {
    const wrapper = document.createElement('div');
    document.body.appendChild(wrapper);
    render(templ, wrapper);
    const el = wrapper.firstElementChild;
    this.__copyNodeStyle(sourceEl, el);
    const rect = el.getBoundingClientRect();
    el.remove();
    return rect.width;
  }

  __setMonthMaxWidth() {
    const monthNavHeading = this.shadowRoot.getElementById('month');

    if (monthNavHeading) {
      let maxWidth = 0;

      const monthNames = getMonthNames({ locale: this.__getLocale() });

      monthNames.forEach((month) => {
        const width = this.__renderOnlineAndGetWidth(
          html`<h2>${month}</h2>`,
          monthNavHeading
        );
        if (width > maxWidth) {
          maxWidth = width;
        }
      });

      monthNavHeading.style.setProperty('width', `${Math.ceil(maxWidth)}px`);
    }
  }

  async __setHeightToSixRows() {
    if (this.__heightSet) {
      return;
    }
    const jsWrapper = this.shadowRoot.getElementById('js-content-wrapper');
    const calendarGrid = this.shadowRoot.querySelector('.calendar__grid');
    const tbody = calendarGrid.tBodies[0];
    const rows = Array.from(tbody.rows);
    const rowHeight = rows[0].getBoundingClientRect().height;
    const jsWrapperHeight = jsWrapper.getBoundingClientRect().height;
    if (jsWrapperHeight > 0 && rowHeight > 0) {
      const newHeight = jsWrapperHeight + (6 - rows.length) * rowHeight;
      jsWrapper.style.setProperty('height', `${newHeight}px`);
      this.__heightSet = true;
    }
  }

  __clickDateDelegation(ev) {
    const isDayButton = /** @param {HTMLElement} el */ (el) =>
      el.classList.contains('calendar__day-button');

    const el = /** @type {HTMLElement & { date: Date }} */ (ev.target);
    if (isDayButton(el)) {
      this.__dateSelectedByUser(el.date, Boolean(ev.pointerType));
    }
  }

  __dateSelectedByUser(selectedDate, isMouse) {
    this.selectedDate = selectedDate;
    this.__focusedDate = selectedDate;
    this.dispatchEvent(
      new CustomEvent('user-selected-date-changed', {
        detail: {
          selectedDate,
          isMouse,
        },
      })
    );
  }
}
