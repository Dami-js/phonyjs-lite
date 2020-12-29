import { Field, InputType } from 'type-graphql';

@InputType({ description: 'New user data' })
export class CreateUserDTO {
  @Field()
  firstname: string;

  @Field()
  lastname: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
