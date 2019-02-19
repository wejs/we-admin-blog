import DS from 'ember-data';
import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;
inflector.irregular('email-template', 'email-template');
inflector.uncountable('email-template');

export default DS.Model.extend({
  subject: DS.attr('string'),
  text: DS.attr('string'),
  css: DS.attr('string'),
  html: DS.attr('string'),
  type: DS.attr('string'),
  typeSettings: DS.attr(),
  linkPermanent: DS.attr(),
  metadata: DS.attr(),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});