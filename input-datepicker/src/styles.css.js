import { css } from '~/core';
import { base, md, none, full } from '~/radii';
import { s0, s1, s1_5, s2, s2_5, s3, s4 } from '~/spacing';
import { coolGray50, coolGray200, coolGray300, coolGray600 } from '~/colors';
import {
  familyMono,
  weightBold,
  weightMedium,
  sizeBaseSize,
  sizeBaseLineHeight,
  sizeLgSize,
  sizeLgLineHeight,
  sizeXlSize,
  sizeXlLineHeight,
  size2xlSize,
  size2xlLineHeight,
} from '~/typography';

export const pickerStyles = css`
  .input-group__container {
    width: max-content;
    align-items: center;
    margin-top: 4px;
  }

  :host(:focus-within) .input-group__container {
    box-shadow: 0 0 0 2px var(--simba-color-primary-500);
    border-radius: ${base};
    overflow: hidden;
  }

  :host(:focus-within) ::slotted([slot='suffix']) {
    box-shadow: -1px 0 0 0 ${coolGray300} !important;
  }

  :host(:focus-within)
    ::slotted(.form-control:not([type='checkbox']):not([type='radio']):not(:focus)) {
    border-color: transparent !important;
  }

  .input-group__container > .input-group__input ::slotted(.form-control:focus) {
    box-shadow: none !important;
  }

  .input-group__container > .input-group__input ::slotted(.form-control) {
    border-radius: ${none} !important;
    border-top-left-radius: ${base} !important;
    border-bottom-left-radius: ${base} !important;
    margin-top: 0 !important;
  }

  ::slotted([slot='suffix']) {
    transition: unset !important;
    border-radius: ${none} !important;
    border-top-right-radius: ${base} !important;
    border-bottom-right-radius: ${base} !important;
    padding: ${s1_5} ${s2_5} !important;
    border: 0 !important;
  }

  ::slotted([slot='suffix']:focus),
  ::slotted([slot='suffix']:focus-visible) {
    box-shadow: 0 0 0 2px var(--simba-color-primary-500) !important;
    overflow: hidden !important;
    outline: 0 !important;
  }

  :host([disabled]) ::slotted([slot='suffix']) {
    background-color: ${coolGray50} !important;
    filter: none !important;
  }

  :host([theme='dark']) ::slotted([slot='suffix']) {
    background-color: var(--simba-bg-color-dark) !important;
  }

  :host([theme='dark']) ::slotted([slot='suffix']:focus) {
    background-color: var(--simba-color-primary-900) !important;
  }

  :host([theme='dark'][disabled]) ::slotted([slot='suffix']) {
    background-color: ${coolGray600} !important;
  }
`;

export const frameStyles = css`
  :host {
    display: block;
    box-shadow: 0 3px 5px 1px rgba(0, 0, 0, 0.4);
    background: ${coolGray50};
    position: relative;
    border-radius: ${md};
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
    color: ${coolGray50};
  }

  .calendar-overlay__heading {
    font-size: ${sizeXlSize};
    line-height: ${sizeXlLineHeight};
    font-weight: ${weightBold};
    margin: 0;
    padding: ${s1_5} ${s3};
  }

  .calendar-overlay__close-button {
    position: absolute;
    top: 0;
    right: 0;
    color: ${coolGray50};
    font-family: ${familyMono};
    font-size: ${size2xlSize};
    line-height: ${size2xlLineHeight};
    font-weight: ${weightBold};
    border-radius: ${none};
    padding: ${s1} ${s2};
  }

  .calendar-overlay__close-button:hover {
    background-color: var(--simba-color-primary-700);
  }

  .calendar-overlay__current {
    text-align: center;
    padding-bottom: ${s4};
    margin: 0;
    font-size: ${sizeLgSize};
    line-height: ${sizeLgLineHeight};
    font-weight: ${weightBold};
  }
`;

export const calendarStyles = css`
  .calendar__navigation {
    display: flex;
    justify-content: space-between;
    padding-top: 8px;
  }

  .calendar__navigation simba-button {
    font-family: ${familyMono};
    font-size: ${sizeXlSize};
    line-height: ${sizeXlLineHeight};
    font-weight: ${weightMedium};
    padding: ${s0};
    margin: -2px ${s2} 0 ${s2};
  }

  .calendar__navigation__year,
  .calendar__navigation__month {
    align-items: center;
  }

  .calendar__navigation-heading {
    font-weight: ${weightBold};
    font-size: ${sizeBaseSize};
    line-height: ${sizeBaseLineHeight};
    text-align: center;
  }

  .calendar__navigation__year .calendar__navigation-heading {
    padding: ${s0} ${s2};
  }

  .calendar__day-button,
  .calendar__day-button[disabled] {
    background-color: ${coolGray50};
  }

  .calendar__day-button {
    border-radius: ${full};
  }

  .calendar__day-button[selected] {
    color: ${coolGray50};
    background-color: var(--simba-color-primary-500);
  }

  .calendar__day-button:active {
    background-color: ${coolGray200};
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
    color: ${coolGray50};
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
    color: ${coolGray600};
  }
`;
