import { CreatePostDTO } from '@graphql/args/CreatePostDTO';
import Post from '@graphql/types/Post';
import User from '@graphql/types/User';
import { Context } from '@interfaces/context.interface';
import { AuthGuard } from '@middlewares/role-guard.middleware';
import { PostDoc } from '@models/Post.model';
import { PostService } from '@services/post.service';
import { UserService } from '@services/user.service';
import { AuthenticationError } from 'apollo-server-express';
import {
  Arg,
  Ctx,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
  UseMiddleware,
} from 'type-graphql';

@Resolver((of) => Post)
export default class PostResolver {
  private readonly postService: PostService = new PostService();
  private readonly userService: UserService = new UserService();
  constructor() {}

  @UseMiddleware()
  @Query(() => [Post])
  async getPosts(): Promise<Post | Array<Post>> {
    try {
      const posts = await this.postService.fetchPosts();
      return posts;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  @Mutation(() => Post)
  async createPost(
    @Arg('CreatePostData') { author, body, title }: CreatePostDTO,
  ): Promise<Post> {
    const post = await this.postService.createPost({
      ...{ author, body, title },
    });
    return post;
  }

  @FieldResolver(() => User)
  async author(@Root() post: PostDoc) {
    const users = this.userService.fetchOneUser(post.author);
    return users;
  }
}
