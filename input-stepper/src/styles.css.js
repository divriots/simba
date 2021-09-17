import { css } from '~/core';
import { borderRadiusMixin } from '~/borders';
import { spacing } from '~/spacing';
import { coolGray } from '~/colors';

export default css`
  .input-group__container {
    width: max-content;
    align-items: center;
  }

  :host(:focus-within) .input-group__container {
    box-shadow: 0 0 0 2px var(--simba-color-primary-500);
    ${borderRadiusMixin()};
    overflow: hidden;
  }

  :host(:focus-within) ::slotted(.form-control) {
    border-color: transparent !important;
  }

  .input-group__container > .input-group__input ::slotted(.form-control:focus) {
    box-shadow: none;
  }

  .input-group__container > .input-group__input ::slotted(.form-control) {
    ${borderRadiusMixin('none')};
    margin-top: 0;
  }

  ::slotted(simba-button) {
    padding: ${spacing['1.5']} ${spacing['2.5']};
  }

  ::slotted(simba-button:focus) {
    box-shadow: 0 0 1px 1px ${coolGray[300]},
      0 0 0 3px var(--simba-color-primary-500);
  }

  ::slotted(simba-button[slot='prefix']) {
    ${borderRadiusMixin('', 'l')};
  }

  ::slotted(simba-button[slot='suffix']) {
    ${borderRadiusMixin('', 'r')};
  }

  :host(:focus-within) ::slotted(simba-button[slot='prefix']) {
    box-shadow: 1px 0 0 0 ${coolGray[300]};
  }

  :host(:focus-within) ::slotted(simba-button[slot='suffix']) {
    box-shadow: -1px 0 0 0 ${coolGray[300]};
  }

  :host([theme='dark']) ::slotted(simba-button) {
    background-color: var(--simba-bg-color-dark);
    color: ${coolGray[100]};
  }

  :host([theme='dark'][disabled]) ::slotted(simba-button) {
    background-color: ${coolGray[600]};
  }
`;
