import { LionInput } from '@lion/input';
import { LocalizeMixin, localize } from '@lion/localize';
import { ValidationFeedbackMixin } from '~/form-system';
import { defaultTheme } from '~/themes';
import styles from './styles.css.js';

export class SimbaInput extends LocalizeMixin(
  ValidationFeedbackMixin(LionInput)
) {
  static get localizeNamespaces() {
    return [
      {
        'simba-input': /** @param {string} locale */ (locale) => {
          switch (locale) {
            case 'nl-BE':
            case 'nl-NL':
              return import('./nl.js');
            default:
              return import('./en.js');
          }
        },
      },
      ...super.localizeNamespaces,
    ];
  }

  static get styles() {
    return [...super.styles, defaultTheme(), styles];
  }

  constructor() {
    super();
    this.setDefaultLabel();
  }

  setDefaultLabel() {
    function update() {
      this.label = localize.msg('simba-input:defaultLabel');
    }
    const boundUpdate = update.bind(this);

    localize.loadingComplete.then(() => {
      boundUpdate();
    });

    localize.addEventListener('localeChanged', () => {
      localize.loadingComplete.then(() => boundUpdate());
    });
  }
}
