import Ember from 'ember';

export default Ember.Controller.extend({
  settingsLoaded: Ember.computed.alias('settings.loaded')
});