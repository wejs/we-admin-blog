import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import Route from '@ember/routing/route';
import { inject } from '@ember/service';
import { hash } from 'rsvp';
import { get, set } from '@ember/object';

export default Route.extend(AuthenticatedRouteMixin, {
  ajax: inject(),
  image: inject(),

  model() {
    const systemSettings = (this.get('settings').get('systemSettings') || ''),
          logoId = systemSettings.logoId,
          iconId = systemSettings.iconId,
          bannerId = systemSettings.bannerId,
          ogImageId = systemSettings.ogImageId;

    return hash({
      settings: systemSettings,
      logo: ((logoId)? this.get('image').getImageData(logoId) : null ),
      icon: ((iconId)? this.get('image').getImageData(iconId) : null ),
      banner: ((bannerId)? this.get('image').getImageData(bannerId) : null ),
      ogImage: ((ogImageId)? this.get('image').getImageData(ogImageId) : null )
    });
  },

  actions: {
    save(data) {
      const s = this.get('settings'),
          logo = this.get('currentModel.logo'),
          icon = this.get('currentModel.icon'),
          banner = this.get('currentModel.banner'),
          ogImage = this.get('currentModel.ogImage');

      // resolve logo url and id
      this.resolveImage(data, logo, 'logo');
      // resolve icon url and id
      this.resolveImage(data, icon, 'icon');
      // resolve banner url and id
      this.resolveImage(data, banner, 'banner');
      // resolve image url and id
      this.resolveImage(data, ogImage, 'ogImage');

      s.setSystemSettings(data)
      .then( (result) => {
        set(s, 'systemSettings', result.settings);
        this.get('notifications').success('As configurações do sistema foram salvas.');
        this.send('scrollToTop');
      })
      .fail( (err)=> {
        this.send('queryError', err);
      });
    }
  },

  resolveImage(data, images, name) {
    let image;

    if (images && images.firstObject) {
      image = get(images, 'firstObject');
    } else {
      return;
    }

    if (image && image.urls && image.urls.large) {
      set(data, name+'Id', image.id);
      set(data, name+'UrlThumbnail', image.urls.thumbnail);
      set(data, name+'UrlMedium', image.urls.medium);
      set(data, name+'UrlOriginal', image.urls.original);
      set(data, name+'Url', image.urls.thumbnail);
    } else {
      set(data, name+'Id', null);
      set(data, name+'UrlThumbnail', null);
      set(data, name+'UrlMedium', null);
      set(data, name+'UrlOriginal', null);
      set(data, name+'Url', null);
    }
  }
});
