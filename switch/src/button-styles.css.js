import { css } from '~/core';
import { borderRadiusMixin } from '~/borders';
import { coolGray } from '~/colors';

const trackPadding = -4;
const thumbDiameter = 20;
const thumbShadow = 6;

export default css`
  :host {
    width: auto;
    height: auto;
    --thumb-elevation: 0 1px 3px ${coolGray['600']};
    --thumb-shadow: var(--thumb-elevation);
  }

  .btn {
    height: auto;
  }

  .switch-button__track {
    ${borderRadiusMixin('full')};
    height: calc(${thumbDiameter}px + 2 * ${trackPadding}px);
    width: calc(2.1 * ${thumbDiameter}px + 2 * ${trackPadding}px);
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
    box-shadow: var(--thumb-shadow);
    outline: none;
    transition: left 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }

  :host([checked]) .switch-button__thumb {
    left: calc(100% - ${thumbDiameter}px - ${trackPadding}px);
  }

  :host([checked]) .switch-button__track {
    background-color: var(--simba-color-primary-500);
  }

  :host(:hover:not([disabled])) .switch-button__thumb {
    --thumb-shadow: var(--thumb-elevation),
      0 0 0 ${thumbShadow}px rgba(0, 0, 0, 0.15);
  }

  :host([theme='dark']:hover:not([disabled])) .switch-button__thumb {
    --thumb-shadow: var(--thumb-elevation),
      0 0 0 ${thumbShadow}px rgba(255, 255, 255, 0.15);
  }

  :host([checked]:hover:not([disabled])) .switch-button__thumb {
    --thumb-shadow: var(--thumb-elevation),
      0 0 0 ${thumbShadow}px var(--simba-switch-color-hover);
  }

  :host(:focus:not([disabled])) .switch-button__thumb {
    outline: none;
    --thumb-shadow: var(--thumb-elevation),
      0 0 0 ${thumbShadow}px rgba(0, 0, 0, 0.4);
  }

  :host([theme='dark']:focus:not([disabled])) .switch-button__thumb {
    --thumb-shadow: var(--thumb-elevation),
      0 0 0 ${thumbShadow}px rgba(255, 255, 255, 0.4);
  }

  :host([checked]:focus:not([disabled])) .switch-button__thumb {
    --thumb-shadow: var(--thumb-elevation),
      0 0 0 ${thumbShadow}px var(--simba-switch-color-focus);
  }

  :host([disabled]) .switch-button__thumb {
    background-color: ${coolGray['400']};
  }

  :host([disabled]) .switch-button__track {
    background-color: ${coolGray['500']};
  }

  :host([disabled][checked]) .switch-button__track {
    background-color: var(--simba-color-primary-700);
  }
`;
