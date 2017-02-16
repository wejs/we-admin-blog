import Ember from 'ember';
import ENV from "../config/environment";

export default Ember.Component.extend({
  isLOading: false,
  url: `${ENV.API_HOST}/api/v1/image`,
  uploader: null,

  percent: 0,
  value: null,
  salvedFile: null,
  selectedFiles: null,
  previewImageSrc: null,

  uploadingImage: false,

  description: null,

  display: Ember.computed('salvedFile', function() {
    return this.get('salvedFile');
  }),

  actions: {
    startUpload() {},
    selected(files) {
      const file = files[0];

      this.get('selectedFile', file);

      const reader = new FileReader();

      reader.onload = (e)=> {
        // get local file src
        this.set('previewImageSrc', e.target.result);
      };
      reader.readAsDataURL(file);
    },
    progress(uploader, e) {
      console.log('proigressE>', uploader, e);
      this.set('percent', e.percent);
    },
    didUpload(uploader, e) {
      this.set('salvedFile', e.image);
      this.set('uploader', null);
      this.set('selectedFile', null);
    },
    didError(uploader, jqXHR, textStatus, errorThrown) {
      console.log('didError>', uploader, jqXHR, textStatus, errorThrown);
    },

    removeImage() {
      if (confirm(`Tem certeza que deseja remover essa imagem?`)) {
        this.set('value', null);
        this.set('uploader', null);
        this.set('salvedFile', null);
        this.set('selectedFile', null);
      }
    },

    upload(selectedFile) {
      this.get('uploader')
      .upload(selectedFile)
      .then( (r)=> {
        this.set('uploader', null);
        this.set('selectedFile', null);
        this.set('uploadingImage', false);
        return r;
      })
      .cath( (err)=> {
        console.log('erro no upload', err);
      });
    },

    openImageUploader() {
      this.set('uploadingImage', true);
    }
  }
});

