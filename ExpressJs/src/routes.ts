import { Express, Request, Response } from 'express';
import { createUserhandler } from './controller/user.controller';
import { createUserSessionHandler, getUserSessionsHandler, deleteSessionHandler } from './controller/session.controller'
import validateResource from './middleware/validateResource';
import { createUserSchema } from './schema/user.schema';
import { createSessionSchema } from './schema/session.schema';
import requireUser from './middleware/requireUser';
import { createProductSchema, deleteProductSchema, getProductSchema, updateProductSchema } from './schema/product.schema';
import { createProductHandler, deleteProductHandler, getProductHandler, updateProductHandler } from './controller/product.controller';

function routes(app: Express) {
    app.get('/healthcheck', (req: Request, res: Response) => { res.sendStatus(200) })

    app.post('/api/users', validateResource(createUserSchema), createUserhandler)
    app.post('/api/sessions', validateResource(createSessionSchema), createUserSessionHandler)

    app.get('/api/sessions', requireUser, getUserSessionsHandler);
    app.delete('/api/sessions', requireUser, deleteSessionHandler);

    app.post('/api/products', [requireUser, validateResource(createProductSchema)], createProductHandler);
    app.put('/api/products/:productId', [requireUser, validateResource(updateProductSchema)], updateProductHandler);
    app.get('/api/products/:productId', validateResource(getProductSchema), getProductHandler);
    app.delete('/api/products/:productId', [requireUser, validateResource(deleteProductSchema)], deleteProductHandler);
}

export default routes;