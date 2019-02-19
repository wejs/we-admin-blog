import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

import Controller from '@ember/controller';
import { inject } from '@ember/service';
import Route from '@ember/routing/route';
import { on } from '@ember/object/evented';
import $ from 'jquery';

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

Controller.reopen({
  notifications: inject('notification-messages'),
  settings: inject('settings'),
  session: inject('session'),
  i18n: inject()
});

Route.reopen({
  notifications: inject('notification-messages'),
  settings: inject('settings'),
  i18n: inject(),
  activate: function() {
    this._super.apply(this, arguments);
    window.scrollTo(0,0);
  },
  // pace loading on route change:
  activatePace: on('activate', function(){
    return window.Pace.restart();
  }),
  deactivatePace: on('deactivate', function() {
    return window.Pace.stop();
  })
});

// settup ember ajax for this project session store
if (config.environment === 'development') {
  $.ajaxSetup({
    crossDomain: true,
    xhrFields: {
      withCredentials: true
    }
  });
} else {
  $.ajaxSetup({
    xhrFields: {
      withCredentials: true
    }
  });
}

export default App;
