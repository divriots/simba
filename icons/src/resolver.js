import { icons } from '@lion/icon';

function resolveSimbaIcons(iconset, name) {
  switch (iconset) {
    case 'alerts':
      return import('./alerts-index.js').then((module) => module[name]);
    case 'arrows':
      return import('./arrows-index.js').then((module) => module[name]);
    default:
      throw new Error(`Unknown iconset ${iconset}`);
  }
}

icons.addIconResolver('simba', resolveSimbaIcons);
