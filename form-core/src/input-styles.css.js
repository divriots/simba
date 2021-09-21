import { css } from '~/core';
import { borderRadiusMixin } from '~/borders';
import { coolGray } from '~/colors';
import { typographyMixin, weight } from '~/typography';
import { spacing } from '~/spacing';

export const inputStyles = css`
  :host {
    display: block;
  }

  ::slotted(*:not(simba-select-invoker)) {
    transition: var(--theme-color-transition),
      var(--theme-background-transition);
  }

  .input-group__container > .input-group__input ::slotted(.form-control) {
    border: 1px solid ${coolGray[300]};
    ${borderRadiusMixin('md')};
    ${typographyMixin('sans', 'sm')};
    padding: ${spacing['2']} ${spacing['3']};
    margin-top: ${spacing['1']};
    width: 100%;
  }

  .input-group__container > .input-group__input ::slotted(.form-control:focus),
  .input-group__container
    > .input-group__input
    ::slotted(.form-control:focus-visible) {
    outline: none;
    border-color: transparent;
    box-shadow: 0 0 0 2px var(--simba-color-primary-500);
  }

  ::slotted([slot='label']) {
    color: ${coolGray[700]};
    font-weight: ${weight['medium']};
  }

  ::slotted([slot='help-text']) {
    color: ${coolGray[500]};
    ${typographyMixin('sans', 'sm', 'normal')}
  }

  ::slotted(.form-control) {
    color: ${coolGray[900]};
  }

  :host([theme='dark']) ::slotted([slot='label']) {
    color: ${coolGray[100]};
  }

  :host([theme='dark']) ::slotted([slot='help-text']) {
    color: ${coolGray[300]};
  }

  :host([theme='dark'])
    ::slotted(.form-control:not([type='checkbox']):not([type='radio']):not([disabled])) {
    color: ${coolGray[100]};
    background-color: var(--simba-bg-color-dark);
  }

  :host([theme='dark'])
    ::slotted(.form-control:not([type='checkbox']):not([type='radio']):not(:focus)) {
    border-color: ${coolGray[400]};
  }

  :host([theme='dark']) ::slotted(.form-control)::placeholder {
    color: ${coolGray[500]};
  }

  :host([theme='dark'][disabled]) ::slotted(.form-control) {
    background-color: ${coolGray[600]};
    color: ${coolGray[400]};
  }

  :host([theme='dark'][disabled]) ::slotted([slot='label']) {
    color: ${coolGray[500]};
  }

  :host([theme='dark'][disabled]) ::slotted([slot='help-text']) {
    color: ${coolGray[600]};
  }
`;
