import { LionDialog } from '@lion/dialog';

export class SimbaDialog extends LionDialog {
  _defineOverlayConfig() {
    return {
      ...super._defineOverlayConfig(),
      hidesOnOutsideClick: true,
    };
  }
}
