import Ember from 'ember';

import ServerModelsTable from 'ember-models-table/components/models-table-server-paginated';

// ref https://github.com/onechiporenko/ember-models-table/blob/master/addon/components/models-table-server-paginated.js

export default ServerModelsTable.extend({
  /**
   * The property on meta to load the pages count from.
   *
   * @type {string}
   * @name metaPagesCountProperty
   */
  metaPagesCountProperty: 'count',
  /**
   * The property on meta to load the total item count from.
   *
   * @type {string}
   * @name metaItemsCountProperty
   */
  metaItemsCountProperty: 'count',


  /**
   * The pages count is get from the meta information.
   * Set metaPagesCountProperty to change from which meta property this is loaded.
   *
   * @type {number}
   * @name pagesCount
   */
  pagesCount: Ember.computed('filteredContent.meta', function () {
    let total = Ember.get(this, 'filteredContent.meta.count');
    let pageSize = Ember.get(this, 'pageSize');

    return Math.ceil(total/pageSize);
  }),

  showGlobalFilter: false,
  showColumnsDropdown: false,

  filterQueryParameters: {

    globalFilter: 'q',
    sort: 'sort',
    sortDirection: 'sortDirection',
    page: 'page',
    pageSize: 'limit'
  }

});