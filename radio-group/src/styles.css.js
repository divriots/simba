import { css } from '~/core';
import { s3_5 } from '~/spacing';
import { coolGray50 } from '~/colors';
import { full } from '~/radii';

export default css`
  ::slotted(.form-control) {
    border-radius: ${full};
  }

  ::slotted(.form-control):after {
    left: 0;
    top: 0;
    width: ${s3_5};
    height: ${s3_5};
    border-radius: 50%;
    background: ${coolGray50};
    transform: scale(var(--scale, 0.7));
  }
`;
