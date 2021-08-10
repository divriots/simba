import { dedupeMixin } from '~/core';

/**
 * Ensure that fieldName is made lowercase, which suits better inside
 * validation feedback messages.
 */
export const FieldNameLowercaseMixinImplementation = (superclass) =>
  class extends superclass {
    /**
     * Will be used in validation messages to refer to the current field
     * @type {string}
     */
    get fieldName() {
      return (this.__fieldName || this.label || this.name || '').toLowerCase();
    }

    /**
     * @param {string} value
     */
    set fieldName(value) {
      /** @type {string} */
      this.__fieldName = value;
    }
  };

export const FieldNameLowercaseMixin = dedupeMixin(
  FieldNameLowercaseMixinImplementation
);
