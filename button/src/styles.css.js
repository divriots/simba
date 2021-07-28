import { css } from '@lion/core';
import { borderRadiusMixin } from '~/borders';
import { coolGray } from '~/colors';
import { typographyMixin } from '~/typography';
import { spacing } from '~/spacing';

export default css`
  :host {
    display: inline-block;
    cursor: pointer;
    background-color: var(--color-primary);
    color: var(--text-color-light);
    ${borderRadiusMixin()}
    ${typographyMixin('sans', 'base', 'medium')}
    padding: ${spacing['2.5']} ${spacing['4']};
  }

  :host(:hover) {
    background-color: var(--color-primary-dark);
  }

  :host(:active) {
    background-color: var(--color-primary-darker);
  }

  :host(:focus:not([disabled])),
  :host(:focus-visible) {
    box-shadow: 0 0 0 3px var(--focus-ring-color);
    outline: none;
  }

  :host([variation='secondary']) {
    background-color: var(--color-primary-light);
    color: var(--color-primary-darker);
  }

  :host([variation='secondary']:hover) {
    background-color: var(--color-primary-lighter);
  }

  :host([variation='secondary']:active) {
    background-color: var(--color-primary-lightest);
  }

  :host([variation='outline']),
  :host([variation='text']) {
    box-shadow: 0 0 1px 1px ${coolGray[300]};
    color: var(--text-color);
  }

  :host([variation='outline']) {
    background-color: ${coolGray[50]};
  }

  :host([variation='text']) {
    background-color: transparent;
  }

  :host([variation='text']) {
    box-shadow: none;
  }

  :host([variation='outline']:hover),
  :host([variation='text']:hover) {
    background-color: ${coolGray[50]};
  }

  :host([variation='outline']:active),
  :host([variation='text']:active) {
    background-color: ${coolGray[100]};
  }

  :host([variation='outline']:focus),
  :host([variation='text']:focus) {
    box-shadow: 0 0 1px 1px ${coolGray[300]}, 0 0 0 3px var(--focus-ring-color);
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
  }

  :host(:not([variation='secondary']):not([variation='outline']):not([variation='text'])) {
    background-color: var(--color-primary);
  }

  ::slotted([slot='suffix']) {
    padding-left: 0.5rem;
  }

  ::slotted([slot='prefix']) {
    padding-right: 0.5rem;
  }
`;
