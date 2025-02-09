var fs = require('fs');

fs.unlink('filetodelete.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});