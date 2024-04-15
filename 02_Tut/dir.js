const fs = require('fs')


// ================== Creating New Folder ================== \\
if (!fs.existsSync('./new')){
    fs.mkdir('./new', (err)=>{
        if (err) throw err;
        console.log('Directory Created');
    });
};


if (fs.existsSync('./new')){
    fs.rmdir('./new',(err) =>{
        if (err) throw err;
        console.log('Directory Deleted');
    });
};


process.on('uncaughtException', err => {
    console.error('There was an uncaught exception: &{err}');
    process.exit(1)
})