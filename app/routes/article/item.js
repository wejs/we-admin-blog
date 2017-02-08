import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
// import ENV from "../../config/environment";

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    return Ember.RSVP.hash({
      record: this.get('store').findRecord('article', params.id)
    });
  },
  actions: {
    save(record) {
      record.save()
      .then( (r)=> {
        this.get('notifications').success('Dados salvos.');
        // success
        return r;
      })
      .catch( (err)=> {
        this.send('queryError', err);
      });
    },

    changePublishedStatus(record, status) {
      record.published = status;
      record.save()
      .then( (r)=> {
        if (status) {
          this.get('notifications').success('Artigo publicado.');
        } else {
          this.get('notifications').success('Artigo despublicado.');
        }
        // success
        return r;
      })
      .catch( (err)=> {
        this.send('queryError', err);
      });
    }
  }
});