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
