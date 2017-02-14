import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    console.log('>>', this.modelFor('vocabulary.item'));
    return {
      vocabulary: this.modelFor('vocabulary.item').record,
      record: this.store.createRecord('term')
    };
  },
  actions: {
    save(record) {
      record.save()
      .then( (r)=> {
        this.get('notifications').success('O termo foi criado com sucesso.');

        this.transitionTo('vocabulary.item.term.index');
        // success
        return r;
      })
      .catch( (err)=> {
        this.send('queryError', err);
      });
    }
  }
});