import DS from 'ember-data';
import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;
inflector.irregular('email', 'email');
inflector.uncountable('email');

export default DS.Model.extend({
  emailId: DS.attr('string'),
  from: DS.attr('string'),
  to: DS.attr('string'),
  cc: DS.attr('string'),
  bcc: DS.attr('string'),
  replyTo: DS.attr('string'),
  inReplyTo: DS.attr('string'),
  variables: DS.attr(),
  subject: DS.attr('string'),
  text: DS.attr('string'),
  html: DS.attr('string'),
  type: DS.attr('string'),
  status: DS.attr('string', {
    defaultValue: 'added'
  }),
  linkPermanent: DS.attr(),
  metadata: DS.attr(),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  logs: DS.hasMany('email-log', {
    async: true,
    inverse:'email'
  })
});