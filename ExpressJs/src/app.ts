//npm run dev

//console.log("Hello World!!!");

import express from 'express';
import config from 'config';
import connect from './utils/connect';
import logger from './utils/logger';
import routes from './routes';
import deserializedUser from './middleware/deserializedUser';

const port = config.get<number>("port");

const app = express();

app.use(express.json());
app.use(deserializedUser);

app.listen(port,  async () =>{
    //console.log('App is running');
    logger.info(`App is running at ${port}`);

    await connect();
    routes(app);
})
