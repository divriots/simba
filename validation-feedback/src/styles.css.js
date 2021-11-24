import { css } from '~/core';
import {
  red400,
  red500,
  red600,
  red700,
  amber400,
  amber500,
  amber700,
  emerald400,
  emerald500,
  emerald700,
  blue400,
  blue500,
  blue700,
} from '~/colors';
import { sizeSmSize, sizeSmLineHeight } from '~/typography';

export default css`
  :host {
    display: block;
    color: ${red600};
    margin-top: 2px;
    font-size: ${sizeSmSize};
    line-height: ${sizeSmLineHeight};
  }

  .feedback-container {
    display: flex;
    align-items: center;
    gap: 0.25em;
  }

  .icon,
  .text {
    transition: var(--simba-theme-transition);
  }

  .error {
    fill: ${red500};
    color: ${red700};
  }

  .warning {
    fill: ${amber500};
    color: ${amber700};
  }

  .success {
    fill: ${emerald500};
    color: ${emerald700};
  }

  .info {
    fill: ${blue500};
    color: ${blue700};
  }

  :host([theme='dark']) .error {
    fill: ${red400};
    color: ${red400};
  }

  :host([theme='dark']) .warning {
    fill: ${amber400};
    color: ${amber400};
  }

  :host([theme='dark']) .success {
    fill: ${emerald400};
    color: ${emerald400};
  }

  :host([theme='dark']) .info {
    fill: ${blue400};
    color: ${blue400};
  }
`;
