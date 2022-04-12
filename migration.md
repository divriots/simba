# Migration

## 0.7.0

Starter-simba has been renamed to Simba. There's a breaking change here since the NPM package name has changed, which means all your import paths will need to change as well.

For you as a consumer or subclasser, a simple find and replace of "starter-simba" -> "simba" should do the trick.

Furthermore, we also upgraded to the latest `@lion/core` which introduced a breaking change where Lion works without polyfill if possible.

[See the Lion changelog on this for more information](https://github.com/ing-bank/lion/blob/master/packages/core/CHANGELOG.md#minor-changes).

The summary is that Lion no longer automatically loads the scoped custom elements registry polyfill through `ScopedElementsMixin`, you need to load the polyfill yourself if you need scoped custom elements.

If you manually create elements with `createElement`, you need the following change:

```diff
-  const myButton = this.shadowRoot.createElement('simba-button');
+  const myButton = this.createScopedElement('simba-button');
```

## 0.6.0

Last breaking change (0.5.0) we introduced a changed saying "Fixed dependencies on @lion".
We fixed our dependencies on Lion inside Simba, because lion does so internally as well.
This way, we ensure users don't get duplicate installs when Lion releases a new version but internally another Lion packages is still depending on the older version.

However, the Lion team took another look at how this was working for its users and came to the conclusion that this approach is flawed.
We're better served if the versions are using carets (^), this will prevent lots of cases where duplicate installations are inevitable, and also allows users to import from Lion directly when using Simba.
For more information, [refer to Versioning docs](https://lion-web.netlify.app/docs/rationales/versioning/) in Lion.

What does this mean for you?

- Please do not use fixed NPM versions of Simba, just use `^`.
- This will allow importing directly from latest Lion without issues, again, using `^`
- Less likely to get these hard to troubleshoot bugs due to undeduped duplicate installations. `^`s, assuming semver is followed properly, are way more developer friendly, as it turns out.

We decided to release a breaking change (0.6.0) for this, just in case this dependency resolution is breaking somehow.
It's a bit unpredictable with this change whether it would break something for someone.
However, we expect that for 99% of cases it's a simple drop-in replacement and only requires you to put `^` carrets in your `package.json` for simba dependencies to reap the benefits of this change.

## 0.5.0

### Package exports

[Information about Package entry points](https://nodejs.org/api/packages.html#package-entry-points)

We now have a package exports entry in our `package.json`.
This is to add better support for SSR which uses Node.js module resolution rather than the browser's algorithm.
One example is that in Node.js a path like `foo/bar` doesn't automatically resolve to `foo/bar/index.js`.

Another big advantage of package exports is pinning down explicitly where consumers can import from, increasing reliability and making explicit our public and private APIs. We can now change our file locations or edit filenames without being worried that some consumer was relying on it through an import we did not intend.

For named imports, use:

```js
import { Foo } from '@divriots/simba';
```

For named imports from specific simba packages, use:

```js
import { Bar } from '@divriots/simba/input';
```

For custom elements definitions, use:

```js
import '@divriots/simba/input/define';
```

When a package exports multiple custom elements, the `define` entrypoint will define all of them.
In case you only need a specific one, for example a `checkbox` but not the `checkbox-group` or `checkbox-indeterminate`, use:

```js
import '@divriots/simba/checkbox/define-checkbox';
```

> Directly importing private API will no longer be supported if you use tools that correctly respect package `exports`, hence the breaking change:

```js
import { NotYours } from '@divriots/simba/private/index.js'; // no longer possible in tools respecting our package.json exports entry
```

### Fixed dependencies on @lion

Dependencies on `@lion` are now fixed instead of using a caret. This is due to the fact that Lion also internally fixes dependencies on itself.
Not doing this could result in multiple undedupable installations of things like `@lion/core` or `@lion/form-core` resulting in fatal errors.
The reason the installations would be undedupable because e.g. simba would rely on `^0.5.3` of `@lion/form-core` which would resolve to for example `0.5.5`, whereas
internally lion would also rely on this package but with a fixed `0.5.3` meaning NPM would not dedupe the `0.5.3` installation to the `0.5.5` installation.

Furthermore, not fixing our dependencies on `@lion` may result in different versions of `@lion` for the same version of `@divriots/simba`, causing the scenario of "it works for me but not for you but we have the same version of simba".

## 0.4.0

Biggest change here is the (base) tokens:

- colors
- radii (previously borders)
- typography
- spacing

They have been simplified and the syntax has changed.

We also added a breaking change where CSS rules inside ::slotted selectors now use !important.

### !important

Due to an implementation detail of `::slotted` selector in combination with global stylesheets, we've had to put `!important` for many CSS rules for slotted elements.
This is necessary for them to have higher specificity than selectors in stylesheets from the outside.

For more info, read our [Rationale](./README.md)

This will mean that if you extend Simba components and write your own CSS overrides in `::slotted` selectors, you will have to use `!important` to override Simba's base styles.

### Colors

#### Before

```js
import { coolGray } from '@divriots/simba/colors';

coolGray[50]; // css`#F9FAFB`
```

#### After

```js
import { coolGray50 } from '@divriots/simba/colors';
import { colors } from '@divriots/simba/tokens';

coolGray50; // css`#F9FAFB`
colors.coolGray50; // css`#F9FAFB`
```

### Radii

#### Before

```js
import { borderRadiusMixin } from '@divriots/simba/borders';

/**
 * css`
 *   border-radius-top-left: 0.25rem;
 *   border-radius-bottom-left: 0.25rem;
 *   border-radius-top-right: 0;
 *   border-radius-bottom-right: 0;
 * `
 */
borderRadiusMixin('', 'l');
```

##### After

You just get the value now, the corners you are now responsible for yourself.
This is more simple and more descriptive.

```js
import { base } from '@divriots/simba/colors';
import { radii } from '@divriots/simba/tokens';

base; // css`0.25rem`
radii.base; // css`0.25rem`
```

### Typography

#### Before

```js
import { typographyMixin } from '@divriots/simba/typography';

/**
 * css`
 *   font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
 *   font-weight: 500;
 *   line-height: 1.5rem;
 *   font-size: 1rem;
 * `
 */
typographyMixin('mono', 'base', 'medium');
```

#### After

You just get the value now, the font CSS rules you are now responsible for yourself.
This is more simple and more descriptive.

```js
import { sizeXlSize } from '@divriots/simba/typography';
import { typography } from '@divriots/simba/tokens';

sizeXlSize; // css`1.25rem`
typography.sizeXlSize; // css`1.25rem`
```

### Spacing

#### Before

```js
import { spacing } from '@divriots/simba/spacing';

spacing['4']; // css`1rem`
```

#### After

```js
import { s4 } from '@divriots/simba/spacing';
import { spacing } from '@divriots/simba/tokens';

s4; // css`1rem`
spacing.s4; // css`1rem`
```
