import Ember from 'ember';
import ENV from "../../config/environment";

export default Ember.Controller.extend({
  ajax: Ember.inject.service(),

  editorOptions: {
    min_height: 400,
    plugins: [
      'advlist autolink lists link image charmap print preview hr anchor pagebreak',
      'searchreplace wordcount visualblocks visualchars code fullscreen',
      'insertdatetime media nonbreaking save table contextmenu directionality',
      'emoticons template paste textcolor colorpicker textpattern imagetools codesample'
    ]
  },

  actions: {
    searchCategoryTerms(term) {
      let url = `${ENV.API_HOST}/api/v1/term-texts?term=${term}&vocabularyName=Category`;
      return this.get('ajax')
      .request(url)
      .then((json) => json.term );
    },
    searchTagsTerms(term) {
      let url = `${ENV.API_HOST}/api/v1/term-texts?term=${term}&vocabularyName=Tags`;
      return this.get('ajax')
      .request(url)
      .then((json) => json.term );
    },
    changeDate(record, field, dates) {
      if (!dates || !dates[0]) {
        return;
      }
      this.get('model.record').set(field, dates[0]);
    }
  }
});
