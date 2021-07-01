import React from 'react';
import { StyleShowcases } from '@divriots/dockit-react/style-showcases';
import '~/all/dist/all.css';

export const font_family = () => (
  <StyleShowcases
    prefix="--aria-font-family"
    showcaseComponent="text"
    styleKey="fontFamily"
  />
);

export const font_size = () => (
  <StyleShowcases
    prefix="--aria-font-size"
    showcaseComponent="text"
    styleKey="fontSize"
  />
);

export const font_weight = () => (
  <StyleShowcases
    prefix="--aria-font-weight"
    showcaseComponent="text"
    styleKey="fontWeight"
  />
);

export const letter_spacing = () => (
  <StyleShowcases
    prefix="--aria-letter-spacing"
    showcaseComponent="text"
    styleKey="letterSpacing"
  />
);

export const line_height = () => (
  <StyleShowcases
    prefix="--aria-line-height"
    showcaseComponent="text"
    styleKey="lineHeight"
  />
);
