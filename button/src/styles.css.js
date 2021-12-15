import { css } from '~/core';
import { base, full } from '~/radii';
import {
  coolGray50,
  coolGray100,
  coolGray200,
  coolGray300,
  coolGray600,
  coolGray700,
} from '~/colors';
import {
  familySans,
  sizeBaseSize,
  sizeBaseLineHeight,
  weightMedium,
  sizeSmSize,
  sizeSmLineHeight,
  sizeXlSize,
  sizeXlLineHeight,
} from '~/typography';
import { s1_5, s2_5, s3, s4, s5 } from '~/spacing';

export default css`
  :host {
    display: inline-block;
    cursor: pointer;
    background-color: var(--simba-color-primary-500);
    color: ${coolGray50};
    border-radius: ${base};
    font-family: ${familySans};
    font-size: ${sizeBaseSize};
    line-height: ${sizeBaseLineHeight};
    font-weight: ${weightMedium};
    padding: ${s2_5} ${s4};
    transition: var(--theme-background-transition),
      var(--theme-color-transition);
  }

  :host(:hover) {
    background-color: var(--simba-color-primary-700);
  }

  :host(:active) {
    background-color: var(--simba-color-primary-800);
  }

  :host(:focus:not([disabled])),
  :host(:focus-visible) {
    box-shadow: 0 0 0 3px var(--simba-focus-ring-color);
    outline: none;
  }

  :host([variation='secondary']) {
    background-color: var(--simba-color-primary-200);
    color: var(--simba-color-primary-800);
  }

  :host([variation='secondary']:hover) {
    background-color: var(--simba-color-primary-100);
  }

  :host([variation='secondary']:active) {
    background-color: var(--simba-color-primary-50);
  }

  :host([variation='outline']),
  :host([variation='text']) {
    box-shadow: 0 0 1px 1px ${coolGray300};
    color: var(--simba-text-color);
  }

  :host([variation='outline']) {
    background-color: transparent;
  }

  :host([variation='text']) {
    background-color: transparent;
  }

  :host([variation='text']) {
    box-shadow: none;
  }

  :host([variation='outline']:hover),
  :host([variation='text']:hover) {
    background-color: ${coolGray100};
  }

  :host([variation='outline']:active),
  :host([variation='text']:active) {
    background-color: ${coolGray200};
  }

  :host([variation='outline']:focus),
  :host([variation='text']:focus) {
    box-shadow: 0 0 1px 1px ${coolGray300},
      0 0 0 3px var(--simba-focus-ring-color);
  }

  :host([size='small']) {
    font-size: ${sizeSmSize};
    line-height: ${sizeSmLineHeight};
    padding: ${s1_5} ${s3};
  }

  :host([size='large']) {
    font-size: ${sizeXlSize};
    line-height: ${sizeXlLineHeight};
    padding: ${s3} ${s5};
  }

  :host([rounded]) {
    border-radius: ${full};
  }

  :host([disabled]) {
    filter: brightness(75%);
    pointer-events: none;
  }

  :host([disabled][variation='primary']),
  :host([disabled]:not([variation])) {
    background-color: var(--simba-color-primary-500);
  }

  ::slotted([slot='suffix']),
  ::slotted([slot='prefix']) {
    box-sizing: content-box !important;
  }

  ::slotted([slot='suffix']) {
    padding-left: 0.5rem !important;
  }

  ::slotted([slot='prefix']) {
    padding-right: 0.5rem !important;
  }

  :host([theme='dark'][variation='text']),
  :host([theme='dark'][variation='outline']) {
    color: ${coolGray50};
  }

  :host([theme='dark'][variation='text']:hover),
  :host([theme='dark'][variation='outline']:hover) {
    background-color: ${coolGray700};
  }

  :host([theme='dark'][variation='text']:active),
  :host([theme='dark'][variation='outline']:active) {
    background-color: ${coolGray600};
  }
`;
