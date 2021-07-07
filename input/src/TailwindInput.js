import { LionInput } from '@lion/input';
import { LocalizeMixin, localize } from '@lion/localize';
import { ValidationFeedbackMixin } from '~/form-system';
import { defaultTheme } from '~/themes';
import styles from './styles.css.js';

export class TailwindInput extends LocalizeMixin(
  ValidationFeedbackMixin(LionInput)
) {
  static get localizeNamespaces() {
    return [
      {
        'tailwind-input': /** @param {string} locale */ (locale) => {
          switch (locale) {
            case 'nl-BE':
            case 'nl-NL':
              return import('./translations/nl.js');
            default:
              return import('./translations/en.js');
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
      this.label = localize.msg('tailwind-input:defaultLabel');
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
