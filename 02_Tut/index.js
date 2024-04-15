const fs = require('fs')

/*
fs.readFile('./files/starter.txt', (err,data) =>{
    if (err) throw err;
    //console.log(data);
    console.log(data.toString());
}) 
*/

/*
// ================== Another way to decode the file ==================  \\
fs.readFile('./files/starter.txt', 'utf-8',(err,data) =>{
    if (err) throw err;
    console.log(data);
    //console.log(data.toString());
}) 

//This will be printed First then the file read above
console.log("Hello...")
*/

/*
// ================== Generating Error on purpose ================== \\

fs.readFile('./files/this_file_does_not_exists.txt', 'utf-8',(err,data) =>{
    if (err) throw err;
    console.log(data);
}) 


process.on('uncaughtException', err => {
    console.error('There was an uncaught exception: ${err}');
    process.exit(1)

})
*/

/*
// ================== Reading a file using dynamic path ================== \\
const path = require('path');
fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf-8', (err,data) =>{
    if (err) throw err;
    console.log(data);
})
*/

/*
// ================== Writing onto a file ================== \\
const path = require('path');
fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Here lies the dynamic text written by index.js',(err) =>{
    if (err) throw err;
    console.log('Write Complete');
})
*/

/*
// ================== Appending onto a file ================== \\
fs.appendFile(path.join(__dirname, 'files', 'append_test.txt'), 'Testing appending text.',(err) =>{
    if (err) throw err;
    console.log('Append Complete');
})
*/

/*
// ================== Writing onto a file then appending in it's callback ================== \\
const path = require('path');
fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you.',(err) =>{
    if (err) throw err;
    console.log('Write Complete');

    fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nYes, yes it is.',(err) =>{
        if (err) throw err;
        console.log('Append Complete');

        fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newReply.txt'),(err) =>{
            if (err) throw err;
            console.log('Reply Complete');
        });
    });
});
*/


// ================== Reading files unsing promises ================== \\
/*
fs.writeFile(path.join(__dirname,'files','starter.txt'), 'Hi! my name is Aaqib', (err) =>{
    if (err) throw err;
    console.log('Write Complete');
})
*/

const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async() =>{
    try{
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8');
        console.log(data);

        await fsPromises.unlink(path.join(__dirname,'files','starter.txt'));

        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\nNice to meet you');
        await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'promiseComplete.txt'));

        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseComplete.txt'), 'utf8');
        console.log(newData);

    } catch (err) {
        console.error(err);
    }
}

fileOps();