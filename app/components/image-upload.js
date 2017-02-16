import Ember from 'ember';
import EmberUploader from 'ember-uploader';

export default EmberUploader.FileField.extend({
  uploader: null,

  filesDidChange(files) {
    if (Ember.isEmpty(files)) {
      this.set('uploader', null);
      return;
    }

    const uploader = EmberUploader.Uploader.create({
      paramName: 'image',
      url: this.get('url')
    });

    this.set('uploader', uploader);

    this.sendAction('selected', files);

    uploader.on('progress', e => {
      // Handle progress changes
      // Use `e.percent` to get percentage
      this.sendAction('progress',uploader, e);
    });

    uploader.on('didUpload', e => {
      // Handle finished upload
      this.sendAction('didUpload',uploader, e);
    });

    uploader.on('didError', (jqXHR, textStatus, errorThrown) => {
      // Handle unsuccessful upload
      this.sendAction('didError',uploader, jqXHR, textStatus, errorThrown);
    });
  }
});