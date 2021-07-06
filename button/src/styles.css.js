import { css } from '@lion/core';
import { rounded, roundedFull } from '~/borders';
import { coolGray } from '~/colors';

export default css`
  :host {
    background-color: var(--color-primary);
    color: var(--text-color-light);
    border-radius: ${rounded};
    /* TODO: tokenize */
    font-weight: 500;
    padding: 0.625rem 1rem;
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

  :host([type='tertiary']) {
    background-color: white;
    box-shadow: 0 0 1px 1px ${coolGray[300]};
    color: var(--text-color);
  }

  :host([type='tertiary']:hover) {
    background-color: ${coolGray[50]};
  }

  :host([type='tertiary']:active) {
    background-color: ${coolGray[100]};
  }

  :host([type='tertiary']:focus) {
    box-shadow: 0 0 1px 1px ${coolGray[300]}, 0 0 0 3px var(--focus-ring-color);
  }

  :host([size='small']) {
    /* TODO: tokenize */
    font-size: 0.875rem;
    line-height: 1.25rem;
    padding: 0.375rem 0.75rem;
  }

  :host([size='large']) {
    /* TODO: tokenize */
    font-size: 1.25rem;
    line-height: 1.75rem;
    padding: 0.75rem 1.25rem;
  }

  :host([rounded]) {
    border-radius: ${roundedFull};
  }

  :host([disabled]) {
    filter: brightness(75%);
  }

  :host(:not([type='secondary']):not([type='tertiary'])) {
    background-color: var(--color-primary);
  }

  ::slotted([slot='suffix']) {
    padding-left: 0.5rem;
  }

  ::slotted([slot='prefix']) {
    padding-right: 0.5rem;
  }
`;
