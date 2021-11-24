import { LionTooltip } from '@lion/tooltip';
import { css, html } from '~/core';
import { coolGray50 } from '~/colors';
import { s1_5, s2 } from '~/spacing';
import { base } from '~/radii';

export class SimbaTooltip extends LionTooltip {
  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          --tooltip-arrow-width: 12px;
          --tooltip-arrow-height: 6px;
        }

        .arrow {
          fill: var(--simba-color-primary-900);
        }

        #overlay-content-node-wrapper {
          padding: ${s1_5} ${s2};
          background-color: var(--simba-color-primary-900);
          color: ${coolGray50};
          border-radius: ${base};
        }
      `,
    ];
  }

  constructor() {
    super();
    this.hasArrow = true;
  }

  // Custom arrow SVG
  _arrowTemplate() {
    return html`
      <svg viewBox="0 0 12 6" class="arrow__graphic">
        <path d="M 0,0 h 12 L 6,6 z"></path>
      </svg>
    `;
  }

  // Increase the offset to 10 pixels from the invoker, instead of 8
  // This effectively adds 2 pixels of whitespace, looks better.
  _getPopperArrowConfig(popperConfigToExtendFrom) {
    const superCfg = super._getPopperArrowConfig(popperConfigToExtendFrom);
    return {
      ...superCfg,
      modifiers: [
        ...superCfg.modifiers,
        {
          name: 'offset',
          enabled: true,
          options: { offset: [0, 10] },
        },
      ],
    };
  }
}
