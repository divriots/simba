import { dedupeMixin } from '~/core';
import { localize, LocalizeMixin } from '@lion/localize';
import '~/validation-feedback/simba-validation-feedback.js';

export const LocalizeLabelMixinImplementation = (superclass) =>
  class extends LocalizeMixin(superclass) {
    async onLocaleUpdated() {
      super.onLocaleUpdated();
      this.label = localize.msg(`${this.tagName.toLowerCase()}:defaultLabel`);
      this._updateFeedbackComponent(); // new label means new feedback message
    }
  };

export const LocalizeLabelMixin = dedupeMixin(LocalizeLabelMixinImplementation);
