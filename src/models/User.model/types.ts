import { PostDoc } from '@models/Post.model';
import { Document } from 'mongoose';

export interface IUser {
  firstname: string;
  lastname: string;
  email: string;
  posts: Array<PostDoc['_id']>;
}

export interface UserDoc extends IUser, Document {}
