import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import Route from '@ember/routing/route';
import { inject } from '@ember/service';
import { hash } from 'rsvp';
import { set } from '@ember/object';

export default Route.extend(AuthenticatedRouteMixin, {
  ajax: inject(),
  image: inject(),

  model() {
    const systemSettings = (this.get('settings').get('systemSettings') || '');

    return hash({
      settings: systemSettings
    });
  },

  actions: {
    save(data) {
      let s = this.get('settings');

      s.setSystemSettings(data)
      .then( (result) => {
        set(s, 'systemSettings', result.settings);

        this.get('notifications').success('Os dados do hotel foram salvos.');
        this.send('scrollToTop');
      })
      .fail( (err)=> {
        this.send('queryError', err);
      });
    }
  }
});
