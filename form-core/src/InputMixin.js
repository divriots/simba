import { dedupeMixin } from '~/core';
import { ThemeMixin } from 'dark-theme-utils';
import { LocalizeLabelMixin } from './LocalizeLabelMixin.js';
import { ValidationFeedbackMixin } from './ValidationFeedbackMixin.js';
import { FieldNameLowercaseMixin } from './FieldNameLowercaseMixin.js';
import { inputStyles } from './input-styles.css.js';

/**
 * Combines mixins that are applied to input fields
 */
export const InputMixinImplementation = (superclass) =>
  class extends ThemeMixin(
    LocalizeLabelMixin(
      ValidationFeedbackMixin(FieldNameLowercaseMixin(superclass))
    )
  ) {
    static get styles() {
      return [...super.styles, inputStyles];
    }
  };

export const InputMixin = dedupeMixin(InputMixinImplementation);
