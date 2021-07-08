import { css } from '@lion/core';
import { red, amber, emerald, blue } from '~/colors';

export default css`
  :host {
    color: ${red[600]};
    display: flex;
    align-items: center;
    gap: 0.25em;
    font-size: 0.875rem;
    margin-top: 2px;
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
`;
