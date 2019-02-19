import DS from 'ember-data';
import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;
inflector.irregular('imageassoc', 'imageassoc');
inflector.uncountable('imageassoc');

export default DS.Model.extend({
  modelName: DS.attr('string'),
  modelId: DS.attr('number'),
  field: DS.attr('string'),
  order: DS.attr('boolean'),
  linkPermanent: DS.attr(),
  metadata: DS.attr(),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  image: DS.belongsTo('image', {
    async: true
  })
});