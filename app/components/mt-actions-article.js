import Component from '@ember/component';
import { getOwner } from '@ember/application';

export default Component.extend({
  init() {
    this._super(...arguments);
    this.set('ENV', getOwner(this).resolveRegistration('config:environment'));
  },
  actions: {
    changePublishedStatus() {
      this.sendAction('changePublishedStatus', ...arguments);
    },
    deleteRecord() {
      this.sendAction('deleteRecord', ...arguments);
    }
  }
});
