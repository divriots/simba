import { css } from '~/core';
import { borderRadiusMixin } from '~/borders';
import { emerald, coolGray } from '~/colors';

const trackPadding = 4;
const thumbDiameter = 20;

export default css`
  :host {
    width: auto;
    height: auto;
  }

  .switch-button__track {
    ${borderRadiusMixin('full')};
    height: calc(${thumbDiameter}px + 2 * ${trackPadding}px);
    width: calc(2 * ${thumbDiameter}px + 2 * ${trackPadding}px);
    background-color: ${coolGray['400']};
    transition: background-color 0.3s ease-in-out;
  }

  .switch-button__thumb {
    ${borderRadiusMixin('full')};
    width: ${thumbDiameter}px;
    height: ${thumbDiameter}px;
    left: ${trackPadding}px;
    top: 50%;
    transform: translateY(-50%);
    background-color: ${coolGray['50']};
    box-shadow: none;
    transition: left 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }

  :host([checked]) .switch-button__thumb {
    left: calc(100% - ${thumbDiameter}px - ${trackPadding}px);
  }

  :host([checked]) .switch-button__track {
    background-color: ${emerald['500']};
  }

  :host(:focus:not([disabled])) .switch-button__thumb {
    outline: none;
    box-shadow: 0 0 0 8px rgba(0, 0, 0, 0.3);
  }

  :host([theme='dark']:focus:not([disabled])) .switch-button__thumb {
    box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.3);
  }

  :host([checked]:focus:not([disabled])) .switch-button__thumb {
    box-shadow: 0 0 0 8px #10B98170;
  }

  :host([disabled]) .switch-button__thumb {
    background-color: ${coolGray['400']};
  }

  :host([disabled]) .switch-button__track {
    background-color: ${coolGray['500']};
  }

  :host([disabled][checked]) .switch-button__track {
    background-color: ${emerald['700']};
  }
`;
