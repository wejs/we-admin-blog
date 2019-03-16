import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import Route from '@ember/routing/route';
import { inject } from '@ember/service';
import { hash } from 'rsvp';

export default Route.extend(AuthenticatedRouteMixin, {
  i18n: inject(),
  model() {
    const i18n = this.get('i18n');

    return hash({
      records: this.get('store').query('content', {}),
      columns: [
        {
          propertyName: 'id',
          title: 'ID',
          className: 'mt-c-id'
        },
        {
          propertyName: 'title',
          filteredBy: 'title',
          title: i18n.t('form-content-title'),
          className: 'mt-c-name text-cell'
        },
        {
          propertyName: 'creator.displayName',
          disableSorting: true,
          disableFiltering: true,
          title: i18n.t('content.creator')
        },
        {
          propertyName: 'highlighted',
          filteredBy: 'highlighted',
          title: 'Ordenação',
          component: 'mt-highlighted',
          className: 'mt-c-highlighted'
        },
        {
          propertyName: 'published',
          disableSorting: true,
          disableFiltering: true,
          title: i18n.t('form-content-published'),
          component: 'mt-published',
          className: 'mt-c-published'
        },
        {
          propertyName: 'createdAt',
          filteredBy: 'createdAt',
          disableSorting: true,
          disableFiltering: true,
          title: i18n.t('form-content-createdAt'),
          component: 'mt-list-item-created-at',
          className: 'mt-c-createdAt'
        },
        {
          propertyName: 'actions',
          disableSorting: true,
          disableFiltering: true,
          title: i18n.t('Actions'),
          component: 'mt-actions-content'
        }
      ]
    });
  }
});
