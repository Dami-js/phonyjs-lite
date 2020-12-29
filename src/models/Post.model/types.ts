import { UserDoc } from '@models/User.model';
import { Document } from 'mongoose';

export interface IPost {
  title: string;
  body: string;
  author: UserDoc['_id'];
}

export interface PostDoc extends IPost, Document {}
