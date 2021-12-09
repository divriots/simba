import '@divriots/dockit-core/mdjs-layout/define';
import { breakpoints, styles } from '@divriots/dockit-core/mdjs-layout';
import { html, unsafeHTML } from '~/core';
import './color-toggler';
import logoSvg from './logo.svg?raw';

export const docLayoutTemplate = (content, context) => html`
  <style>
    ${unsafeHTML(styles)} .logo {
      color: #f59e0b;
    }
    .topbar {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: right;
    }
    @media screen and (min-width: ${breakpoints.lg}) {
      .topbar {
        justify-content: unset;
      }
    }
    .preview-story .story_padded {
      background-color: var(--simba-bg-color);
      color: var(--simba-text-color);
    }
    html.dark .preview-story .story_padded {
      background-color: var(--simba-bg-color-dark);
      color: var(--simba-text-color-dark);
    }
  </style>
  <mdjs-layout
    .context="${context}"
    @color-scheme-change="${(event) => {
      if (event.detail.colorScheme === 'dark') {
        document.documentElement.classList.add('dark');
        document.documentElement.setAttribute('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.setAttribute('theme', 'light');
      }
    }}"
  >
    <div class="logo" slot="logo" aria-label="starter-simba">
      ${unsafeHTML(logoSvg)}
    </div>
    <div class="topbar" slot="topbar">
      Themes:&nbsp;
      <color-toggler></color-toggler>
    </div>
    <div class="prose dark:prose-dark">${unsafeHTML(content)}</div>
  </mdjs-layout>
`;
