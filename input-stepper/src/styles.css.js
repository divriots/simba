import { css } from '@lion/core';
import { borderRadiusMixin } from '~/borders';
import { spacing } from '~/spacing';
import { coolGray } from '~/colors';

export default css`
  .input-group__container {
    width: max-content;
    align-items: center;
  }

  :host(:focus-within) .input-group__container {
    box-shadow: 0 0 0 2px var(--color-primary);
    ${borderRadiusMixin()};
    overflow: hidden;
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
    box-shadow: 0 0 1px 1px ${coolGray[300]}, 0 0 0 3px var(--color-primary);
  }

  ::slotted(simba-button[slot='prefix']) {
    ${borderRadiusMixin('', 'l')};
  }

  ::slotted(simba-button[slot='suffix']) {
    ${borderRadiusMixin('', 'r')};
  }
`;
