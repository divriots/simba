import { css } from '~/core';
// import { tokens as t } from '../index.js'; // for some reason this doesn't work anymore
import * as t from './_button.js';

export default css`
  :host {
    display: inline-block;
    cursor: pointer;
    background-color: ${t.backgroundColor};
    color: ${t.contentColor};
    border-radius: ${t.borderRadius};
    font-family: ${t.contentFamily};
    font-size: ${t.contentSize};
    line-height: ${t.contentLineHeight};
    font-weight: ${t.contentWeight};
    padding: ${t.paddingVertical} ${t.paddingHorizontal};
    transition: var(--theme-background-transition),
      var(--theme-color-transition);
  }

  :host(:hover) {
    background-color: ${t.statesHoverBackgroundColor};
  }

  :host(:active) {
    background-color: ${t.statesActiveBackgroundColor};
  }

  :host(:focus:not([disabled])),
  :host(:focus-visible) {
    box-shadow: ${t.statesFocusBorderShadowSize}
      ${t.statesFocusBorderShadowColor};
    outline: none;
  }

  :host([variation='secondary']) {
    background-color: ${t.variantsSecondaryBackgroundColor};
    color: ${t.variantsSecondaryContentColor};
  }

  :host([variation='secondary']:hover) {
    background-color: ${t.statesHoverVariantsSecondaryBackgroundColor};
  }

  :host([variation='secondary']:active) {
    background-color: ${t.statesActiveVariantsSecondaryBackgroundColor};
  }

  :host([variation='outline']) {
    color: ${t.variantsOutlineContentColor};
  }

  :host([variation='text']) {
    color: ${t.variantsTextContentColor};
  }

  :host([variation='outline']) {
    box-shadow: ${t.variantsOutlineBorderShadowSize}
      ${t.variantsOutlineBorderShadowColor};
    background-color: ${t.variantsOutlineBackgroundColor};
  }

  :host([variation='text']) {
    background-color: ${t.variantsTextBackgroundColor};
  }

  :host([variation='outline']:hover) {
    background-color: ${t.statesHoverVariantsOutlineBackgroundColor};
  }

  :host([variation='text']:hover) {
    background-color: ${t.statesHoverVariantsTextBackgroundColor};
  }

  :host([variation='outline']:active) {
    background-color: ${t.statesActiveVariantsOutlineBackgroundColor};
  }

  :host([variation='text']:active) {
    background-color: ${t.statesActiveVariantsTextBackgroundColor};
  }

  :host([variation='outline']:focus) {
    box-shadow: ${t.statesFocusVariantsOutlineBorderShadowOneSize}
        ${t.statesFocusVariantsOutlineBorderShadowOneColor},
      ${t.statesFocusVariantsOutlineBorderShadowTwoSize}
        ${t.statesFocusVariantsOutlineBorderShadowTwoColor};
  }

  :host([variation='text']:focus) {
    box-shadow: ${t.statesFocusVariantsTextBorderShadowSize}
      ${t.statesFocusVariantsTextBorderShadowColor};
  }

  :host([size='small']) {
    font-size: ${t.sizesSmallContentSize};
    line-height: ${t.sizesSmallContentLineHeight};
    padding: ${t.sizesSmallPaddingVertical} ${t.sizesSmallPaddingHorizontal};
  }

  :host([size='large']) {
    font-size: ${t.sizesLargeContentSize};
    line-height: ${t.sizesLargeContentLineHeight};
    padding: ${t.sizesLargePaddingVertical} ${t.sizesLargePaddingHorizontal};
  }

  :host([rounded]) {
    border-radius: ${t.sizesRoundedBorderRadius};
  }

  :host([disabled]) {
    filter: ${t.statesDisabledFilter};
    pointer-events: none;
  }

  :host([disabled][variation='primary']),
  :host([disabled]:not([variation])) {
    background-color: ${t.statesDisabledBackgroundColor};
  }

  ::slotted([slot='suffix']),
  ::slotted([slot='prefix']) {
    box-sizing: content-box !important;
  }

  ::slotted([slot='suffix']) {
    padding-left: ${t.suffixPaddingLeft} !important;
  }

  ::slotted([slot='prefix']) {
    padding-right: ${t.prefixPaddingRight} !important;
  }

  :host([theme='dark'][variation='text']) {
    color: ${t.themeDarkVariantsTextContentColor};
  }

  :host([theme='dark'][variation='outline']) {
    color: ${t.themeDarkVariantsOutlineContentColor};
  }

  :host([theme='dark'][variation='text']:hover) {
    background-color: ${t.themeDarkStatesHoverVariantsTextBackgroundColor};
  }
  :host([theme='dark'][variation='outline']:hover) {
    background-color: ${t.themeDarkStatesHoverVariantsOutlineBackgroundColor};
  }

  :host([theme='dark'][variation='text']:active) {
    background-color: ${t.themeDarkStatesActiveVariantsTextBackgroundColor};
  }
  :host([theme='dark'][variation='outline']:active) {
    background-color: ${t.themeDarkStatesActiveVariantsOutlineBackgroundColor};
  }
`;
