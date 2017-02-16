import Ember from 'ember';

/**
 * Ember.js image component visualizer
 *
 * @author Alberto Souza <contato@albertosouza.net>
 * @examples
 *   {{we-image file=imageModel size="medium"}}
 */
export default Ember.Component.extend({
  tagName: 'img',
  attributeBindings: ['src:src'],

  src: null,
  file: null,
  // size: original, large, medium, small, thumbnail
  size: 'medium',

  init() {
    this._super();

    const file = this.get('file');
    // file.urls is required
    if (!file || !file.urls) {
      return ;
    }

    let src = Ember.get(file, 'urls.'+this.get('size'));
    this.set('src', src);
  }

});
