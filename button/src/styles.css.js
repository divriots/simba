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

  :host(:focus) {
    box-shadow: 0 0 0 3px var(--focus-ring-color);
    outline: none;
  }

  :host([type='secondary']) {
    background-color: var(--color-primary-light);
    color: var(--color-primary-darker);
  }

  :host([type='secondary']:hover) {
    background-color: var(--color-primary-lighter);
  }

  :host([type='secondary']:active) {
    background-color: var(--color-primary-lightest);
  }

  :host([type='tertiary']),
  :host([type='text']) {
    background-color: transparent;
    box-shadow: 0 0 1px 1px ${coolGray[300]};
    color: var(--text-color);
  }

  :host([type='text']) {
    box-shadow: none;
  }

  :host([type='tertiary']:hover),
  :host([type='text']:hover) {
    background-color: ${coolGray[50]};
  }

  :host([type='tertiary']:active),
  :host([type='text']:active) {
    background-color: ${coolGray[100]};
  }

  :host([type='tertiary']:focus),
  :host([type='text']:focus) {
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

  :host(:not([type='secondary']):not([type='tertiary']):not([type='text'])) {
    background-color: var(--color-primary);
  }

  ::slotted([slot='suffix']) {
    padding-left: 0.5rem;
  }

  ::slotted([slot='prefix']) {
    padding-right: 0.5rem;
  }
`;
