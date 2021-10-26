# Themes

```js script
import { html } from '~/core';
import '~/doc-styles';
```

Simba comes with some cool themes out of the box, that can be configured on runtime, dynamically!

There's two types of themes:

- Dark/Light theme. This is a toggle between two states only, which can be configured by changing the `theme` attribute on the `html` element.
- Color theme. You can pick any color from the Tailwind color palette, and configure this as a global "JavaScript" theme setter.

Both of these have the opportunity to create UI abstractions on top of, in the docs we use such a UI menu for allowing to configure by the end user.

## Dark Theme

Simba components will respond to dark or light theme out of the box, without any setup required.

Changing the theme:

```js
document.documentElement.setAttribute('theme', 'dark'); // or 'light'
```

Storing the user preference can be done through localStorage:

```js
localStorage.setItem('theme-dark', 'dark'); // or 'light'
```

Setting the theme on initial load. If you want to prevent FART (Flash of inAccurate coloR Theme),
make sure this code loads before anything is rendered, for example by loading the script in the `<head>`.

```js
const userPrefersDark = window.matchMedia(
  '(prefers-color-scheme: dark)'
).matches;

const darkTheme =
  localStorage.getItem('theme-dark') || (userPrefersDark ? 'dark' : 'light');

document.documentElement.setAttribute('theme', darkTheme);
```

TODO: add docs on how to use ThemeMixin / SimbaThemeToggler element.

## Colors

Simba components are designed and built with variable color scheme in mind, you can find which color variations are available in our colors token documentation.

It uses CSS Custom Properties in order to ensure that components inherit these global colors and respond to changes.

Setting the theme:

```js
import { setTheme } from '~/themes';

setTheme('amber');
```

Getting the current theme:

```js
import { theme } from '~/themes';

console.log(theme);
```

## Custom Palettes

We also support setting the Simba theme to a custom palette.

The decision to make Simba easily themable without having to extend or fork the components started out as just being based on the "wow" factor of having a themable design system.
After watching a [talk by Louis Chenais about multi-brand design systems](https://www.youtube.com/watch?v=uiCGvhI7Vwo&ab_channel=DesignFriends-IntoDesignSystems), we realized this feature ties into "hybrid" design systems; a model that aims to incorporate elements of both the "global" brand and the "local" brand to give each brand maximum advantage. Imagine Microsoft with all of its products, they all have the same visual identity and components yet every product has its own primary colors.

After finding out there's actually many big corporations that fit this description, this theming "gimmick" is now considered a core feature of the design system.
It shows how a design system can be consumed by different sister/child companies without the need to extend or fork components, but by simply using public theming API.

```js
import { setTheme } from '~/themes';

setTheme('lime', {
  50: '#F7FEE7',
  100: '#ECFCCB',
  200: '#D9F99D',
  300: '#BEF264',
  400: '#A3E635',
  500: '#84CC16',
  600: '#65A30D',
  700: '#4D7C0F',
  800: '#3F6212',
  900: '#365314',
});
```

This will set the simba theme to a custom palette called "lime".

The strong recommendation here is to pick a hue and a saturation and then take value 50-900 for lightness.
For an accessible color palette you will likely need to adjust slightly to get the contrast you want, so keep that in mind.

[View full TailwindCSS color palette reference](https://tailwindcss.com/docs/customizing-colors#color-palette-reference)
