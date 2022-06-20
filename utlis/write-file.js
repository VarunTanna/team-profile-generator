const fs = require('fs');

const writeFile = (fileContent) => {
    fs.writeFile('./output/index.html', fileContent, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Your team has been genereated');
        }
    });
}

module.exports = writeFile;