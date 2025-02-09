var fs = require('fs');

//Append This is my text. to an existing file.
fs.appendFile('demo_newFile1.txt', 'This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});