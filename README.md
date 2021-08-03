# simba-starter

A [lion](https://lion-web.netlify.app/) based design system as a starter kit
for [Backlight](https://backlight.dev/), an all-in-one Design System platform,
design inspired by [TailwindCSS](https://tailwindcss.com/).

## [🔗 See it in action](https://backlight.dev/preview/5vtJtbY04aoD1dGKcsu1)

Click the "Edit" button to also see the source code in the Backlight editor.

## Features

- 🍴 Easy to fork and create your own variation using [Backlight](https://backlight.dev/)
- 📦 Available on NPM to extend or use directly
- 🌙 Darkmode out of the box
- 🦄 Theming capabilities, choose any color from Tailwind palette out of the box, with room for more!

## Usage

Importing a component to extend:

```js
import { SimbaButton } from '@divriots/starter-simba/button';

class NalaButton extends SimbaButton {}
```

Using a component directly in your application

```html
<head>
  <script type="module" src="@divriots/starter-simba/button/simba-button.js"></script>
</head> 
<body>
  <simba-button>Submit</simba-button>
</body>
```

or in JS using lit template:

```js
import { html } from '@divriots/starter-simba/core';
import '@divriots/starter-simba/button/simba-button.js';

export const templ = html`<simba-button>Submit</simba-button>`;
```

### Backlight

This is the recommended way, as backlight gives you an all-in-one Design System platform.

In order to create your own project from this starter kit using Backlight, go to the [Backlight website](https://backlight.dev/) and sign up, request early access, or log in if you already have an account.

Make sure you have a Backlight Workspace, then go to [simba-starter on backlight](https://backlight.dev/edit/5vtJtbY04aoD1dGKcsu1) and click the **Duplicate** button in the top right corner, this will create a project based on this starter-kit for you.

### NPM

If you want to use simba-starter directly in your application, or extend it without using Backlight, this is possible as simba-starter is published to NPM.

```sh
npm i @divriots/starter-simba --save
```

## Contributing

See our [Contribution Guidelines](./CONTRIBUTING.md)

## Rationales

### Types

Lion comes with type definition files and can be used in TypeScript. At the moment, simba-starter does not come with types out of the box just yet, but as this starter-kit progresses, we may add them, either by converting the project to Typescript or by using JSDocs similar to Lion's setup.

### Tests

Lion comes with thousands of tests already, so 95% of the functionality that simba relies on is quite thoroughly unit-tested already. That said, simba adds opinionated extensions on top of lion that are not tested as of now. This will likely be added later and contributions are of course welcome.

### Docs

For documentation, we opt for [MDJS](https://rocket.modern-web.dev/docs/markdown-javascript/overview/), Markdown Javascript. This is markdown files with custom codeblock syntaxes to allow for interactive demos, right in the middle of your written documentation. We believe this is a good way to showcase components, as it is both narrative and live-demo-based. If you use Backlight, `MDJS` integration comes out of the box, so you can go ahead and start writing your MDJS-markdown files straight away without any setup!

### Structure

In the `studio.config.json` we define the structure of this starter-kit, which basically consists of four sections:

- Tokens, values such as colors and spacings, needed to construct and maintain the design system and components
- Components, lion-based UI components
- Infrastructure, utilities and mixins used across multiple components.
- Docs, any utilities used to style the documentation in Backlight or add functionality.

### Importing from @lion

At this moment, simba does not re-export everything from `@lion`, meaning that you might have to import from `@lion` directly, e.g. for `LitElement` or for `localize`. It's important that installation of direct dependencies such as `@lion` or `lit` are properly deduped. In Backlight, `Packd` takes care of this for you on the backend, and you won't have to worry about it. If you use `starter-simba` outside of Backlight, you will need to ensure that deduplication is handled, otherwise you will run into breaking bugs.

#### Example scenario

```js
/**
 * @lion/core is installed as a transitive dependency 
 * of @divriots/starter-simba as well as a direct dependency
 * of your application.
 * 
 * That could lead to having two versions:
 * - @lion/core -> v0.2.0 (your direct dependency)
 * - @lion/core -> v0.3.0 (transitive from simba)
 * 
 * Which will lead to potentially [object Object] rendered in the browser
 * 
 * NPM will not dedupe this because below v1, minors are 
 * potentially considered breaking, so incompatible
 * 
 * You'll have to upgrade your direct dependency to 0.3.0 manually
 * to resolve this.
 */ 
import { html } from '@lion/core';
```

With Backlight, you shouldn't fall into this trap, as it will always ensure the latest version is installed, or the version that is already in the Packd browser cache, so the versions shouldn't diverge.
