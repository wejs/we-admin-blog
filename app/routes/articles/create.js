import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return {
      record: this.store.createRecord('article')
    };
  },
  actions: {
    save(record) {
      record.save()
      .then( (r)=> {
        this.get('notifications').success('Artigo criado com sucesso.');

        this.transitionTo('articles.item', r.id);
        // success
        return r;
      })
      .catch( (err)=> {
        this.send('queryError', err);
      });
    }
  }
});