import { DefaultSuccess } from '~/form-core';
import { dedupeMixin } from '~/core';
import '~/validation-feedback/define';

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
          const feedbackEl = this.createScopedElement(
            'simba-validation-feedback'
          );
          return feedbackEl;
        },
      };
    }
  };

export const ValidationFeedbackMixin = dedupeMixin(
  ValidationFeedbackMixinImplementation
);
