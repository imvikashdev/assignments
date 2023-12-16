const fs = require('fs');

fs.writeFile('4-write-to-file.md', 'Hello, world!', function (err) {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File written!');
});

fs.readFile('4-write-to-file.md', 'utf8', function (err, data) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
