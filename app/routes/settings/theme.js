import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const get = Ember.get;

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  ajax: Ember.inject.service(),
  image: Ember.inject.service(),

  model() {
    const systemSettings = (this.get('settings').get('systemSettings') || '');

    return Ember.RSVP.hash({
      settings: systemSettings,
      themeCollorOptions: [],
      themeConfigName: null,
      themeCollor: null,
      themeConfigs: this.get('settings').getThemeConfigs()
    });
  },

  afterModel(model) {
    const settings = this.get('settings.systemSettings');

    const ts = model.themeConfigs.themes;

    model.themeConfigName = model.themeConfigs.enabled+'ColorName';

    for (let themeName in ts) {
      const t = ts[themeName];

      if (themeName !== model.themeConfigs.enabled) {
        continue;
      }

      if (settings[themeName+'ColorName']) {
        // has selected color:
        model.themeCollor = t.configs.colors[settings[themeName+'ColorName']];
      } else {
        model.themeCollor = t.configs.colors.default;
      }

      if (t.configs && t.configs.colors) {
        for (let colorName in t.configs.colors) {
          const c = t.configs.colors[ colorName ];

          if (!c.id) {
            c.id = colorName;
          }

          model.themeCollorOptions.push(c);
        }
      }
    }
  },

  actions: {
    save(data) {
      const model = this.get('currentModel');
      let s = this.get('settings');
      let color = 'default';
      const themeCollor = get(model, 'themeCollor');

      if (themeCollor) {
        color = themeCollor.id;
      }

      data[ get(model, 'themeConfigName') ] = color;

      s.setSystemSettings(data)
      .then( (result) => {
        Ember.set(s, 'systemSettings', result.settings);

        console.log('success');
        this.get('notifications').success('As configurações do sistema foram salvas.');
        this.send('scrollToTop');
      })
      .fail( (err)=> {
        this.send('queryError', err);
      });
    }
  }
});
