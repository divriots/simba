import { dedupeMixin } from '@open-wc/dedupe-mixin';
import { defaultTheme } from '~/themes';
import { LocalizeLabelMixin } from './LocalizeLabelMixin.js';
import { ValidationFeedbackMixin } from './ValidationFeedbackMixin.js';
import { FieldNameLowercaseMixin } from './FieldNameLowercaseMixin.js';
import { inputStyles } from './input-styles.css.js';

/**
 * Combines mixins that are applied to input fields
 */
export const InputMixinImplementation = (superclass) =>
  class extends LocalizeLabelMixin(
    ValidationFeedbackMixin(FieldNameLowercaseMixin(superclass))
  ) {
    static get styles() {
      return [...super.styles, defaultTheme(), inputStyles];
    }
  };

export const InputMixin = dedupeMixin(InputMixinImplementation);
