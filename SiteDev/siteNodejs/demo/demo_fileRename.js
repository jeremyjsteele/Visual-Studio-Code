var fs = require('fs');

fs.rename('filetorename.txt', 'newnameforfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});