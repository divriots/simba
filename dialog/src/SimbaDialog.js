import { LionDialog } from '@lion/dialog';

export class SimbaDialog extends LionDialog {
  /**
   * Override the backdrop background-color for dark-mode.
   * TODO: File issue on lion, as this way of doing it is not
   * very developer-friendly.
   */
  _setupOverlayCtrl() {
    super._setupOverlayCtrl();
    const globalStyleNode = document.querySelector(
      'style[data-global-overlays]'
    );
    globalStyleNode.sheet.insertRule(
      'html[theme="dark"] .global-overlays .global-overlays__backdrop { background-color: #000 }',
      globalStyleNode.sheet.cssRules.length
    );
  }

  _defineOverlayConfig() {
    return {
      ...super._defineOverlayConfig(),
      hidesOnOutsideClick: true,
    };
  }
}
