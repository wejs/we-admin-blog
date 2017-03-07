

import Ember from 'ember';

export default Ember.Route.extend({
  activate() {
    this._super();
    return window.Pace.restart();
  },
  deactivate() {
    this._super();
    return window.Pace.stop();
  }
});