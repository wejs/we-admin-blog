import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

Ember.Controller.reopen({
  notifications: Ember.inject.service('notification-messages'),
  settings: Ember.inject.service('settings')
});

Ember.Route.reopen({
  notifications: Ember.inject.service('notification-messages'),
  settings: Ember.inject.service('settings')
});

export default App;
