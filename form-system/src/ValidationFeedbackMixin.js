import { DefaultSuccess } from '@lion/form-core';
import { dedupeMixin } from '@open-wc/dedupe-mixin';
import '~/validation-feedback/tailwind-validation-feedback.js';

export const ValidationFeedbackMixinImplementation = (superclass) =>
  class extends superclass {
    static get validationTypes() {
      return ['error', 'warning', 'success', 'info'];
    }

    constructor() {
      super();
      this.defaultValidators.push(new DefaultSuccess());
    }

    get slots() {
      return {
        ...super.slots,
        feedback: () => {
          const feedbackEl = document.createElement(
            'tailwind-validation-feedback'
          );
          return feedbackEl;
        },
      };
    }
  };

export const ValidationFeedbackMixin = dedupeMixin(
  ValidationFeedbackMixinImplementation
);
