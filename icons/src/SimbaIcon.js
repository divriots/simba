import { css } from '@lion/core';
import { LionIcon } from '@lion/icon';
import { ThemeMixin } from '~/themes';

export class SimbaIcon extends ThemeMixin(LionIcon) {
  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          transition: var(--simba-theme-transition);
        }

        :host([theme='dark']) {
          fill: var(--text-color-dark);
        }
      `,
    ];
  }
}
