import DS from 'ember-data';

export default DS.Model.extend({
  active: DS.attr('boolean'),
  published: DS.attr('boolean'),
  title: DS.attr('string'),
  about: DS.attr('string'),
  body: DS.attr('string'),
  creator: DS.belongsTo('user', {
    inverse: 'articles'
  }),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  tags: DS.attr(),
  category: DS.attr()
});