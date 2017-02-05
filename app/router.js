import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('article');
  this.route('user');
  this.route('vocabulary');
  this.route('term');
});

export default Router;
