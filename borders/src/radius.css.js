import { css } from '~/core';

export const borderRadiusMixin = (size, corner) => {
  if (!size) {
    size = '';
  }

  if (!corner) {
    corner = '';
  }

  const sizeMap = {
    none: css`0`,
    sm: css`0.125rem`,
    '': css`0.25rem`,
    md: css`0.375rem`,
    lg: css`0.5rem`,
    xl: css`0.75rem`,
    '2xl': css`1rem`,
    '3xl': css`1.5rem`,
    full: css`9999px`,
  };

  let cornerMap = {
    '': [css`border-radius`],
    tl: [css`border-top-left-radius`],
    tr: [css`border-top-right-radius`],
    bl: [css`border-bottom-left-radius`],
    br: [css`border-bottom-right-radius`],
  };

  cornerMap = {
    ...cornerMap,
    t: [...cornerMap['tl'], ...cornerMap['tr']],
    b: [...cornerMap['bl'], ...cornerMap['br']],
    l: [...cornerMap['tl'], ...cornerMap['bl']],
    r: [...cornerMap['tr'], ...cornerMap['br']],
  };

  let cornersToApplyZero = [];
  if (corner) {
    // If corner is specified, get a list of the corners
    // that were not specified by "corner" arg, so we can
    // apply a border-radius of 0 to those corners
    cornersToApplyZero = [
      css`border-top-left-radius`,
      css`border-top-right-radius`,
      css`border-bottom-left-radius`,
      css`border-bottom-right-radius`,
    ].filter(
      (cssDecl) =>
        !cornerMap[corner].find((decl) => decl.cssText === cssDecl.cssText)
    );
  }

  // prettier-ignore
  const output = [
    ...cornerMap[corner].map((corn) =>
      css`${corn}: ${sizeMap[size]};`
    ),
    ...cornersToApplyZero.map((corn) =>
      css`${corn}: ${sizeMap['none']};`
    ),
  ].reduce((acc, curr) => css`${acc}
${curr}`);

  return output;
};
