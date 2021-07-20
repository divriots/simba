import { css } from '@lion/core';
import { borderRadiusMixin } from '~/borders';
import { coolGray } from '~/colors';
import { typographyMixin, weight } from '~/typography';
import { spacing } from '~/spacing';

export const inputStyles = css`
  .input-group__container > .input-group__input ::slotted(.form-control) {
    border: 1px solid ${coolGray[300]};
    ${borderRadiusMixin('md')}
    ${typographyMixin('sans', 'sm')}
    padding: ${spacing['2']} ${spacing['3']};
    margin-top: ${spacing['1']};
  }

  .input-group__container > .input-group__input ::slotted(.form-control:focus) {
    outline: none;
    border: 1px solid transparent;
    box-shadow: 0 0 0 2px var(--color-primary);
  }

  ::slotted([slot='label']) {
    color: ${coolGray[700]};
    font-weight: ${weight['medium']};
  }

  ::slotted([slot='help-text']) {
    color: ${coolGray[500]};
    ${typographyMixin('sans', 'sm', 'normal')}
  }
`;
