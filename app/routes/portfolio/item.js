import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import Route from '@ember/routing/route';
import { inject } from '@ember/service';
import { hash } from 'rsvp';
import { get, set } from '@ember/object';

export default Route.extend(AuthenticatedRouteMixin, {
  term: inject(),
  model(params) {
    return hash({
      record: this.get('store').findRecord('portfolio', params.id),
      categories: this.get('term').getSystemCategories(),
      alias: this.get('store').query('url-alia', {
        target: '/portfolio/'+params.id,
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
    let id = get(model, 'record.id');

    if (
      model.alias && model.alias.alias && model.record && model.record.id
    ) {
      set(model.record, 'setAlias', get(model.alias,'alias'));
    } else {
      model.alias = this.get('store').createRecord('url-alia', {
        target: '/portfolio/'+id,
        alias: '/portfolio/'+id
      });
    }
  }
});