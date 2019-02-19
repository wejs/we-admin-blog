import DS from 'ember-data';
import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;
inflector.irregular('email-log', 'email-log');
inflector.uncountable('email-log');

export default DS.Model.extend({
  label: DS.attr('string'),
  text: DS.attr('string'),
  status: DS.attr('string'),
  linkPermanent: DS.attr(),
  metadata: DS.attr(),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  email: DS.belongsTo('email', {
    async: true,
    inverse:'logs'
  })
});