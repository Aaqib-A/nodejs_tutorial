npm init -y
npm i sequelize-cli -D
npx sequelize-cli init
npm --save-dev install pg-hstore
npm i --save-dev @types/express
npm run dev
npx sequelize-cli model:generate --name User --attributes name:string
npx sequelize-cli model:generate --name Project --attributes title:string
npm install uuid
npm i --save-dev @types/uuid

**Creating the first Model (and Migration):**
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string


**.env**
DB_USER=elcmibjh
DB_NAME=elcmibjh
DB_PASS=1u5iCcesSbMIZ8ZIKbpNKv5Y2uejNl5b
DB_HOST=satao.db.elephantsql.com
