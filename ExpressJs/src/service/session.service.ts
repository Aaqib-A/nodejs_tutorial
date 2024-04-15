import { get } from 'lodash';
import { FilterQuery, UpdateQuery } from "mongoose";
import sessionModel, { SessionDocument } from "../models/session.models";
import { verifyJWT } from "../utils/jwt.utils";
import { findUser } from './user.service';
import config from 'config';
import { signJWT } from '../utils/jwt.utils'


export async function createSession(userId: String, userAgent: String) {
    const session = await sessionModel.create({ user: userId, userAgent })

    return session.toJSON();
}

export async function findSession(query: FilterQuery<SessionDocument>) {
    return sessionModel.find(query).lean();
}

export async function updateSession(query: FilterQuery<SessionDocument>, update: UpdateQuery<SessionDocument>) {
    return sessionModel.updateOne(query, update);

}

export async function reIssueAccessToken({ refreshToken }: { refreshToken: string }) {
    const { decoded } = verifyJWT(refreshToken)

    if (!decoded || !get(decoded, 'session')) return false;

    const session = await sessionModel.findById(get(decoded, "session"))

    if (!session || !session.valid) return false;

    const user = await findUser({ _id: session.user });

    if (!user) return false;

    // Create an access token
    const accessToken = signJWT(
        { ...user, session: session._id },
        { expiresIn: config.get("accessTokenTTL") } // 15 minutes,
    );

    return accessToken;
}