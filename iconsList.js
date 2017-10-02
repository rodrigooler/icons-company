const fs = require('fs');

const pngFolder = './png/';

fs.readdir(pngFolder, (err, files) => {
  files.forEach(file => {
    const fileName = file;
    console.log(`![${fileName}](./png/${fileName})`);
  });
});
