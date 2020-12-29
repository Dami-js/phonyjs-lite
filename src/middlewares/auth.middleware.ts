import UserRepository, { UserDoc } from '@models/User.model';
import { AuthenticationError } from 'apollo-server-express';

export default async function Auth(token: string): Promise<UserDoc> {
  try {
    // const decoded = jwt.verify(token, JWT_SECRET);

    const user = await UserRepository.findOne({
      email: token,
    });

    if (!user) throw new AuthenticationError('Authentication failed');

    return user;
  } catch (error) {
    return Promise.reject(error);
  }
}
