var fs = require('fs');

fs.appendFile('demo_newFile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved Again!');
});