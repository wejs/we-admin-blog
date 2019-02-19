import DS from 'ember-data';
import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;
inflector.irregular('widget', 'widget');
inflector.uncountable('widget');

export default DS.Model.extend({
  creatorId: DS.attr('number'),
  title: DS.attr('string'),
  subtitle: DS.attr('string'),
  type: DS.attr('string'),
  path: DS.attr('string'),
  modelName: DS.attr('string'),
  modelId: DS.attr('number'),
  inRecord: DS.attr('boolean'),
  layout: DS.attr('string', {
    defaultValue: 'default'
  }),
  regionName: DS.attr('string'),
  context: DS.attr('string'),
  theme: DS.attr('string'),
  weight: DS.attr('number'),
  configuration: DS.attr('string'),
  visibility: DS.attr(),
  html: DS.attr(),
  linkPermanent: DS.attr(),
  metadata: DS.attr(),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});