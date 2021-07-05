import { css } from '@lion/core';

export const defaultStyles = css`
  :host {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 3.6rem;
    min-width: 3.6rem;
    margin: 0;
    padding: 0.7rem 1.6rem;
    background: var(--p-surface);
    box-shadow: var(--p-button-drop-shadow);
    border-radius: var(--p-border-radius-base);
    color: var(--p-text);
    border: 1px solid var(--p-border-neutral-subdued);
    border-top-color: var(--p-border-subdued);
    border-bottom-color: var(--p-border-shadow-subdued);
    line-height: 1;
    text-align: center;
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
  }

  :host(:not([plain])) .button-content {
    width: 100%;
  }

  .button-content {
    font-size: 1.5rem;
    font-weight: var(--p-button-font-weight, 400);
    line-height: 1.6rem;
    text-transform: none;
    letter-spacing: normal;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 1px;
    min-height: 1px;
  }

  :host(:hover) {
    background: var(--p-action-secondary-hovered);
    outline: 0.1rem solid transparent;
  }

  :host(:focus) {
    box-shadow: var(--p-button-drop-shadow);
    outline: 0;
  }

  :host(:active) {
    background: var(--p-action-secondary-pressed);
    box-shadow: var(--p-button-drop-shadow);
  }

  :host::after {
    content: var(--p-non-null-content, none);
    position: absolute;
    z-index: 1;
    top: -0.2rem;
    right: -0.2rem;
    bottom: -0.2rem;
    left: -0.2rem;
    display: block;
    pointer-events: none;
    border-radius: var(--p-border-radius-base);
    box-shadow: 0 0 0 -0.2rem var(--p-focused);
  }

  :host(:focus):after {
    box-shadow: 0 0 0 0.2rem var(--p-focused);
    outline: 0.1rem solid transparent;
  }
`;

export const outlineStyles = css`
  :host([outline]) {
    background: transparent;
    border: 0.1rem solid var(--p-border);
    box-shadow: none;
    color: var(--p-text);
    position: relative;
  }

  :host([outline]:hover) {
    border: 0.1rem solid var(--p-border);
    box-shadow: none;
    background: var(--p-surface-hovered);
  }

  :host([outline]:focus) {
    border: 0.1rem solid var(--p-border);
    box-shadow: none;
  }

  :host([outline]:active) {
    border: 0.1rem solid var(--p-border);
    box-shadow: none;
    background: var(--p-surface-pressed);
  }

  :host([outline]:focus):after {
    box-shadow: 0 0 0 0.2rem var(--p-focused);
    outline: 0.1rem solid transparent;
  }

  :host([outline]:active):after {
    box-shadow: none;
  }
`;

export const plainStyles = css`
  :host([plain]) {
    margin: -0.7rem -0.8rem;
    padding-left: 0.8rem;
    padding-right: 0.8rem;
    background: transparent;
    border: 0;
    box-shadow: none;
    color: var(--p-interactive);
  }

  :host([plain]:active) {
    color: var(--p-interactive-pressed);
    background: transparent;
    box-shadow: none;
  }

  :host([plain]:focus),
  :host([plain]:hover) {
    color: var(--p-interactive-hovered);
    background: transparent;
    box-shadow: none;
  }

  :host([plain]:not([remove-underline]):focus),
  :host([plain]:not([remove-underline]):hover) {
    text-decoration: underline;
  }

  :host([plain]) .button-content {
    font-weight: 400;
    position: relative;
  }

  :host([plain]:focus):after {
    content: none;
  }

  :host([plain]) .button-content:after  {
    content: var(--p-non-null-content,none);
    position: absolute;
    z-index: 1;
    top: -.1rem;
    right: -.1rem;
    bottom: -.1rem;
    left: -.1rem;
    display: block;
    pointer-events: none;
    box-shadow: 0 0 0 -.1rem var(--p-focused);
    transition: box-shadow .1s var(--p-ease);
    border-radius: calc(var(--p-border-radius-base) + .1rem);
  }


  :host([plain]:focus:not(:active)) .button-content:after {
    box-shadow: 0 0 0 .2rem var(--p-focused);
    outline: .1rem solid transparent;
  }
`;

