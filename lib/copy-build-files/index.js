/*jshint node:true*/
var fs = require('fs-extra');

module.exports = {
  name: 'copy-build-files',

  isDevelopingAddon: function() {
    return true;
  },
  postBuild: function (results) {
    var fs = this.project.require('fs-extra');
    var originFolder = process.cwd() + '/dist';
    var distFolder = process.cwd() + '/prod';
    // cleanup:
    fs.emptyDirSync(distFolder);
    // copy:
    fs.copySync(originFolder, distFolder);
  }
};