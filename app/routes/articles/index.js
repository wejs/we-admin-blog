import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return  Ember.RSVP.hash({
      records: this.get('store').query('article', {}),
      columns: [
        {
          propertyName: 'id',
          title: 'ID'
        },
        {
          propertyName: 'title',
          filteredBy: 'title',
          title: 'Title'
        },
        {
          propertyName: 'creator.displayName',
          disableSorting: true,
          disableFiltering: true,
          title: 'Creator'
        },
        {
          propertyName: 'published',
          disableSorting: true,
          disableFiltering: true,
          title: 'Published'
        },
        {
          propertyName: 'createdAt',
          filteredBy: 'createdAt',
          title: 'Criado em'
        },
        {
          propertyName: 'actions',
          disableSorting: true,
          disableFiltering: true,
          title: 'Actions',
          template: 'articles/list-item-actions'
        }
      ]
    });
  }
});
