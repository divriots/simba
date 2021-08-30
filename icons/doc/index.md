# Icons

Icon resolution manager. Ensures icons are bundled into iconsets and asynchronously loaded for performance.

```js script
import { html } from '~/core'
import '~/doc-styles';
import '../simba-icon.js';
```

## Adding a resolver

```js
import { icons } from '@lion/icon';

function resolveSimbaIcons(iconset, name) {
  switch (iconset) {
    case 'alerts':
      return import('./alerts/index.js').then((module) => module[name]);
    default:
      throw new Error(`Unknown iconset ${iconset}`);
  }
}

icons.addIconResolver('simba', resolveSimbaIcons);
```

Where this `index.js` re-exports svgs inside lit templates from the different `.svg.js` files.

To load an icon:

```js preview-story
export const simbaIcon = () => html`<simba-icon icon-id="simba:alerts:error"></simba-icon>`;
```
