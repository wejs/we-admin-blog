import Ember from 'ember';

import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  settings: Ember.inject.service('settings'),
	model() {
  	this.get('settings').set('currentOrganization', null);
	}
});
