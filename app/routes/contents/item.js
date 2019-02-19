import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import Route from '@ember/routing/route';
import { inject } from '@ember/service';
import { hash } from 'rsvp';
import { get, set } from '@ember/object';

export default Route.extend(AuthenticatedRouteMixin, {
  term: inject(),
  model(params) {
    return hash({
      record: this.get('store').findRecord('content', params.id),
      categories: this.get('term').getSystemCategories(),
      alias: this.get('store').query('url-alia', {
        target: '/content/'+params.id,
        limit: 1,
        order: 'id DESC'
      })
      .then( (r)=> { // get only one alias:
        if (r && r.objectAt && r.objectAt(0)) {
          return r.objectAt(0);
        } else {
          return null;
        }
      }),
    });
  },

  afterModel(model) {
    if (
      model.alias && model.alias.alias && model.record && model.record.id
    ) {
      set(model.record, 'setAlias', get(model.alias,'alias'));
    }
  }
});