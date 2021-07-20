import { dedupeMixin } from '@open-wc/dedupe-mixin';
import { localize, LocalizeMixin } from '@lion/localize';
import '~/validation-feedback/simba-validation-feedback.js';

export const LocalizeLabelMixinImplementation = (superclass) =>
  class extends LocalizeMixin(superclass) {
    async onLocaleUpdated() {
      await localize.loadingComplete.then(() => {
        this.label = localize.msg(`${this.tagName.toLowerCase()}:defaultLabel`);
      });
    }
  };

export const LocalizeLabelMixin = dedupeMixin(LocalizeLabelMixinImplementation);
