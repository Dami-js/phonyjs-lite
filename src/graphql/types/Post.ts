import { Schema } from 'mongoose';
import { Field, ID, ObjectType } from 'type-graphql';
import User from './User';

@ObjectType()
export default class Post {
  @Field(() => ID, { nullable: true })
  _id?: Schema.Types.ObjectId;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  body?: string;

  @Field(() => User)
  author: Schema.Types.ObjectId;
}
