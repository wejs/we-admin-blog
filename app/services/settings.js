import Ember from 'ember';
import ENV from "../config/environment";

export default Ember.Service.extend({
  store: Ember.inject.service('store'),
  session: Ember.inject.service('session'),
  data: null,

  accessToken: Ember.computed.alias('session.session.authenticated.access_token'),

  authenticatedUserId: Ember.computed.alias('session.session.authenticated.user.id'),
  user: null,
  // alias for help get current authenticated user roles
  userRoles: Ember.computed.alias('user.roles'),

  isAdmin: Ember.computed('userRoles', function(){
    let roles = this.get('userRoles');
    return (roles.indexOf('administrator') > -1 );
  }),
  // invert isAdmin to use in disabled inputs
  notIsAdmin: Ember.computed.not('isAdmin'),

  getUserSettings() {
    // const uid = this.get('authenticatedUserId');
    let headers = { Accept: 'application/vnd.api+json' },
        accessToken = this.get('accessToken');

    if (accessToken) {
      headers.Authorization = `Basic ${accessToken}`;
    }

    return Ember.$.ajax({
      url: ENV.API_HOST + '/user-settings?adminMenu=true',
      type: 'GET',
      cache: false,
      headers: headers
    })
    .then( (response)=> {
      this.set('data', response);

      if (response.authenticatedUser) {
        return this.get('store')
        .findRecord('user', response.authenticatedUser.id)
        .then( (u)=> {
          this.set('user', u);

          return response;
        });
      } else {
        return response;
      }
    });
  }
});
