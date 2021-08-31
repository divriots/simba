import { dedupeMixin } from '~/core';
import { localize, LocalizeMixin } from '@lion/localize';
import '~/validation-feedback/simba-validation-feedback.js';

export const LocalizeLabelMixinImplementation = (superclass) =>
  class extends LocalizeMixin(superclass) {
    /**
     * @override FormControlMixin (lion)
     * Have to copy-override this getter because we actually
     * override the setter, and getters/setters always come in pairs
     */
    get label() {
      return (
        this.__label || (this._labelNode && this._labelNode.textContent) || ''
      );
    }

    /**
     * @param {string} newValue
     * @override FormControlMixin (lion)
     * Whenever label is set imperatively, check whether it
     * was done by our default localized label method.
     * Otherwise, it was done by the user and we should remember that.
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

    /**
     * Subclassers can always override this, e.g. make it do nothing
     * if the behavior is undesirable.
     */
    _updateLocalizedLabel() {
      this.__updatingLabelFromLocalize = true;
      this.label = localize.msg(`${this.tagName.toLowerCase()}:defaultLabel`);
      this._updateFeedbackComponent(); // new label means new feedback message
      this.__updatingLabelFromLocalize = false;
    }
  };

export const LocalizeLabelMixin = dedupeMixin(LocalizeLabelMixinImplementation);
