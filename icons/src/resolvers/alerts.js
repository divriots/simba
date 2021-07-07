import { icons } from '@lion/icon';

function resolveTailwindIcons(iconset, name) {
  switch (iconset) {
    case 'alerts':
      return import('../alerts/index.js').then((module) => module[name]);
    default:
      throw new Error(`Unknown iconset ${iconset}`);
  }
}

icons.addIconResolver('tailwind', resolveTailwindIcons);
