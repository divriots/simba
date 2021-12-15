import { css } from '~/core';
import { s3_5 } from '~/spacing';

export default css`
  :host {
    display: block;
    position: relative;
  }

  ::slotted([slot='checkbox']:first-child) {
    margin-top: 2px !important;
  }

  :host(:not([checked])) ::slotted(.form-control):after {
    border-bottom: 0 !important;
    transform: rotate(70deg) !important;
  }

  :host([indeterminate]) ::slotted(.form-control):after {
    transform: rotate(90deg) !important;
  }

  /**
   * TODO: Find better way to position label
   * against the nested checkbox slottables
   */
  ::slotted([slot='label']) {
    position: absolute !important;
    top: -3px !important;
    margin-left: 22px !important;
    white-space: nowrap !important;
  }

  ::slotted([slot='checkbox']) {
    padding-left: ${s3_5} !important;
  }
`;
