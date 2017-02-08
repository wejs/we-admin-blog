import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

  this.route('user');
  this.route('vocabulary');
  this.route('term');

  this.route('login');
  this.route('logout');
  this.route('profile', function() {
    this.route('change-password');
  });

  this.route('article', function(){
    this.route('create');
    this.route('item', { path: ':id' }, function(){

    });
  });

  this.route('users', function() {
    this.route('create');
    this.route('item', { path: ':id' }, function(){

    });
  });

  this.route('not-found', { path: '/*path' });
});

export default Router;
