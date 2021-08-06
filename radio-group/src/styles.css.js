import { css } from '~/core';
import { spacing } from '~/spacing';
import { coolGray } from '~/colors';
import { borderRadiusMixin } from '~/borders';

export default css`
  ::slotted(.form-control) {
    ${borderRadiusMixin('full')};
  }

  ::slotted(.form-control):after {
    left: 0;
    top: 0;
    width: ${spacing['3.5']};
    height: ${spacing['3.5']};
    border-radius: 50%;
    background: ${coolGray[50]};
    transform: scale(var(--scale, 0.7));
  }
`;
