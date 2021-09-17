import { css } from '~/core';
import { borderRadiusMixin } from '~/borders';
import { spacing } from '~/spacing';
import { coolGray } from '~/colors';
import { typographyMixin } from '~/typography';

export const pickerStyles = css`
  .input-group__container {
    width: max-content;
    align-items: center;
    margin-top: 4px;
  }

  :host(:focus-within) .input-group__container {
    box-shadow: 0 0 0 2px var(--simba-color-primary-500);
    ${borderRadiusMixin()};
    overflow: hidden;
  }

  :host(:focus-within) ::slotted([slot='suffix']) {
    box-shadow: -1px 0 0 0 ${coolGray[300]};
  }

  :host(:focus-within)
    ::slotted(.form-control:not([type='checkbox']):not([type='radio']):not(:focus)) {
    border-color: transparent;
  }

  .input-group__container > .input-group__input ::slotted(.form-control:focus) {
    box-shadow: none;
  }

  .input-group__container > .input-group__input ::slotted(.form-control) {
    ${borderRadiusMixin('', 'l')};
    margin-top: 0;
  }

  ::slotted([slot='suffix']) {
    transition: unset;
    ${borderRadiusMixin('', 'r')};
    padding: ${spacing['1.5']} ${spacing['2.5']};
    border: 0;
  }

  ::slotted([slot='suffix']:focus),
  ::slotted([slot='suffix']:focus-visible) {
    box-shadow: 0 0 0 2px var(--simba-color-primary-500);
    overflow: hidden;
    outline: 0;
  }

  :host([disabled]) ::slotted([slot='suffix']) {
    background-color: ${coolGray[50]};
    filter: none;
  }

  :host([theme='dark']) ::slotted([slot='suffix']) {
    background-color: var(--simba-bg-color-dark);
  }

  :host([theme='dark']) ::slotted([slot='suffix']:focus) {
    background-color: var(--simba-color-primary-900);
  }

  :host([theme='dark'][disabled]) ::slotted([slot='suffix']) {
    background-color: ${coolGray[600]};
  }
`;

export const frameStyles = css`
  :host {
    display: block;
    box-shadow: 0 3px 5px 1px rgba(0, 0, 0, 0.4);
    background: ${coolGray[50]};
    position: relative;
    ${borderRadiusMixin('md')};
    overflow: hidden;
  }

  :host(.calendar__overlay-frame-sheet) {
    width: 100%;
  }

  :host([hidden]) {
    display: none;
  }

  .calendar-overlay__header {
    position: relative;
    background-color: var(--simba-color-primary-500);
    color: ${coolGray[50]};
  }

  .calendar-overlay__heading {
    ${typographyMixin('sans', 'xl', 'bold')};
    margin: 0;
    padding: ${spacing['1.5']} ${spacing['3']};
  }

  .calendar-overlay__close-button {
    position: absolute;
    top: 0;
    right: 0;
    color: ${coolGray[50]};
    ${typographyMixin('mono', '2xl', 'bold')};
    ${borderRadiusMixin('none')};
    padding: ${spacing['1']} ${spacing['2']};
  }

  .calendar-overlay__close-button:hover {
    background-color: var(--simba-color-primary-700);
  }

  .calendar-overlay__current {
    text-align: center;
    padding-bottom: ${spacing['4']};
    margin: 0;
    ${typographyMixin('sans', 'lg', 'bold')};
  }
`;

export const calendarStyles = css`
  .calendar__navigation {
    display: flex;
    justify-content: space-between;
    padding-top: 8px;
  }

  .calendar__navigation simba-button {
    ${typographyMixin('mono', 'xl', 'medium')};
    padding: ${spacing['0']};
    margin: -2 ${spacing['2']} 0 ${spacing['2']};
    margin-top: -2px;
  }

  .calendar__navigation__year,
  .calendar__navigation__month {
    align-items: center;
  }

  .calendar__navigation-heading {
    ${typographyMixin('sans', '', 'bold')};
    text-align: center;
  }

  .calendar__day-button,
  .calendar__day-button[disabled] {
    background-color: ${coolGray[50]};
  }

  .calendar__day-button {
    ${borderRadiusMixin('full')};
  }

  .calendar__day-button[selected] {
    color: ${coolGray[50]};
    background-color: var(--simba-color-primary-500);
  }

  .calendar__day-button:active {
    background-color: ${coolGray[200]};
  }

  .calendar__day-button:hover {
    border: 1px solid var(--simba-color-primary-500);
  }

  .calendar__day-button:focus,
  .calendar__day-button:focus-visible {
    border: 2px solid var(--simba-color-primary-200);
    outline: none;
  }

  .calendar__day-button[today] {
    color: var(--simba-color-primary-800);
    text-decoration: none;
  }

  .calendar__day-button[today] .calendar__day-button__text {
    border-bottom: 2px solid var(--simba-color-primary-800);
    padding: 1 2px;
  }

  :host([theme='dark']) {
    background-color: var(--simba-bg-color-dark);
  }

  :host([theme='dark']) .calendar__day-button {
    background-color: var(--simba-bg-color-dark);
    color: ${coolGray[50]};
  }

  :host([theme='dark']) .calendar__day-button[today] {
    color: var(--simba-color-primary-200);
  }

  :host([theme='dark'])
    .calendar__day-button[today]
    .calendar__day-button__text {
    border-color: var(--simba-color-primary-200);
  }

  :host([theme='dark']) .calendar__day-button[selected] {
    background-color: var(--simba-color-primary-500);
  }

  :host([theme='dark']) .calendar__day-button:active {
    background-color: var(--simba-color-primary-700);
  }

  :host([theme='dark']) .calendar__day-button[disabled] {
    color: ${coolGray[600]};
  }
`;
