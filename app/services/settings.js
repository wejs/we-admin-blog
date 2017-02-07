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

  loaded: false,

  getUserSettings() {
    const uid = this.get('authenticatedUserId');
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
      console.log('>response>', response);

      this.set('data', response);

      // get the authenticated user:
      if (uid && response.authenticatedUser) {
        this.get('store').push('user', response.authenticatedUser);
        this.set('user', this.get('store').peekRecord('user', uid));
      }

      this.set('loaded', true);
    });
  }
});
