import DS from 'ember-data';
import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;
inflector.irregular('passportGrantToken', 'passportGrantToken');
inflector.uncountable('passportGrantToken');

export default DS.Model.extend({
  access_token: DS.attr('string'),
  refresh_token: DS.attr('string'),
  token_type: DS.attr('string'),
  scopes: DS.attr('string'),
  expireDate: DS.attr('date'),
  isValid: DS.attr('boolean', {
    defaultValue: 'true'
  }),
  linkPermanent: DS.attr(),
  metadata: DS.attr(),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  owner: DS.belongsTo('user', {
    async: true
  })
});