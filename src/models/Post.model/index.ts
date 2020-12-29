import { model, Model } from 'mongoose';
import { PostSchema } from './schema';
import { PostDoc } from './types';

const PostRepository: Model<PostDoc> = model('Post', PostSchema);

export * from './types';
export default PostRepository;
