import DS from 'ember-data';
import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;
inflector.irregular('sitecontact', 'sitecontact');
inflector.uncountable('sitecontact');

export default DS.Model.extend({
  name: DS.attr('string'),
  creatorId: DS.attr('number'),
  email: DS.attr('string'),
  phone: DS.attr('string'),
  message: DS.attr('string'),
  customSubject: DS.attr('string'),
  status: DS.attr('string', {
    defaultValue: 'opened'
  }),
  statusClass: DS.attr(),
  ip: DS.attr('string'),
  linkPermanent: DS.attr(),
  metadata: DS.attr(),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  form: DS.belongsTo('sitecontact-form', {
    async: true
  })
});