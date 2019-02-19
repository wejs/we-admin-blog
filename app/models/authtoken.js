import DS from 'ember-data';
import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;
inflector.irregular('authtoken', 'authtoken');
inflector.uncountable('authtoken');

export default DS.Model.extend({
  userId: DS.attr('number'),
  providerUserId: DS.attr('number'),
  tokenProviderId: DS.attr('string'),
  tokenType: DS.attr('string'),
  token: DS.attr('string', {
    defaultValue: 'true'
  }),
  isValid: DS.attr('boolean', {
    defaultValue: 'true'
  }),
  redirectUrl: DS.attr('string'),
  linkPermanent: DS.attr(),
  metadata: DS.attr(),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});