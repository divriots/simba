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
    box-shadow: none;
  }

  .input-group__container > .input-group__input ::slotted(.form-control) {
    border-radius: ${none};
    margin-top: 0;
  }

  ::slotted(simba-button) {
    padding: ${s1_5} ${s2_5};
  }

  ::slotted(simba-button:focus) {
    box-shadow: 0 0 1px 1px ${coolGray300},
      0 0 0 3px var(--simba-color-primary-500);
  }

  ::slotted(simba-button[slot='prefix']) {
    border-radius: ${none};
    border-top-left-radius: ${base};
    border-bottom-left-radius: ${base};
  }

  ::slotted(simba-button[slot='suffix']) {
    border-radius: ${none};
    border-top-right-radius: ${base};
    border-bottom-right-radius: ${base};
  }

  :host(:focus-within) ::slotted(simba-button[slot='prefix']) {
    box-shadow: 1px 0 0 0 ${coolGray300};
  }

  :host(:focus-within) ::slotted(simba-button[slot='suffix']) {
    box-shadow: -1px 0 0 0 ${coolGray300};
  }

  :host([theme='dark']) ::slotted(simba-button) {
    background-color: var(--simba-bg-color-dark);
    color: ${coolGray100};
  }

  :host([theme='dark'][disabled]) ::slotted(simba-button) {
    background-color: ${coolGray600};
  }
`;
