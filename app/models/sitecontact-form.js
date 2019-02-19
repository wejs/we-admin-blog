import DS from 'ember-data';
import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;
inflector.irregular('sitecontact-form', 'sitecontact-form');
inflector.uncountable('sitecontact-form');

export default DS.Model.extend({
  subject: DS.attr('string'),
  contactWithEmail: DS.attr('string'),
  emailBody: DS.attr('string'),
  successEmailBodyTemplate: DS.attr('string'),
  publishedAt: DS.attr('date'),
  linkPermanent: DS.attr(),
  metadata: DS.attr(),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});