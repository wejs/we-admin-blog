import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    console.log('>>', this.modelFor('vocabulary.item'));

    return  Ember.RSVP.hash({
      vocabulary: this.modelFor('vocabulary.item').record,
      records: this.get('store').query('term', {}),
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