import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  notifications: Ember.inject.service('notification-messages'),

  model() {
    return Ember.RSVP.hash({
      space: {}
    });
  }
});