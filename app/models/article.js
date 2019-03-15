import DS from 'ember-data';
import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;
inflector.irregular('article', 'article');
inflector.uncountable('article');

export default DS.Model.extend({
  active: DS.attr('boolean', {
    defaultValue: 'true'
  }),
  published: DS.attr('boolean', {
    defaultValue: 'true'
  }),
  publishedAt: DS.attr('date'),
  highlighted: DS.attr('number'),
  showInLists: DS.attr('boolean', {
    defaultValue: 'true'
  }),
  title: DS.attr('string'),
  about: DS.attr('string'),
  body: DS.attr('string'),
  attachment: DS.attr('array'),
  featuredImage: DS.attr('array'),
  images: DS.attr('array'),
  tags: DS.attr(),
  category: DS.attr(),
  linkPermanent: DS.attr(),
  metadata: DS.attr(),
  setAlias: DS.attr(),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  creator: DS.belongsTo('user', {
    async: true
  })
});