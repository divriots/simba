# simba-starter

A [lion](https://lion-web.netlify.app/) based design system as a starter kit
for [Backlight](https://backlight.dev/), an all-in-one Design System platform,
design inspired by [TailwindCSS](https://tailwindcss.com/).

## [🔗 See it in action](https://backlight.dev/preview/5vtJtbY04aoD1dGKcsu1)

Click the "Edit" button to also see the source code in the Backlight editor.

## Features

- 🍴 Easy to fork and create your own variation using [Backlight](https://backlight.dev/)
- ⚒️ Interoperable, built on top of platform-standards, [works in any framework](https://custom-elements-everywhere.com/)
- 🌙 Darkmode out of the box
- 🦄 Theming capabilities, choose any color from Tailwind palette out of the box, with room for more!
- 📦 Available on NPM to extend or use directly

> In case you don't use Backlight.dev but use straight from NPM, refer to our [usage from NPM guide](./UsingNPM.md).

## Usage

### Duplicate in Backlight

This is the recommended way, as backlight gives you an all-in-one Design System platform.

In order to create your own project from this starter kit using Backlight, go to the [Backlight website](https://backlight.dev/) and sign up, request early access, or log in if you already have an account.

Make sure you have a Backlight Workspace, then go to [simba-starter on backlight](https://backlight.dev/edit/5vtJtbY04aoD1dGKcsu1) and click the **Duplicate** button in the top right corner, this will create a project based on this starter-kit for you.

```js
import { html } from '~/core';
import '~/button/simba-button.js';

export const templ = html`<simba-button>Submit</simba-button>`;
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

### Importing lion modules

At this moment, simba does not re-export everything from `@lion` just yet.
Everything from `@lion/core` is re-exported, meaning that you can import things like `html`, `LitElement`, etc. from `@divriots/simba-starter/core` or `~/core` locally.
This is recommended, because it avoids deduplication issues.

If you need to import from `@lion` directly, it's important that installations of lion and its dependencies are properly deduped.
In Backlight, this is taken care of for you on the backend, and you won't have to worry about it.
If you use `starter-simba` outside of Backlight, you will need to ensure that deduplication is handled, otherwise you will run into breaking bugs.
