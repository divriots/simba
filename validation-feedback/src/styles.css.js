import { css } from '~/core';
import { red, amber, emerald, blue } from '~/colors';
import { typographyMixin } from '~/typography';

export default css`
  :host {
    display: block;
    color: ${red[600]};
    margin-top: 2px;
    ${typographyMixin('sans', 'sm')};
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
    fill: ${red[500]};
    color: ${red[700]};
  }

  .warning {
    fill: ${amber[500]};
    color: ${amber[700]};
  }

  .success {
    fill: ${emerald[500]};
    color: ${emerald[700]};
  }

  .info {
    fill: ${blue[500]};
    color: ${blue[700]};
  }

  :host([theme='dark']) .error {
    fill: ${red[400]};
    color: ${red[400]};
  }

  :host([theme='dark']) .warning {
    fill: ${amber[400]};
    color: ${amber[400]};
  }

  :host([theme='dark']) .success {
    fill: ${emerald[400]};
    color: ${emerald[400]};
  }

  :host([theme='dark']) .info {
    fill: ${blue[400]};
    color: ${blue[400]};
  }
`;
