import { model, Model } from 'mongoose';
import { UserSchema } from './schema';
import { UserDoc } from './types';

const UserRepository: Model<UserDoc> = model('User', UserSchema);

export * from './types';
export default UserRepository;
