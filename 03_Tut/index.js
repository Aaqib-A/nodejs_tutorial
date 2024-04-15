//npm install -g nodemon
// npx nodemon

//npm init
//npm i date-fns
//npm install

//Create .gitignore file and add "node_modules"

//npm i nodemon --save-dev
//npm i nodemon -D

//Change package.json => remonve test => add start & dev
//npm start
//npm run dev

//npm i uuid

/*
// ===== Versions Guide ===== \\
"date-fns": "^2.28.0",
Here 2 means major version
28 is minor verison
0 is patch
^ means change the minor version
~ means change the patch
"date-fns": "*" means update everything

//To install specific verion:
npm i date-fns@2.26.1

//To update all the packages
npm updates
*/

/*
// ===== To uninstall packages ===== \\
npm uninstall
npm un
npm rm
*/


const { format } = require('date-fns');
console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'));


/*
 //Another way to import is
const { v4 } = require('uuid');
console.log(v4())

const  uuid  = require('uuid');
console.log(uuid.v4())
*/

const { v4:uuid } = require('uuid'); //from uuid import v4 as uuid
console.log(uuid())
