import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
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
      this.set('currentModel.record.links', itemModels);
      this.set('currentModel.justDragged', draggedModel);
      this.set('currentModel.record.sorted', true);
    },
    saveLinksOrder(menu) {
      console.log('todo!', menu);
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