import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('user');

  this.route('login');
  this.route('forgot-password');
  this.route('logout');
  this.route('profile', function() {
    this.route('change-password');
  });

  this.route('articles', function() {
    this.route('create');
    this.route('item', { path: ':id' }, function(){

    });
  });

  this.route('users', function() {
    this.route('create');
    this.route('item', { path: ':id' }, function(){

    });
  });

  this.route('url-alia', function() {
    this.route('create');
    this.route('item', { path: ':id' }, function(){

    });
  });

  this.route('menus', function() {
    this.route('create');
    this.route('item', { path: ':id' }, function(){

    });
  });

  this.route('vocabulary', function() {
    this.route('create');
    this.route('item', { path: ':id' }, function() {
      this.route('terms', function() {
        this.route('create');
        this.route('item', { path: ':id' }, function(){});
      });
    });
  });

  this.route('permissions');
  this.route('roles');
  this.route('not-found', { path: '/*path' });
});

export default Router;
