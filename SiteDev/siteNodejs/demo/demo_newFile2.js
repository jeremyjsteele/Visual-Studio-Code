var fs = require('fs');

//Open demo_newFile2.txt writeable or create writeable demo_newFile2.txt
fs.open('demo_newFile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});