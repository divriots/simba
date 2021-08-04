import { dedupeMixin } from '@open-wc/dedupe-mixin';

const themeObserver = new MutationObserver((list) => {
  registeredComponents.forEach((comp) => {
    comp.theme = document.documentElement.getAttribute('theme');
  });
});
themeObserver.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ['theme'],
});

const registeredComponents = [];

/**
 * Sets internal theme property + attribute
 * when the theme on <html> element changes.
 * Then it is easy to style the component based on global theme:
 * css`
 *   :host([theme="dark"]) { ... }
 * `
 */
export const ThemeMixinImplementation = (superclass) =>
  class extends superclass {
    static get properties() {
      return {
        theme: { type: String, reflect: true },
      };
    }

    constructor() {
      super();
      registeredComponents.push(this);
      this.theme = document.documentElement.getAttribute('theme');
    }
  };

export const ThemeMixin = dedupeMixin(ThemeMixinImplementation);
