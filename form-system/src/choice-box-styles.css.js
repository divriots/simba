import { css } from '@lion/core';
import { weight } from '~/typography';
import { spacing } from '~/spacing';
import { coolGray } from '~/colors';

/**
 * Styles that apply to all choice groups:
 *  - Radio
 *  - Checkbox
 */
export const choiceBoxStyles = css`
  :host {
    margin: 6px 0;
    align-items: center;
  }

  ::slotted([slot='label']) {
    cursor: pointer;
    margin-left: 6px;
    font-weight: ${weight['normal']};
  }

  :host([disabled]) ::slotted([slot='label']) {
    cursor: not-allowed;
    pointer-events: all;
    opacity: 0.6;
  }

  ::slotted(.form-control) {
    -webkit-appearance: none;
    -moz-appearance: none;
    width: ${spacing['4']};
    height: ${spacing['4']};
    outline: none;
    display: inline-block;
    vertical-align: top;
    position: relative;
    margin: 0;
    cursor: pointer;
    border: 1px solid var(--border, var(--color-primary-light));
    background: var(--background, ${coolGray[50]});
    transition: background 0.3s, border-color 0.3s, box-shadow 0.2s;
  }

  /**
   * When checked, change these CSS custom props to
   * dynamically change styles in other selectors
   */
  :host([indeterminate]) ::slotted(.form-control),
  ::slotted(.form-control:checked) {
    --background: var(--color-primary);
    --border: var(--color-primary);
    --duration-opacity: 0.3s;
    --duration-transform: 0.6s;
    --transform-ease: cubic-bezier(0.2, 0.85, 0.32, 1.2);
    --opacity: 1;
    --scale: 0.5;
  }

  ::slotted(.form-control:hover:not(:disabled):not(:checked)) {
    --border: var(--color-primary);
  }

  ::slotted(.form-control:focus) {
    box-shadow: 0 0 0 2px var(--color-primary-light);
  }

  ::slotted(.form-control:disabled) {
    --background: var(--color-primary-lightest);
    cursor: not-allowed;
    opacity: 0.9;
  }

  ::slotted(.form-control:disabled:checked) {
    --background: var(--color-primary-disabled);
    --border: var(--color-primary-light);
  }

  ::slotted(.form-control):after {
    content: '';
    display: block;
    position: absolute;
    transition: transform var(--duration-transform, 0.3s)
        var(--transform-ease, ease),
      opacity var(--duration-opacity, 0.2s);
    opacity: var(--opacity, 0);
  }
`;
