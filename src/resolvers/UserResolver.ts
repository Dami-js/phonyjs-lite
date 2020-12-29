import { CreateUserDTO } from '@graphql/args/CreateUserDTO';
import User, { Account } from '@graphql/types/User';
import { IUser } from '@models/User.model';
import { UserService } from '@services/user.service';
import { ValidationError } from 'apollo-server-express';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';

@Resolver()
export default class UserResolver {
  readonly userService: UserService = new UserService();

  @Query(() => [User])
  async getUsers(): Promise<IUser | Array<IUser>> {
    const user = await this.userService.fetchUsers();
    return user;
  }

  @Mutation(() => Account)
  async createAccount(
    @Arg('CreateUserDetails') newUserData: CreateUserDTO,
  ): Promise<Account> {
    try {
      const user = await this.userService.createUser(newUserData);
      return user;
    } catch (error) {
      throw new ValidationError(error.message);
    }
  }
}
