import DS from 'ember-data';
import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;
inflector.irregular('url-alia', 'url-alia');
inflector.uncountable('url-alia');

export default DS.Model.extend({
  alias: DS.attr('string'),
  target: DS.attr('string'),
  locale: DS.attr('string'),
  linkPermanent: DS.attr(),
  metadata: DS.attr(),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});