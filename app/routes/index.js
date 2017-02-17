import Ember from 'ember';
import ENV from "../config/environment";

import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  ajax: Ember.inject.service(),

  model() {

    return Ember.RSVP.hash({
      articleCount: this.get('ajax')
        .request(`${ENV.API_HOST}/article/count`)
        .then((json) => json.count ),
      unPublishedArticles: this.get('store').query('article', {
        published: false
      }),
      newUsers: this.get('ajax')
        .request(`${ENV.API_HOST}/user?limit=10`)
        .then((json) => json ),
    });
  }
});