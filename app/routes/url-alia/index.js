import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return  Ember.RSVP.hash({
      records: this.get('store').query('url-alia', {}),
      columns: [
        {
          propertyName: 'id',
          title: 'ID'
        },
        {
          propertyName: 'alias',
          filteredBy: 'alias',
          title: 'Alias'
        },
        {
          propertyName: 'target',
          filteredBy: 'targer',
          title: 'Target'
        },
        {
          propertyName: 'locale',
          filteredBy: 'locale',
          title: 'Locale'
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
          template: 'url-alia/list-item-actions'
        }
      ]
    });
  }
});
