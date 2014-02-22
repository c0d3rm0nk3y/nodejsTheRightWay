const fs = require('fs');
fs.writeFile('target.txt', 'a witty message', function(err) {
  if(err) { throw err; }
  console.log('file saved..');
});