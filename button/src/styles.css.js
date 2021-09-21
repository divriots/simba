import { css } from '~/core';
import { borderRadiusMixin } from '~/borders';
import { coolGray } from '~/colors';
import { typographyMixin } from '~/typography';
import { spacing } from '~/spacing';

export default css`
  :host {
    display: inline-block;
    cursor: pointer;
    background-color: var(--simba-color-primary-500);
    color: ${coolGray[50]};
    ${borderRadiusMixin()}
    ${typographyMixin('sans', 'base', 'medium')}
    padding: ${spacing['2.5']} ${spacing['4']};
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
    box-shadow: 0 0 1px 1px ${coolGray[300]};
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
    background-color: ${coolGray[100]};
  }

  :host([variation='outline']:active),
  :host([variation='text']:active) {
    background-color: ${coolGray[200]};
  }

  :host([variation='outline']:focus),
  :host([variation='text']:focus) {
    box-shadow: 0 0 1px 1px ${coolGray[300]},
      0 0 0 3px var(--simba-focus-ring-color);
  }

  :host([size='small']) {
    ${typographyMixin('sans', 'sm', 'medium')}
    padding: ${spacing['1.5']} ${spacing['3']};
  }

  :host([size='large']) {
    ${typographyMixin('sans', 'xl', 'medium')}
    padding: ${spacing['3']} ${spacing['5']};
  }

  :host([rounded]) {
    ${borderRadiusMixin('full')}
  }

  :host([disabled]) {
    filter: brightness(75%);
    pointer-events: none;
  }

  :host([disabled][variation='primary']),
  :host([disabled]:not([variation])) {
    background-color: var(--simba-color-primary-500);
  }

  ::slotted([slot='suffix']) {
    padding-left: 0.5rem;
  }

  ::slotted([slot='prefix']) {
    padding-right: 0.5rem;
  }

  :host([theme='dark'][variation='text']),
  :host([theme='dark'][variation='outline']) {
    color: ${coolGray[50]};
  }

  :host([theme='dark'][variation='text']:hover),
  :host([theme='dark'][variation='outline']:hover) {
    background-color: ${coolGray[700]};
  }

  :host([theme='dark'][variation='text']:active),
  :host([theme='dark'][variation='outline']:active) {
    background-color: ${coolGray[600]};
  }
`;
