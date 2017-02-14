import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return  Ember.RSVP.hash({
      records: this.get('store').query('vocabulary', {}),
      columns: [
        {
          propertyName: 'id',
          title: 'ID'
        },
        {
          propertyName: 'name',
          filteredBy: 'name_starts-with',
          title: 'Nome'
        },
        {
          propertyName: 'createdAt',
          filteredBy: 'createdAt',
          title: 'Criado em',
          template: 'partials/list-item-created-at'
        },
        {
          propertyName: 'actions',
          disableSorting: true,
          disableFiltering: true,
          title: 'Actions',
          template: 'vocabulary/list-item-actions'
        }
      ]
    });
  }
});