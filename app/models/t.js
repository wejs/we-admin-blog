import DS from 'ember-data';
import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;
inflector.irregular('t', 't');
inflector.uncountable('t');

export default DS.Model.extend({
  s: DS.attr('string'),
  t: DS.attr('string'),
  l: DS.attr('string'),
  isChanged: DS.attr('boolean', {
    defaultValue: 'true'
  }),
  linkPermanent: DS.attr(),
  metadata: DS.attr(),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});