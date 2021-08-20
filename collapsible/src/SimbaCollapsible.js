import { LionCollapsible } from '@lion/collapsible';
import { spacing } from '~/spacing';
import { SimbaCollapsibleButton } from './SimbaCollapsibleButton.js';
import styles from './styles.css.js';

const EVENT = {
  TRANSITION_END: 'transitionend',
  TRANSITION_START: 'transitionstart',
};

export class SimbaCollapsible extends LionCollapsible {
  static get properties() {
    return {
      transitioning: {
        type: Boolean,
        reflect: true,
      },
    };
  }

  static get styles() {
    return [...super.styles, styles];
  }

  constructor() {
    super();
    this.transitioning = false;
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.opened) {
      this.__addPadding();
    }
    this._contentNode.style.setProperty(
      'transition',
      'max-height 0.3s, padding 0.3s, opacity 0.3s'
    );
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    if (
      changedProperties.has('opened') &&
      this._invokerNode instanceof SimbaCollapsibleButton
    ) {
      this._invokerNode.opened = this.opened;
    }
  }

  toggle() {
    if (!this.transitioning) {
      super.toggle();
    }
  }

  async _showAnimation() {
    const expectedHeight = await this.__calculateHeight(this._contentNode);
    this._contentNode.style.setProperty('opacity', '1');
    this.__addPadding();
    await new Promise((resolve) => requestAnimationFrame(() => resolve()));
    this._contentNode.style.setProperty('max-height', expectedHeight);
    await this._waitForTransition();
  }

  async _hideAnimation() {
    if (this._contentHeight === '0px') {
      return;
    }
    ['opacity', 'padding-top', 'padding-bottom', 'max-height'].map((prop) =>
      this._contentNode.style.setProperty(prop, '0')
    );
    await this._waitForTransition();
  }

  _waitForTransition() {
    return new Promise((resolve) => {
      const transitionStarted = () => {
        this._contentNode.removeEventListener(
          EVENT.TRANSITION_START,
          transitionStarted
        );
        this.transitioning = true;
      };
      this._contentNode.addEventListener(
        EVENT.TRANSITION_START,
        transitionStarted
      );

      const transitionEnded = () => {
        this._contentNode.removeEventListener(
          EVENT.TRANSITION_END,
          transitionEnded
        );
        this.transitioning = false;
        resolve();
      };
      this._contentNode.addEventListener(EVENT.TRANSITION_END, transitionEnded);
    });
  }

  async __calculateHeight() {
    // remove max-height prop which triggers a render frame, only then compute and return content height
    this._contentNode.style.setProperty('max-height', '');
    await new Promise((resolve) => requestAnimationFrame(() => resolve()));
    const contentHeight = this._contentHeight;
    this._contentNode.style.setProperty('max-height', '0px');
    return contentHeight;
  }

  __addPadding() {
    this._contentNode.style.setProperty('padding-top', spacing['3.5'].cssText);
    this._contentNode.style.setProperty(
      'padding-bottom',
      spacing['3.5'].cssText
    );
  }
}
