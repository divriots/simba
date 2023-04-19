import { css } from 'lit';
import { LionIcon } from '@lion/ui/icon.js';
import { ThemeMixin } from 'dark-theme-utils';

export class SimbaIcon extends ThemeMixin(LionIcon) {
  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          transition: var(--theme-fill-transition);
        }

        :host([theme='dark']) {
          fill: var(--simba-text-color-dark);
        }
      `,
    ];
  }
}
