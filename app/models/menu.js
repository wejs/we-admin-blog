import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  class: DS.attr('string'),
  sorted: DS.attr('boolean'),
  links: DS.hasMany('link', {
    inverse: 'menu',
    async: true
  }),
  sortedLinks: Ember.computed.sort('links', 'sortLinkDefinition'),
  sortLinkDefinition: ['weight'],
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});