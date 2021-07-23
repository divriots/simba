import { css } from '@lion/core';
import { borderRadiusMixin } from '~/borders';
import { spacing } from '~/spacing';

const thumbSize = css`
  ${spacing['4']}
`;

const track = css`
  width: 100%;
  height: 6px;
  cursor: pointer;
`;

const thumb = css`
  height: ${thumbSize};
  width: ${thumbSize};
  ${borderRadiusMixin('full')};
  background-color: var(--color-primary);
  cursor: pointer;
`;

export const inputRangeStyles = (scope) => css`
  .${scope} .form-control {
    -webkit-appearance: none;
  }

  .${scope} .form-control::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  .${scope} .form-control::-ms-track {
    width: 100%;
    cursor: pointer;

    /* Hides the slider so custom styles can be added */
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  .${scope} .form-control::-webkit-slider-thumb {
    -webkit-appearance: none;
    margin-top: -5px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
    ${thumb};
  }

  .${scope} .form-control::-moz-range-thumb {
    ${thumb};
  }

  .${scope} .form-control::-webkit-slider-runnable-track {
    ${track};
  }

  .${scope} .form-control::-moz-range-track {
    ${track};
  }

  .${scope} .form-control:focus::-webkit-slider-thumb {
    background: var(--color-primary-dark);
  }

  .${scope}[disabled] .form-control::-webkit-slider-thumb {
    background: var(--color-primary-disabled);
  }
`;

export default css`
  .input-group__container > .input-group__input ::slotted(.form-control) {
    padding: ${spacing['0']};
    border: none;
  }

  .input-group__container > .input-group__input ::slotted(.form-control:focus) {
    box-shadow: none;
    border: none;
  }

  .input-group__input {
    flex-direction: column;
  }

  .input-range__limits {
    display: flex;
    justify-content: space-between;
  }

  .form-field__group-one-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
`;
