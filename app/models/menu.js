import DS from 'ember-data';
import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;
inflector.irregular('menu', 'menu');
inflector.uncountable('menu');

export default DS.Model.extend({
  name: DS.attr('string'),
  class: DS.attr('string'),
  linkPermanent: DS.attr(),
  metadata: DS.attr(),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  links: DS.hasMany('link', {
    async: true,
    inverse:'menu'
  })
});