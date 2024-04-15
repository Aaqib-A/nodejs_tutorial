import { Request, Response } from 'express';
import validate from '../middleware/validateResource';
import { validatePassword } from '../service/user.service';
import { createSession, findSession, updateSession } from '../service/session.service';
import { signJWT } from '../utils/jwt.utils';
import config from 'config';

export async function createUserSessionHandler(req: Request, res: Response) {

    // Validate the user's password
    const user = await validatePassword(req.body);

    if (!user) {
        return res.status(401).send("Invalid Email or password")
    }

    // Create a session
    const session = await createSession(user._id, req.get("user-agent") || "");

    // Create an access token
    const accessToken = signJWT(
        { ...user, session: session._id },
        { expiresIn: config.get("accessTokenTTL") } // 15 minutes,
    );

    // Create a refresh token
    const refreshToken = signJWT(
        { ...user, session: session._id },
        { expiresIn: config.get("refreshTokenTTL") } //15mins
    );

    // return access and refresh token
    return res.send({ accessToken, refreshToken });
}

export async function getUserSessionsHandler(req: Request, res: Response) {
    const userId = res.locals.user._id;

    const sessions = await findSession({ user: userId, valid: true });

    return res.send(sessions);
};

export async function deleteSessionHandler(req: Request, res: Response) {
    const sessionId = res.locals.user.session

    await updateSession({_id: sessionId}, {valid: false});

    return res.send({
        accessToken: null,
        refreshToken: null
    });
}