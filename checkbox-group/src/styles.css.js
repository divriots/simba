import { css } from '~/core';
import { none, base } from '~/radii';
import { coolGray50 } from '~/colors';

export default css`
  ::slotted(.form-control) {
    border-radius: ${base} !important;
  }

  ::slotted(.form-control:checked) {
    --rotation: 43deg !important;
  }

  ::slotted(.form-control):after {
    border-radius: ${none} !important;
    background: transparent !important;
    width: 4px !important;
    height: 8px !important;
    border-bottom: 2px solid ${coolGray50} !important;
    border-right: 2px solid ${coolGray50} !important;
    left: 4px !important;
    top: 1px !important;
    transform: rotate(var(--rotation, 20deg)) !important;
  }
`;
