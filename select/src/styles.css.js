import { css } from '@lion/core';
import { coolGray } from '~/colors';

export default css`
  ::slotted([slot='input']) {
    -webkit-appearance: none;
    appearance: none;
  }

  .input-group__input {
    position: relative;
  }

  .input-group__arrow {
    position: absolute;
    width: 14px;
    right: 10px;
    top: 15px;
    fill: ${coolGray[800]};
  }

  :host([disabled]) .input-group__arrow {
    fill: ${coolGray[400]};
  }
`;
