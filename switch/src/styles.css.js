import { css } from '~/core';
import { borderRadiusMixin } from '~/borders';

export default css`
  :host {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .input-group__container > .input-group__input ::slotted(.form-control) {
    border: none;
    padding: 0;
    margin: 0;
    ${borderRadiusMixin('full')};
  }

  .input-group__container > .input-group__input ::slotted(.form-control:focus) {
    box-shadow: none;
  }
`;
