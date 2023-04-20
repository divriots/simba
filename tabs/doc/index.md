# Tabs

Tabs component

```js script
import { html } from '~/core';
import '~/doc-styles';
import '../simba-tabs.js';
```

```js preview-story
export const main = () => html`
  <simba-tabs>
    <button slot="tab">Info</button>
    <p slot="panel">Info page with lots of information about us.</p>
    <button slot="tab">Work</button>
    <p slot="panel">Work page that showcases our work.</p>
  </simba-tabs>
`;
```
