import { css } from '@lion/core';
import { red, amber, emerald, blue } from '~/colors';
import { typographyMixin } from '~/typography';

export default css`
  :host {
    color: ${red[600]};
    display: flex;
    align-items: center;
    gap: 0.25em;
    margin-top: 2px;
    ${typographyMixin('sans', 'sm')}
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
