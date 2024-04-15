import { Request, Response } from 'express';
import { omit } from 'lodash';
import { CreateUserInput } from '../schema/user.schema';
import { createuser } from '../service/user.service';
import logger from '../utils/logger';

export async function createUserhandler(req: Request<{},{}, CreateUserInput['body']>, res: Response) {
    try {
        const user = await createuser(req.body) // call create user service
        //return user;
        return res.send(omit(user.toJSON(), "password"));
    } catch (e: any) {
        logger.error(e)
        return res.status(409).send(e.message)
    }

}