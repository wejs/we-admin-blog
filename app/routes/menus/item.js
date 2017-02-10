import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import ENV from "../../config/environment";

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session: Ember.inject.service('session'),

  model(params) {
    return Ember.RSVP.hash({
      record: this.get('store').findRecord('menu', params.id),
      sorted: false,
      newLinkRecord: null,
      editingRecord: null
    });
  },

  getNewLinkRecord() {
    const link = this.get('store').createRecord('link');
    link.set('menu', this.get('currentModel.record'));
    return link;
  },
  actions: {
    reorderItems(itemModels, draggedModel) {
      itemModels.forEach((item, i)=>{
        item.set('weight', i);
      });
      this.set('currentModel.justDragged', draggedModel);
      this.set('currentModel.record.sorted', true);
    },
    saveLinksOrder(links) {
      const menuId = this.get('currentModel.record.id'),
        data = {};

      const length = links.get('length');
      for (let i = 0; i < length; i++) {
        let link = links.objectAt(i);
        // set values:
        data['link-'+link.get('id')+'-weight'] = link.get('weight');
        data['link-'+link.get('id')+'-id'] = link.get('id');
        data['link-'+link.get('id')+'-depth'] = 0;
        data['link-'+link.get('id')+'-parent'] = null;
      }

      let headers = { Accept: 'application/vnd.api+json' },
          accessToken = this.get('session.session.authenticated.access_token');

      if (accessToken) {
        headers.Authorization = `Basic ${accessToken}`;
      }

      Ember.$.ajax({
        url: `${ENV.API_HOST}/admin/menu/${menuId}/sort-links`,
        type: 'POST',
        data: JSON.stringify(data)
      })
      .done( ()=> {
        this.get('notifications').success('Ordem salva');
      })
      .fail( ()=> {
        this.get('notifications').error('Erro ao salvar a ordem dos links');
      });

    },
    openLinkForm(link) {
      if (!link) {
        // create
        this.set('currentModel.newLinkRecord', this.getNewLinkRecord());
        this.set('currentModel.editingRecord', this.get('currentModel.newLinkRecord'));
      } else {
        // edit
        this.set('currentModel.editingRecord', link);
      }
    },
    onCloseLinkModal() {
      const record = this.get('currentModel.editingRecord');
      if (record) {
        window.test = record;
        // reset record data:
        record.rollbackAttributes();
        // cleanup editing record:
        this.set('currentModel.editingRecord', null);
      }

      return null;
    },
    saveLink(link, modal) {
      link
      .save()
      .then( (r)=> {
        this.get('notifications').success('Link salvo');
        return r;
      })
      .then( modal.close );
    }
  }
});