import { LitElement, html, css } from '~/core';
import { coolGray } from '~/colors';

const themeObserver = new MutationObserver(() => {
  registeredComponents.forEach((comp) => {
    comp.theme = document.documentElement.getAttribute('theme');
  });
});
themeObserver.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ['theme'],
});
const registeredComponents = [];

export class SimbaThemeToggler extends LitElement {
  static get properties() {
    return { theme: { type: String, reflect: true } };
  }

  static get styles() {
    return css`
      :host {
        cursor: pointer;
      }

      :host(:focus) {
        outline: none;

        border-radius: 12px;
      }

      :host(:focus) .container {
        border: 2px solid var(--color-primary-500);
      }

      .container {
        display: inline-flex;
        position: relative;
        overflow: hidden;
        border-radius: 12.5px;
        padding: 4px;
        border: 2px solid ${coolGray[700]};
        background-color: ${coolGray[50]};
      }

      .sun,
      .moon,
      .thumb {
        width: 18px;
        height: 18px;
        overflow: hidden;
      }

      .moon::selection,
      .sun::selection {
        color: ${coolGray[50]};
      }

      .sun,
      .moon {
        font-size: 16px;
        line-height: 17px;
        width: 20px;
        transition: all 0.2s ease-in-out;
        transform: rotate(0deg);
      }

      .sun {
        margin-right: 4px;
        margin-left: -3px;
      }

      :host([theme='dark']) .sun {
        opacity: 0;
        transform: rotate(40deg);
      }

      :host([theme='light']) .moon {
        opacity: 0;
        transform: rotate(-40deg);
      }

      :host([theme='light']) .thumb {
        right: 5px;
        background-color: #eeea1b;
        box-shadow: 0 0 0 2px #c8be25;
      }

      .thumb {
        right: calc(100% - 18px - 3px);
        transition: all 0.1s ease-in-out;
        background-color: ${coolGray[700]};
        box-shadow: 0 0 0 2px ${coolGray[900]};
        position: absolute;
        border-radius: 50%;
      }

      .thumb {
        width: 16px;
        height: 16px;
        margin-top: 1px;
      }
    `;
  }

  constructor() {
    super();
    this.boundKeyDown = this.keyDown.bind(this);
    this.boundToggle = this.toggle.bind(this);
    registeredComponents.push(this);
  }

  connectedCallback() {
    super.connectedCallback();
    this.setup();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('keydown', this.boundKeyDown);
    this.removeEventListener('click', this.boundToggle);
  }

  toggle() {
    if (document.documentElement.getAttribute('theme') === 'light') {
      this.setTheme('dark', true);
    } else {
      this.setTheme('light', true);
    }
  }

  setTheme(theme, store = false) {
    this.theme = theme;
    document.documentElement.setAttribute('theme', theme);
    if (store) {
      localStorage.setItem('simba-theme', theme);
    }
  }

  setup() {
    this.setupInitialTheme();

    this.setAttribute('tabindex', 0);
    this.setAttribute('aria-label', 'Site theme toggler, dark and light');

    this.addEventListener('keydown', this.boundKeyDown);
    this.addEventListener('click', this.boundToggle);
  }

  setupInitialTheme() {
    const userPrefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    // Prio is: 1) saved preference 2) browser/os preference 3) default 'light'
    this.theme =
      localStorage.getItem('simba-theme') ||
      (userPrefersDark ? 'dark' : 'light');

    // Respond to user preference changes on OS and Browser
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (ev) => {
        // follow OS preference, by removing from preference local storage
        localStorage.removeItem('simba-theme');

        if (ev.matches) {
          this.setTheme('dark');
        } else {
          this.setTheme('light');
        }
      });

    // Delay this by animation frame so it is not transitioning things on initial render
    requestAnimationFrame(() => {
      document.documentElement.style.setProperty(
        '--simba-theme-transition',
        'background 0.3s ease-in-out, color 0.6s ease-in-out, fill 0.6s ease-in-out'
      );
    });
  }

  keyDown(ev) {
    switch (ev.key) {
      case 'Enter':
      case ' ':
        ev.preventDefault();
        this.toggle();
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        ev.preventDefault();
        this.setTheme('dark', true);
        break;
      case 'ArrowRight':
      case 'ArrowDown':
        ev.preventDefault();
        this.setTheme('light', true);
        break;
      /* no default */
    }
  }

  render() {
    return html`
      <div class="container">
        <div class="sun">☀️</div>
        <div class="moon">🌚</div>
        <div class="thumb"></div>
      </div>
    `;
  }
}
