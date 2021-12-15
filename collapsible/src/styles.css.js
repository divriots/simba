import { css } from '~/core';
import { coolGray50, coolGray300 } from '~/colors';
import { s0_5, s3_5 } from '~/spacing';

export default css`
  ::slotted([slot='content']) {
    margin-top: ${s0_5};
    padding-right: ${s3_5};
    padding-left: ${s3_5};
    box-shadow: 0 0 0 1px ${coolGray300};
  }

  ::slotted([slot='content']:focus-within) {
    box-shadow: 0 0 0 1px ${coolGray300},
      0 0 0 3px var(--simba-focus-ring-color);
  }

  :host([theme='dark']) ::slotted([slot='content']) {
    box-shadow: 0 0 0 1px ${coolGray50};
  }

  :host([theme='dark']) ::slotted([slot='content']:focus-within) {
    box-shadow: 0 0 0 1px ${coolGray50}, 0 0 0 3px var(--simba-focus-ring-color);
  }
`;
