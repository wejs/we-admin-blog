import DS from 'ember-data';
import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;
inflector.irregular('link', 'link');
inflector.uncountable('link');

export default DS.Model.extend({
  href: DS.attr('string'),
  text: DS.attr('string'),
  title: DS.attr('string'),
  class: DS.attr('string'),
  style: DS.attr('string'),
  target: DS.attr('string'),
  rel: DS.attr('string'),
  type: DS.attr('string'),
  modelName: DS.attr('string'),
  modelId: DS.attr('string'),
  userRole: DS.attr('string'),
  key: DS.attr('string'),
  depth: DS.attr('number'),
  weight: DS.attr('number'),
  parent: DS.attr('number'),
  linkPermanent: DS.attr(),
  metadata: DS.attr(),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  menu: DS.belongsTo('menu', {
    async: true,
    inverse:'links'
  })
});