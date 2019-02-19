import DS from 'ember-data';
import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;
inflector.irregular('accesstoken', 'accesstoken');
inflector.uncountable('accesstoken');

export default DS.Model.extend({
  userId: DS.attr('number'),
  providerUserId: DS.attr('string'),
  tokenProviderId: DS.attr('string'),
  tokenType: DS.attr('string'),
  token: DS.attr('string'),
  isValid: DS.attr('boolean', {
    defaultValue: 'true'
  }),
  linkPermanent: DS.attr(),
  metadata: DS.attr(),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});