import { css } from '~/core';
import { base, none } from '~/radii';
import { s1_5, s2_5 } from '~/spacing';
import { coolGray100, coolGray300, coolGray600 } from '~/colors';

export default css`
  .input-group__container {
    width: max-content;
    align-items: center;
  }

  :host(:focus-within) .input-group__container {
    box-shadow: 0 0 0 2px var(--simba-color-primary-500);
    border-radius: ${base};
    overflow: hidden;
  }

  :host(:focus-within) ::slotted(.form-control) {
    border-color: transparent !important;
  }

  .input-group__container > .input-group__input ::slotted(.form-control:focus) {
    box-shadow: none !important;
  }

  .input-group__container > .input-group__input ::slotted(.form-control) {
    border-radius: ${none} !important;
    margin-top: 0 !important;
  }

  ::slotted(simba-button) {
    padding: ${s1_5} ${s2_5} !important;
  }

  ::slotted(simba-button:focus) {
    box-shadow: 0 0 1px 1px ${coolGray300},
      0 0 0 3px var(--simba-color-primary-500) !important;
  }

  ::slotted(simba-button[slot='prefix']) {
    border-radius: ${none} !important;
    border-top-left-radius: ${base} !important;
    border-bottom-left-radius: ${base} !important;
  }

  ::slotted(simba-button[slot='suffix']) {
    border-radius: ${none} !important;
    border-top-right-radius: ${base} !important;
    border-bottom-right-radius: ${base} !important;
  }

  :host(:focus-within) ::slotted(simba-button[slot='prefix']) {
    box-shadow: 1px 0 0 0 ${coolGray300} !important;
  }

  :host(:focus-within) ::slotted(simba-button[slot='suffix']) {
    box-shadow: -1px 0 0 0 ${coolGray300} !important;
  }

  :host([theme='dark']) ::slotted(simba-button) {
    background-color: var(--simba-bg-color-dark) !important;
    color: ${coolGray100} !important;
  }

  :host([theme='dark'][disabled]) ::slotted(simba-button) {
    background-color: ${coolGray600} !important;
  }
`;
