import fs from 'fs'

const pngFolder = './png/';

fs.readdir(pngFolder, (err, files) => {
  const pngList = files.forEach(file => {
    const fileName = file
    return `![${fileName}](./png/${fileName})`;
  });

  fs.writeFile('ICONS.md', ...pngList, (err) => {
    if (err) {
      return console.log(err);
    }

    console.log('The file was saved!');
  });

});