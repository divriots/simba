import { LionDialog } from '@lion/ui/dialog.js';

export class SimbaDialog extends LionDialog {
  _defineOverlayConfig() {
    return {
      ...super._defineOverlayConfig(),
      hidesOnOutsideClick: true,
    };
  }
}
