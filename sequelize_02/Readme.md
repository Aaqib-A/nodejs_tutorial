Site:
https://sequelize.org/docs/v6/getting-started/

npm install --save sequelize
npm install --save pg pg-hstore
npm install sequelize-cli

npx sequelize init
npx sequelize db:create

To generate Tables:
npx sequelize-cli model:generate --name User --attributes name:string,email:string,role:string

To Drop Database:
npx sequelize db:drop

To Create Database:
npx sequelize db:create

To apply migrations:
npx sequelize db:migrate
npx sequelize db:migrate:status
npx sequelize db:migrate:undo // Will revert latest migrations
npx sequelize db:migrate:undo:all // Will revert all migrations


To Install and Start nodemon app:
npm i nodemon
npx nodemon app

npx sequelize model:generate --name Post --attributes body:string

To generate seeders Data:
npx sequelize seed:generate --name create-fake-users
 => Update in seeders file
 npx sequelize db:seed:all
