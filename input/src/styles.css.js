import { css } from '@lion/core';
import { roundedMd } from '~/borders';
import { coolGray } from '~/colors';

export default css`
  .input-group__container > .input-group__input ::slotted(.form-control) {
    border: 1px solid ${coolGray[300]};
    border-radius: ${roundedMd};
    font-size: 0.875rem;
    line-height: 1.25rem;
    padding: 0.5rem 0.75rem;
    margin-top: 0.25rem;
  }

  .input-group__container > .input-group__input ::slotted(.form-control:focus) {
    outline: none;
    border: 1px solid transparent;
    box-shadow: 0 0 0 2px var(--color-primary);
  }

  ::slotted([slot='label']) {
    color: ${coolGray[700]};
    font-weight: 500;
  }

  ::slotted([slot='help-text']) {
    color: ${coolGray[500]};
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 400;
  }
`;
