const fs = require('fs');
const path = require('path');

// Creating a root folder
fs.mkdirSync(path.join(__dirname, 'root'), err => {
  if (err) throw new Error(err);

  console.log('Folder was created.');
});

// Create and write text to file
fs.writeFile(
path.join(__dirname, 'root', 'root_text.txt'),
'Hello Root folder',
  err => {
    if (err) {
      throw err;
    }
    console.log('File was created');

    // => Added text to file
    fs.appendFile(
      path.join(__dirname, 'root', 'root_text.txt'),
      ' From append File Root',
      err => {
        if (err) {
          throw err;
        }

        console.log('File was changed.');
      }
    )
});

// Read data from file
fs.readFile(
  path.join(__dirname, 'root', 'root_text.txt'),
  'utf-8',
  (err, data) => {
    if (err) {
      throw err;
    }
    console.log(Buffer.from(data).toString());
  }
);

// Rename file in root directory from root_text.txt
// The Final file after renaming in root directory
fs.rename(
  path.join(__dirname, 'root', 'root_text.txt'),
  path.join(__dirname, 'root', 'root-txt.txt'),
  err => {
    if (err) throw err;

    console.log('File was updated');
  }
);
