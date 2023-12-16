const fs = require('fs');

fs.readFile('1-file-cleaner.md', 'utf8', function (err, data) {
  if (err) {
    console.error(err);
    return;
  }
  const removeExtraSpaces = data.replace(/ +/g, ' ');
  fs.writeFile('1-file-cleaner.md', removeExtraSpaces, function (err) {
    if (err) {
      console.error(err);
      return;
    }
    console.log('File written!');
  });
});
