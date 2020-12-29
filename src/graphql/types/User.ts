import PostSchema from '@graphql/types/Post';
import { Schema } from 'mongoose';
import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class Account {
  @Field(() => ID, { nullable: true })
  _id?: Schema.Types.ObjectId;

  @Field({ nullable: true })
  firstname?: string;

  @Field({ nullable: true })
  lastname?: string;

  @Field({ nullable: true })
  email?: string;
}

@ObjectType()
export default class User extends Account {
  @Field(() => [PostSchema], { nullable: true })
  posts?: Array<Schema.Types.ObjectId>;
}
