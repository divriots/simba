import { css } from '~/core';
import { weightNormal } from '~/typography';
import { s4 } from '~/spacing';
import { coolGray50, coolGray100 } from '~/colors';

/**
 * Styles that apply to all choice groups:
 *  - Radio
 *  - Checkbox
 */
export const choiceBoxStyles = css`
  :host {
    margin: 6px 0;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
  }

  ::slotted([slot='label']) {
    cursor: pointer !important;
    margin-left: 6px !important;
    font-weight: ${weightNormal} !important;
  }

  :host([disabled]) {
    cursor: not-allowed;
    pointer-events: all;
    opacity: 0.6;
  }

  :host([disabled]) ::slotted([slot='label']) {
    cursor: not-allowed !important;
  }

  ::slotted(.form-control) {
    -webkit-appearance: none !important;
    -moz-appearance: none !important;
    width: ${s4} !important;
    height: ${s4} !important;
    outline: none !important;
    display: inline-block !important;
    vertical-align: top !important;
    position: relative !important;
    margin: 0 !important;
    cursor: pointer !important;
    border: 1px solid var(--border, var(--simba-color-primary-200)) !important;
    background: var(--background, ${coolGray50}) !important;
    transition: background 0.3s, border-color 0.3s, box-shadow 0.2s !important;
  }

  /**
   * When checked, change these CSS custom props to
   * dynamically change styles in other selectors
   */
  :host([indeterminate]) ::slotted(.form-control),
  ::slotted(.form-control:checked) {
    --background: var(--simba-color-primary-500);
    --border: var(--simba-color-primary-500);
    --duration-opacity: 0.3s;
    --duration-transform: 0.6s;
    --transform-ease: cubic-bezier(0.2, 0.85, 0.32, 1.2);
    --opacity: 1;
    --scale: 0.5;
  }

  ::slotted(.form-control:hover:not(:disabled):not(:checked)) {
    --border: var(--simba-color-primary-500);
  }

  ::slotted(.form-control:focus) {
    box-shadow: 0 0 0 2px var(--simba-color-primary-200) !important;
  }

  ::slotted(.form-control:disabled) {
    --background: var(--simba-color-primary-50);
    cursor: not-allowed !important;
    opacity: 0.9 !important;
  }

  ::slotted(.form-control:disabled:checked) {
    --background: var(--simba-color-primary-300);
    --border: var(--simba-color-primary-200);
  }

  ::slotted(.form-control):after {
    content: '' !important;
    display: block !important;
    position: absolute !important;
    transition: transform var(--duration-transform, 0.3s)
        var(--transform-ease, ease),
      opacity var(--duration-opacity, 0.2s) !important;
    opacity: var(--opacity, 0) !important;
    box-sizing: content-box !important;
  }

  :host([theme='dark']) ::slotted([slot='label']) {
    color: ${coolGray100} !important;
  }

  :host([theme='dark']) ::slotted(.form-control) {
    background: var(--background, var(--simba-bg-color-dark)) !important;
  }
`;
