import { css } from '~/core';
import { full } from '~/radii';
import { s0, s4 } from '~/spacing';

const thumbSize = css`
  ${s4}
`;

const track = css`
  width: 100%;
  height: 6px;
  cursor: pointer;
`;

const thumb = css`
  height: ${thumbSize};
  width: ${thumbSize};
  border-radius: ${full};
  background-color: var(--simba-color-primary-500);
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

  .${scope} .form-control:hover::-webkit-slider-thumb {
    background: var(--simba-color-primary-600);
  }

  .${scope} .form-control:focus::-webkit-slider-thumb,
  .${scope} .form-control:active::-webkit-slider-thumb {
    background: var(--simba-color-primary-700);
  }

  .${scope}[disabled] .form-control::-webkit-slider-thumb {
    background: var(--simba-color-primary-300);
  }
`;

/**
 * Transition unset to prevent multiple stacked inherited transitions for span elements
 */
export default css`
  :host {
    transition: unset;
  }

  .input-group__container > .input-group__input ::slotted(.form-control) {
    padding: ${s0} !important;
    border: none !important;
  }

  .input-group__container > .input-group__input ::slotted(.form-control:focus) {
    box-shadow: none !important;
    border: none !important;
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
