import { css } from '~/core';

export const family = {
  sans: css`'Inter var', ui-sans-serif, system-ui, -apple-system,
  BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans',
  sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
  'Noto Color Emoji'`,
  serif: css` ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif`,
  mono: css`ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
  'Liberation Mono', 'Courier New', monospace`,
};

// prettier-ignore
export const size = {
  xs: {
    size: css`0.75rem`,
    lineHeight: css`1rem`
  },
  sm: {
    size: css`0.875rem`,
    lineHeight: css`1.25rem`,
  },
  base: {
    size: css`1rem`,
    lineHeight: css`1.5rem`,
  },
  lg:{
    size: css`1.125rem`,
    lineHeight: css`1.75rem`,
  },
  xl:{
    size: css`1.25rem`,
    lineHeight: css`1.75rem`,
  },
  '2xl': {
    size: css`1.5rem`,
    lineHeight: css`2rem`,
  },
  '3xl': {
    size: css`1.875rem`,
    lineHeight: css`2.25rem`,
  },
  '4xl':{
    size:css`2.25rem` ,
    lineHeight:css`2.5rem` ,
  },
  '5xl':{
    size: css`3rem`,
    lineHeight: css`1`,
  },
  '6xl':{
    size:css`3.75rem` ,
    lineHeight: css`1`,
  },
  '7xl':{
    size: css`4.5rem`,
    lineHeight: css`1`,
  },
  '8xl':{
    size: css`6rem`,
    lineHeight: css`1`,
  },
  '9xl': {
    size: css`8rem`,
    lineHeight: css`1`,
  },
};

export const weight = {
  thin: css`100`,
  extralight: css`200`,
  light: css`300`,
  normal: css`400`,
  medium: css`500`,
  semibold: css`600`,
  bold: css`700`,
  extrabold: css`800`,
  black: css`900`,
};

export const typographyMixin = (_family, _size, _weight) => {
  if (!_family) {
    _family = 'sans';
  }

  if (!_size) {
    _size = 'base';
  }

  if (!_weight) {
    _weight = 'normal';
  }

  // prettier-ignore
  const output = css`font-family: ${family[_family]};
font-size: ${size[_size].size};
line-height: ${size[_size].lineHeight};
font-weight: ${weight[_weight]};`;

  return output;
};
