import DS from 'ember-data';

export default DS.Model.extend({
  href: DS.attr('string'),
  text: DS.attr('string'),
  title: DS.attr('string'),
  class: DS.attr('string'),
  style: DS.attr('string'),
  target: DS.attr('string'),
  rel: DS.attr('string'),
  key: DS.attr('string'),
  depth: DS.attr('number'),
  weight: DS.attr('number'),
  parent: DS.attr('number'),
  menu: DS.belongsTo('menu', {
    inverse: 'links',
    async: true
  }),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});