import { css } from '~/core';
import { spacing } from '~/spacing';

export default css`
  :host {
    display: block;
    position: relative;
  }

  :host(:not([checked])) ::slotted(.form-control):after {
    border-bottom: 0;
    transform: rotate(70deg);
  }

  :host([indeterminate]) ::slotted(.form-control):after {
    transform: rotate(90deg);
  }

  /**
   * TODO: Find better way to position label
   * against the nested checkbox slottables
   */
  ::slotted([slot='label']) {
    position: absolute;
    top: -3px;
    margin-left: 22px;
    white-space: nowrap;
  }

  ::slotted([slot='checkbox']) {
    padding-left: ${spacing['3.5']};
  }
`;
