import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  class: DS.attr('string'),
  sorted: DS.attr('boolean'),
  links: DS.hasMany('link', {
    inverse: 'menu',
    async: true
  })
});