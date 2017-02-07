// // app/authorizers/oauth2.js
// import OAuth2Bearer from 'ember-simple-auth/authorizers/oauth2-bearer';

// export default OAuth2Bearer.extend();


// app/authorizers/custom.js

import Ember from 'ember';
import Base from 'ember-simple-auth/authorizers/base';

export default Base.extend({
  authorize(data, block) {
    const accessToken = data['access_token'];

    if (!Ember.isEmpty(accessToken)) {
      block('Authorization', `Basic ${accessToken}`);
    }
  }
});