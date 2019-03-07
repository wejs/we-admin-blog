import DS from 'ember-data';
import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;
inflector.irregular('portfolio', 'portfolio');
inflector.uncountable('portfolio');

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  projectDate: DS.attr('date'),
  published: DS.attr('boolean'),
  publishedAt: DS.attr('date'),
  highlighted: DS.attr('number'),
  showInLists: DS.attr('boolean', {
    defaultValue: 'true'
  }),
  attachment: DS.attr('array'),
  featuredImage: DS.attr('array'),
  images: DS.attr('array'),
  tags: DS.attr(),
  category: DS.attr(),
  linkPermanent: DS.attr(),
  metadata: DS.attr(),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  creator: DS.belongsTo('user', {
    async: true
  })
});