import Ember from 'ember';
import ENV from "../config/environment";

import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  session: Ember.inject.service('session'),

  model() {
    return {
      email: ''
    };
  },
  actions: {
    requestPasswordChange() {
      const email = this.get('currentModel.email');

      if (!email) {
        console.log('email is required');
        return;
      }

      let headers = { Accept: 'application/json' };

      Ember.$.ajax({
        url: `${ENV.API_HOST}/acl/permission`,
        type: 'POST',
        headers: headers,
        data: {
          email: email
        }
      })
      .done( (result)=> {
        console.log('result>', result);
      });
      // .fail( (error)=> {
      //   console.log('er')
      // });

    }
  }
});