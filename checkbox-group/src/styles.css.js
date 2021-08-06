import { css } from '~/core';
import { borderRadiusMixin } from '~/borders';
import { coolGray } from '~/colors';

export default css`
  ::slotted(.form-control) {
    ${borderRadiusMixin()};
  }

  ::slotted(.form-control:checked) {
    --rotation: 43deg;
  }

  ::slotted(.form-control):after {
    ${borderRadiusMixin('none')};
    background: transparent;
    width: 4px;
    height: 8px;
    border: 2px solid ${coolGray[50]};
    border-top: 0;
    border-left: 0;
    left: 4px;
    top: 1px;
    transform: rotate(var(--rotation, 20deg));
  }
`;
