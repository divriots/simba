import { css } from '~/core';
import { s3_5 } from '~/spacing';
import { coolGray50 } from '~/colors';
import { full } from '~/radii';

export default css`
  ::slotted(.form-control) {
    border-radius: ${full} !important;
  }

  ::slotted(.form-control):after {
    left: 0 !important;
    top: 0 !important;
    width: ${s3_5} !important;
    height: ${s3_5} !important;
    border-radius: 50% !important;
    background: ${coolGray50} !important;
    transform: scale(var(--scale, 0.7)) !important;
  }
`;
