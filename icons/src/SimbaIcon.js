import { css } from '@lion/core';
import { LionIcon } from '@lion/icon';
import { ThemeMixin } from '~/themes';

export class SimbaIcon extends ThemeMixin(LionIcon) {
  static get styles() {
    return [
      ...super.styles,
      css`
        :host([theme='dark']) {
          fill: var(--text-color-dark);
        }

        /** svg already inherits from global, unset to prevent stacking */
        ::slotted(*) {
          transition: unset;
        }
      `,
    ];
  }
}
