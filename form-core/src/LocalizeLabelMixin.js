import { dedupeMixin } from '~/core';
import { localize, LocalizeMixin } from '@lion/localize';
import '~/validation-feedback/simba-validation-feedback.js';

export const LocalizeLabelMixinImplementation = (superclass) =>
  class extends LocalizeMixin(superclass) {
    get label() {
      return (
        this.__label || (this._labelNode && this._labelNode.textContent) || ''
      );
    }

    /**
     * @param {string} newValue
     */
    set label(newValue) {
      if (!this.__updatingLabelFromLocalize && newValue) {
        this.__userUpdatedLabelImperatively = true;
      }
      const oldValue = this.label;
      /** @type {string} */
      this.__label = newValue;
      this.requestUpdate('label', oldValue);
    }

    async onLocaleUpdated() {
      super.onLocaleUpdated();
      // Only update label with localize default label if
      // user has not imperatively set label or declaratively through a slottable
      if (
        !this.__userUpdatedLabelImperatively &&
        this._isPrivateSlot('label')
      ) {
        this._updateLocalizedLabel();
      }
    }

    _updateLocalizedLabel() {
      this.__updatingLabelFromLocalize = true;
      this.label = localize.msg(`${this.tagName.toLowerCase()}:defaultLabel`);
      this._updateFeedbackComponent(); // new label means new feedback message
      this.__updatingLabelFromLocalize = false;
    }
  };

export const LocalizeLabelMixin = dedupeMixin(LocalizeLabelMixinImplementation);
