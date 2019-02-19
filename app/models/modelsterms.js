import DS from 'ember-data';
import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;
inflector.irregular('modelsterms', 'modelsterms');
inflector.uncountable('modelsterms');

export default DS.Model.extend({
  modelName: DS.attr('string'),
  modelId: DS.attr('number'),
  field: DS.attr('string'),
  isTag: DS.attr('string'),
  order: DS.attr('boolean'),
  vocabularyName: DS.attr('string', {
    defaultValue: 'Tags'
  }),
  relatedRecord: DS.attr(),
  linkPermanent: DS.attr(),
  metadata: DS.attr(),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  term: DS.belongsTo('term', {
    async: true,
    inverse:'models'
  })
});