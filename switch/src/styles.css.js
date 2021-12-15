import { css } from '~/core';
import { full } from '~/radii';

export default css`
  :host {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .input-group__container > .input-group__input ::slotted(.form-control) {
    border: none !important;
    padding: 0 !important;
    margin: 0 !important;
    border-radius: ${full} !important;
  }

  .input-group__container > .input-group__input ::slotted(.form-control:focus) {
    box-shadow: none !important;
  }
`;
