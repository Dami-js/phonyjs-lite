import { Field, ID, InputType } from 'type-graphql';

@InputType({ description: 'New post data' })
export class CreatePostDTO {
  @Field()
  title: string;

  @Field()
  body: string;

  @Field(() => ID)
  author: string;
}
