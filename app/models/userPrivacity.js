import DS from 'ember-data';
import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;
inflector.irregular('userPrivacity', 'userPrivacity');
inflector.uncountable('userPrivacity');

export default DS.Model.extend({
  field: DS.attr('string'),
  privacity: DS.attr('string', {
    defaultValue: 'public'
  }),
  record: DS.attr(),
  linkPermanent: DS.attr(),
  metadata: DS.attr(),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  user: DS.belongsTo('user', {
    async: true
  })
});