const fs = require('fs');

fs.readFile('3-read-from-file.md', 'utf8', function (err, data) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
