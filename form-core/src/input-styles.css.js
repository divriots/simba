import { css } from '~/core';
import { md } from '~/radii';
import {
  coolGray100,
  coolGray300,
  coolGray400,
  coolGray500,
  coolGray600,
  coolGray700,
  coolGray900,
} from '~/colors';
import { sizeSmSize, sizeSmLineHeight, weightMedium } from '~/typography';
import { s1, s2, s3 } from '~/spacing';

export const inputStyles = css`
  :host {
    display: block;
  }

  ::slotted(*:not(simba-select-invoker)) {
    transition: var(--theme-color-transition),
      var(--theme-background-transition) !important;
  }

  .input-group__container > .input-group__input ::slotted(.form-control) {
    border: 1px solid ${coolGray300} !important;
    border-radius: ${md} !important;
    font-size: ${sizeSmSize} !important;
    line-height: ${sizeSmLineHeight} !important;
    padding: ${s2} ${s3} !important;
    margin-top: ${s1} !important;
    width: 100% !important;
  }

  .input-group__container > .input-group__input ::slotted(.form-control:focus),
  .input-group__container
    > .input-group__input
    ::slotted(.form-control:focus-visible) {
    outline: none !important;
    border-color: transparent !important;
    box-shadow: 0 0 0 2px var(--simba-color-primary-500) !important;
  }

  ::slotted([slot='label']) {
    color: ${coolGray700} !important;
    font-weight: ${weightMedium} !important;
  }

  ::slotted([slot='help-text']) {
    color: ${coolGray500} !important;
    font-size: ${sizeSmSize} !important;
    line-height: ${sizeSmLineHeight} !important;
  }

  ::slotted(.form-control) {
    color: ${coolGray900} !important;
  }

  :host([theme='dark']) ::slotted([slot='label']) {
    color: ${coolGray100} !important;
  }

  :host([theme='dark']) ::slotted([slot='help-text']) {
    color: ${coolGray300} !important;
  }

  :host([theme='dark'])
    ::slotted(.form-control:not([type='checkbox']):not([type='radio']):not([disabled])) {
    color: ${coolGray100} !important;
    background-color: var(--simba-bg-color-dark) !important;
  }

  :host([theme='dark'])
    ::slotted(.form-control:not([type='checkbox']):not([type='radio']):not(:focus)) {
    border-color: ${coolGray400} !important;
  }

  :host([theme='dark']) ::slotted(.form-control)::placeholder {
    color: ${coolGray500} !important;
  }

  :host([theme='dark'][disabled]) ::slotted(.form-control) {
    background-color: ${coolGray600} !important;
    color: ${coolGray400} !important;
  }

  :host([theme='dark'][disabled]) ::slotted([slot='label']) {
    color: ${coolGray500} !important;
  }

  :host([theme='dark'][disabled]) ::slotted([slot='help-text']) {
    color: ${coolGray600} !important;
  }
`;
