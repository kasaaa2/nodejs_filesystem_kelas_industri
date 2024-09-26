const fs = require('node:fs')

fs.readFile('biodata.txt', 'utf8', function(error, data) {
    if(error) {
        console.error(error);
    } else {
        console.log('Isi filenya : ', data);
    }
});