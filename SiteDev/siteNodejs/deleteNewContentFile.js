
var fs = require('fs');

fs.unlink('newContentFile.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});