import { css } from '~/core';
import {
  coolGray50,
  coolGray100,
  coolGray200,
  coolGray300,
  coolGray400,
  coolGray600,
  coolGray800,
} from '~/colors';
import { s1, s3 } from '~/spacing';
import { base } from '~/radii';

export const invokerStyles = css`
  :host(:focus:not([disabled])),
  :host(:focus-visible) {
    outline: none;
  }

  :host {
    border-radius: ${base};
    background-color: ${coolGray50};
    border: 1px solid ${coolGray300};
    margin-top: ${s1};
    transition: background-color 0.3s ease-in-out;
  }

  :host(:hover) {
    background-color: ${coolGray50};
  }

  :host(:focus),
  :host(:focus-visible) {
    outline: none;
    border: 1px solid transparent;
    box-shadow: 0 0 0 2px var(--simba-color-primary-500);
  }

  :host(:active) {
    background-color: ${coolGray100};
  }

  ::slotted([slot='after']) {
    width: ${s3} !important;
    height: ${s3} !important;
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
    background-color: ${coolGray600};
  }

  :host([theme='dark'][checked]) {
    background-color: var(--simba-color-primary-900);
  }
`;

export const optionsStyles = css`
  .input-group__container > .input-group__input ::slotted(.form-control) {
    display: block !important;
    background-color: ${coolGray50} !important;
    padding: 0 !important;
    overflow: hidden !important;
  }
`;

export const selectStyles = css`
  ::slotted([slot='input']) {
    -webkit-appearance: none !important;
    appearance: none !important;
  }

  .input-group__input {
    position: relative;
  }

  .input-group__arrow {
    position: absolute;
    width: 14px;
    right: 10px;
    top: 15px;
    fill: ${coolGray800};
    transition: var(--theme-fill-transition);
  }

  :host([disabled]) .input-group__arrow {
    fill: ${coolGray400};
  }

  :host([theme='dark']) .input-group__arrow {
    fill: ${coolGray200};
  }
`;
