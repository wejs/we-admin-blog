import DS from 'ember-data';
import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;
inflector.irregular('vocabulary', 'vocabulary');
inflector.uncountable('vocabulary');

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  linkPermanent: DS.attr(),
  metadata: DS.attr(),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  creator: DS.belongsTo('user', {
    async: true
  })
});