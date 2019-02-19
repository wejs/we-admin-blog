import DS from 'ember-data';
import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;
inflector.irregular('user', 'user');
inflector.uncountable('user');

export default DS.Model.extend({
  username: DS.attr('string'),
  displayName: DS.attr('string'),
  fullName: DS.attr('string'),
  biography: DS.attr('string'),
  gender: DS.attr('string'),
  email: DS.attr('string'),
  active: DS.attr('boolean'),
  blocked: DS.attr('boolean'),
  language: DS.attr('string', {
    defaultValue: 'pt-br'
  }),
  confirmEmail: DS.attr(),
  acceptTerms: DS.attr('boolean', {
    defaultValue: 'true'
  }),
  roles: DS.attr('array'),
  avatar: DS.attr('array'),
  banner: DS.attr('array'),
  organization: DS.attr(),
  linkPermanent: DS.attr(),
  metadata: DS.attr(),
  setAlias: DS.attr(),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});