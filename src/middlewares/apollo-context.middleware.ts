import { UserDoc } from '@models/User.model';
import { Request } from 'express';
import Auth from './auth.middleware';

export const ApolloContext = async ({ req }: { req: Request }) => {
  let auth = true;
  let user: UserDoc | null = null;
  const token = req.headers.authorization;

  if (!token) auth = false;
  else {
    try {
      user = await Auth(token);
    } catch (error) {
      auth = false;
    }
  }

  return auth && user ? { user, auth } : { auth };
};
