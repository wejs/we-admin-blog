import Ember from 'ember';
import ENV from "../config/environment";

export default Ember.Service.extend({
  session: Ember.inject.service('session'),
  /**
   * Get all permissions and roles from api host
   *
   * @return {Promise}
   */
  getPermissionsAndRoles() {
    return new window.Promise( (resolve, reject)=> {
      let headers = { Accept: 'application/vnd.api+json' },
          accessToken = this.get('session.session.authenticated.access_token');

      if (accessToken) {
        headers.Authorization = `Basic ${accessToken}`;
      }

      Ember.$.ajax({
        url: `${ENV.API_HOST}/acl/permission`,
        type: 'GET',
        headers: headers
      })
      .done(resolve)
      .fail(reject);
    });
  },
  /**
   * Get Roles
   *
   * @return {Promise}
   */
  getRoles() {
    return new window.Promise( (resolve, reject)=> {
      let headers = { Accept: 'application/vnd.api+json' },
          accessToken = this.get('session.session.authenticated.access_token');

      if (accessToken) {
        headers.Authorization = `Basic ${accessToken}`;
      }

      Ember.$.ajax({
        url: `${ENV.API_HOST}/acl/permission`,
        type: 'GET',
        headers: headers
      })
      .done( (data)=> {
        resolve(data.roles);
        return null;
      })
      .fail(reject);
    });
  },
  /**
   * Request method to add one permission in role
   *
   * @param {String} roleName
   * @param {String} permissionName
   * @return {Promise}
   */
  addPermission(roleName, permissionName) {
    return new window.Promise( (resolve, reject)=> {
      let headers = { Accept: 'application/vnd.api+json' },
          accessToken = this.get('session.session.authenticated.access_token');

      if (accessToken) {
        headers.Authorization = `Basic ${accessToken}`;
      }

      Ember.$.ajax({
        url: `${ENV.API_HOST}/acl/role/${roleName}/permissions/${permissionName}`,
        type: 'POST',
        headers: headers
      })
      .done(resolve)
      .fail(reject);
    });
  },
  /**
   * Request method to remove one permission from role
   *
   * @param {String} roleName
   * @param {String} permissionName
   * @return {Promise}
   */
  removePermission(roleName, permissionName) {
    return new window.Promise( (resolve, reject)=> {
      let headers = { Accept: 'application/vnd.api+json' },
          accessToken = this.get('session.session.authenticated.access_token');

      if (accessToken) {
        headers.Authorization = `Basic ${accessToken}`;
      }

      Ember.$.ajax({
        url: `${ENV.API_HOST}/acl/role/${roleName}/permissions/${permissionName}`,
        type: 'DELETE',
        headers: headers
      })
      .done(resolve)
      .fail(reject);
    });
  },

  /**
   * Create one role request method
   */
  createRole(role) {
    return new window.Promise( (resolve, reject)=> {
      let headers = { Accept: 'application/vnd.api+json' },
          accessToken = this.get('session.session.authenticated.access_token');

      if (accessToken) {
        headers.Authorization = `Basic ${accessToken}`;
      }

      role.action = 'create';

      Ember.$.ajax({
        url: `${ENV.API_HOST}/acl/role`,
        type: 'POST',
        data: role,
        headers: headers
      })
      .done(resolve)
      .fail(reject);
    });
  },

  /**
   * Delete one role request method
   */
  deleteRole(role) {
    return new window.Promise( (resolve, reject)=> {
      let headers = { Accept: 'application/vnd.api+json' },
          accessToken = this.get('session.session.authenticated.access_token');

      if (accessToken) {
        headers.Authorization = `Basic ${accessToken}`;
      }

      role.action = 'delete';

      Ember.$.ajax({
        url: `${ENV.API_HOST}/acl/role`,
        type: 'POST',
        data: role,
        headers: headers
      })
      .done(resolve)
      .fail(reject);
    });
  }
});