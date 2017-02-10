import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return  Ember.RSVP.hash({
      records: this.get('store').query('menu', {}),
      columns: [
        {
          propertyName: 'id',
          title: 'ID'
        },
        {
          propertyName: 'name',
          filteredBy: 'name_starts-with',
          title: 'Name'
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
          template: 'menus/list-item-actions'
        }
      ]
    });
  }
});
