var fs = require('fs');

//Create a writeable file with content Hello content
fs.writeFile('demo_newFile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});