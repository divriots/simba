# Migration

## 0.4.0

Biggest change here is the (base) tokens:

- colors
- radii (previously borders)
- typography
- spacing

They have been simplified and the syntax has changed.

### Colors

#### Before

```js
import { coolGray } from '@divriots/starter-simba/colors';

coolGray[50]; // css`#F9FAFB`
```

#### After

```js
import { coolGray50 } from '@divriots/starter-simba/colors';
import { colors } from '@divriots/starter-simba/tokens';

coolGray50; // css`#F9FAFB`
colors.coolGray50; // css`#F9FAFB`
```

### Radii

#### Before

```js
import { borderRadiusMixin } from '@divriots/starter-simba/borders';

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
import { base } from '@divriots/starter-simba/colors';
import { radii } from '@divriots/starter-simba/tokens';

base; // css`0.25rem`
radii.base; // css`0.25rem`
```

### Typography

#### Before

```js
import { typographyMixin } from '@divriots/starter-simba/typography';

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
import { sizeXlSize } from '@divriots/starter-simba/typography';
import { typography } from '@divriots/starter-simba/tokens';

sizeXlSize; // css`1.25rem`
typography.sizeXlSize; // css`1.25rem`
```

### Spacing

#### Before

```js
import { spacing } from '@divriots/starter-simba/spacing';

spacing['4']; // css`1rem`
```

#### After

```js
import { s4 } from '@divriots/starter-simba/spacing';
import { spacing } from '@divriots/starter-simba/tokens';

s4; // css`1rem`
spacing.s4; // css`1rem`
```
