import { css } from '~/core';
import { coolGray } from '~/colors';
import { spacing } from '~/spacing';
import { borderRadiusMixin } from '~/borders';

export const invokerStyles = css`
  :host(:focus:not([disabled])),
  :host(:focus-visible) {
    outline: none;
  }

  :host {
    ${borderRadiusMixin()};
    background-color: ${coolGray[50]};
    border: 1px solid ${coolGray[300]};
    margin-top: ${spacing['1']};
    transition: background-color 0.3s ease-in-out;
  }

  :host(:hover) {
    background-color: ${coolGray[50]};
  }

  :host(:focus),
  :host(:focus-visible) {
    outline: none;
    border: 1px solid transparent;
    box-shadow: 0 0 0 2px var(--simba-color-primary-500);
  }

  :host(:active) {
    background-color: ${coolGray[100]};
  }

  ::slotted([slot='after']) {
    width: ${spacing['3']};
    height: ${spacing['3']};
  }

  :host([theme='dark']) {
    background-color: var(--simba-bg-color-dark);
  }
`;

export const optionStyles = css`
  :host([checked]) {
    background-color: var(--simba-color-primary-100);
  }

  :host([theme='dark']) {
    background-color: var(--simba-bg-color-dark);
  }

  :host([theme='dark']:hover) {
    background-color: ${coolGray[600]};
  }

  :host([theme='dark'][checked]) {
    background-color: var(--simba-color-primary-900);
  }
`;

export const optionsStyles = css`
  .input-group__container > .input-group__input ::slotted(.form-control) {
    display: block;
    background-color: ${coolGray[50]};
    padding: 0;
    overflow: hidden;
  }
`;

export const selectStyles = css`
  ::slotted([slot='input']) {
    -webkit-appearance: none;
    appearance: none;
  }

  .input-group__input {
    position: relative;
  }

  .input-group__arrow {
    position: absolute;
    width: 14px;
    right: 10px;
    top: 15px;
    fill: ${coolGray[800]};
    transition: var(--theme-fill-transition);
  }

  :host([disabled]) .input-group__arrow {
    fill: ${coolGray[400]};
  }

  :host([theme='dark']) .input-group__arrow {
    fill: ${coolGray[200]};
  }
`;
