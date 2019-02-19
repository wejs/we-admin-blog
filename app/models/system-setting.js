import DS from 'ember-data';
import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;
inflector.irregular('system-setting', 'system-setting');
inflector.uncountable('system-setting');

export default DS.Model.extend({
  key: DS.attr('string'),
  value: DS.attr('string'),
  site: DS.attr('string'),
  linkPermanent: DS.attr(),
  metadata: DS.attr(),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});