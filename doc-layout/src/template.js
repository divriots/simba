import '@divriots/dockit-core/layout/dockit-layout.define.js';
import { breakpoints, styles } from '@divriots/dockit-core/layout';
import { setupSpeedyLinks } from '@divriots/dockit-core/speedy-links';
import { html, unsafeHTML } from '~/core';
import './color-toggler';
import logoSvg from './logo.svg?raw';

export const docLayoutTemplate = (content, context) => {
  setupSpeedyLinks({
    mapLinkUrlToModuleUrl: (url) => {
      return context.mapPageUrlToRenderModuleUrl(url);
    },
  });
  return html`
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
      .story_padded {
        line-height: initial;
      }
      .preview-story .story_padded {
        background-color: var(--simba-bg-color);
        color: var(--simba-text-color);
      }
      html.dark .preview-story .story_padded {
        background-color: var(--simba-bg-color-dark);
        color: var(--simba-text-color-dark);
      }
      .markdown-body {
        padding: 0;
        color: white;
      }
      .markdown-body code:not([class*='language-']),
      .markdown-body tt {
        background-color: transparent;
        border: none;
      }
    </style>
    <dockit-layout
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
      <div class="logo" slot="logo" aria-label="simba">
        ${unsafeHTML(logoSvg)}
      </div>
      <div class="topbar" slot="topbar">
        Themes:&nbsp;
        <color-toggler></color-toggler>
      </div>
      <div class="prose dark:prose-invert">${unsafeHTML(content)}</div>
    </dockit-layout>
  `;
};
