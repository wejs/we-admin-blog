import DS from 'ember-data';
import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;
inflector.irregular('term', 'term');
inflector.uncountable('term');

export default DS.Model.extend({
  text: DS.attr('string'),
  description: DS.attr('string'),
  vocabularyName: DS.attr('string', {
    defaultValue: 'Tags'
  }),
  linkPermanent: DS.attr(),
  metadata: DS.attr(),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  models: DS.hasMany('modelsterms', {
    async: true,
    inverse:'term'
  })
});