export const primaryStyles = css`
  :host([primary]) {
    --p-button-color: var(--p-action-primary);
    --p-button-text: var(--p-text-on-primary);
    --p-button-color-hover: var(--p-action-primary-hovered);
    --p-button-color-active: var(--p-action-primary-pressed);
    --p-button-color-depressed: var(--p-action-primary-depressed);
    position: relative;
    background: var(--p-button-color);
    border-width: 0;
    border-color: transparent;
    box-shadow: var(--p-button-drop-shadow), var(--p-button-inner-shadow);
    color: var(--p-button-text);
  }

  :host([primary]:hover) {
    background: var(--p-button-color-hover);
    border-color: transparent;
    color: var(--p-button-text);
  }

  :host([primary]:focus) {
    border-color: transparent;
    box-shadow: var(--p-button-drop-shadow), var(--p-button-inner-shadow);
  }

  :host([primary]:active) {
    background: var(--p-button-color-active);
    border-color: transparent;
    box-shadow: var(--p-button-drop-shadow), var(--p-button-inner-shadow);
  }

  :host([primary]:focus):after {
    content: var(--p-non-null-content,none);
    position: absolute;
    z-index: 1;
    top: -.1rem;
    right: -.1rem;
    bottom: -.1rem;
    left: -.1rem;
    display: block;
    pointer-events: none;
    box-shadow: 0 0 0 .2rem var(--p-focused);
    transition: box-shadow .1s var(--p-ease);
    border-radius: calc(var(--p-border-radius-base) + .1rem);
  }
`;

export const destructiveStyles = css`
  :host([destructive]) {
    --p-button-color: var(--p-action-critical);
    --p-button-text: var(--p-text-on-critical);
    --p-button-color-hover: var(--p-action-critical-hovered);
    --p-button-color-active: var(--p-action-critical-pressed);
    --p-button-color-depressed: var(--p-action-critical-depressed);
    position: relative;
    background: var(--p-button-color);
    border-width: 0;
    border-color: transparent;
    box-shadow: var(--p-button-drop-shadow), var(--p-button-inner-shadow);
    color: var(--p-button-text);
  }

  :host([destructive]:hover) {
    background: var(--p-button-color-hover);
    border-color: transparent;
    color: var(--p-button-text);
  }

  :host([destructive]:focus) {
    border-color: transparent;
    box-shadow: var(--p-button-drop-shadow),var(--p-button-inner-shadow);
  }

  :host([destructive]:active) {
    background: var(--p-button-color-active);
    border-color: transparent;
    box-shadow: var(--p-button-drop-shadow),var(--p-button-inner-shadow);
  }

  :host([destructive]:focus):after {
    content: var(--p-non-null-content,none);
    position: absolute;
    z-index: 1;
    top: -.1rem;
    right: -.1rem;
    bottom: -.1rem;
    left: -.1rem;
    display: block;
    pointer-events: none;
    box-shadow: 0 0 0 .2rem var(--p-focused);
    transition: box-shadow .1s var(--p-ease);
    border-radius: calc(var(--p-border-radius-base) + .1rem);
  }

  :host([destructive]:active):after {
    border: none;
    box-shadow: none;
  }
`;

export const sizeStyles = css`
  :host([size='slim']) {
    min-height: 2.8rem;
    padding: 0.3rem 1.2rem;
  }

  :host([size='large']) {
    min-height: 4.4rem;
    min-width: 4.4rem;
    padding: 1.1rem 2.4rem;
  }

  :host([size='large']) .button-content {
    font-size: 1.7rem;
    font-weight: var(--p-button-font-weight, 400);
    line-height: 2rem;
    text-transform: none;
    letter-spacing: normal;
  }
`;

export const fullWidthStyles = css`
  :host([full-width]) {
    display: flex;
    width: 100%;
  }
`;

export const textAlignStyles = css`
  :host([text-align='left']) {
    text-align: left;
  }

  :host([text-align='center']) {
    text-align: center;
  }

  :host([text-align='right']) {
    text-align: right;
  }
`;

export const disabledStyles = css`
  :host([disabled]) {
    transition: none;
    box-shadow: none;
    border-color: var(--p-border-disabled);
    background: var(--p-surface-disabled);
    color: var(--p-text-disabled);
    cursor: default;
    pointer-events: none;
  }

  :host([disabled][primary]) {
    background: var(--p-action-primary-disabled);
    color: var(--p-text-disabled);
    border-color: transparent;
    box-shadow: none;
  }

  :host([disabled][destructive]) {
    background: var(--p-action-critical-disabled);
    color: var(--p-text-disabled);
    box-shadow: none;
    border-color: transparent;
  }

  :host([disabled][outline]) {
    background: transparent;
    box-shadow: none;
    border: 0.1rem solid var(--p-border-disabled);
    color: var(--p-text-disabled);
  }

  :host([disabled][plain]) {
    color: var(--p-text-disabled);
    background: none;
  }

  :host([disabled][destructive][plain]) {
    color: var(--p-interactive-critical-disabled);
  }
`;
