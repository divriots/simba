import { css } from '~/core';
import { LionIcon } from '@lion/icon';
import { ThemeMixin } from 'dark-theme-utils';

export class SimbaIcon extends ThemeMixin(LionIcon) {
  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          transition: var(--theme-transition);
        }

        :host([theme='dark']) {
          fill: var(--text-color-dark);
        }
      `,
    ];
  }
}
