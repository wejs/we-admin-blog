import DS from 'ember-data';
import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;
inflector.irregular('file', 'file');
inflector.uncountable('file');

export default DS.Model.extend({
  label: DS.attr('string'),
  description: DS.attr('string'),
  name: DS.attr('string'),
  size: DS.attr('number'),
  encoding: DS.attr('string'),
  active: DS.attr('boolean', {
    defaultValue: 'true'
  }),
  originalname: DS.attr('string'),
  mime: DS.attr('string'),
  extension: DS.attr('string'),
  storageName: DS.attr('string'),
  isLocalStorage: DS.attr('boolean', {
    defaultValue: 'true'
  }),
  urls: DS.attr(),
  extraData: DS.attr(),
  linkPermanent: DS.attr(),
  metadata: DS.attr(),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  creator: DS.belongsTo('user', {
    async: true
  })
});