const fs = require('fs');

const rs = fs.createReadStream('./files/lorem.txt', {encoding: "utf8"});
const ws = fs.createWriteStream('./files/new-lorem.txt');

/*
// ================== Read from one file and writ onto another file ================== \\
rs.on('data', (dataChunk) =>{
    ws.write(dataChunk);
})
*/

// ================== More efficient way of reading and writing ================== \\
rs.pipe(ws);