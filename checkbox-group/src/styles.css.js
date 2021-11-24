import { css } from '~/core';
import { none, base } from '~/radii';
import { coolGray50 } from '~/colors';

export default css`
  ::slotted(.form-control) {
    border-radius: ${base};
  }

  ::slotted(.form-control:checked) {
    --rotation: 43deg;
  }

  ::slotted(.form-control):after {
    border-radius: ${none};
    background: transparent;
    width: 4px;
    height: 8px;
    border-bottom: 2px solid ${coolGray50};
    border-right: 2px solid ${coolGray50};
    left: 4px;
    top: 1px;
    transform: rotate(var(--rotation, 20deg));
  }
`;
