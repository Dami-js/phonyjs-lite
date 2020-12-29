import { CreatePostDTO } from '@graphql/args/CreatePostDTO';
import PostRepository, { PostDoc } from '@models/Post.model';
import UserRepository from '@models/User.model';

export class PostService {
  private readonly postRepository = PostRepository;
  private readonly userRepository = UserRepository;
  constructor() {}

  async fetchPosts() {
    const posts = await this.postRepository.find();
    return posts;
  }

  async fetchPostAuthor(postId) {
    const post = await this.postRepository.findById(postId);
    console.log(postId);

    return post;
  }

  async createPost(dto: CreatePostDTO): Promise<PostDoc> {
    try {
      const newPost = new this.postRepository({ ...dto });
      await this.userRepository.updateOne(
        { _id: dto.author },
        { $push: { posts: newPost._id } },
      );
      await newPost.save();
      const post = await this.postRepository
        .findById(newPost._id)
        .populate('author');
      return post;
    } catch (error) {
      throw new Error(error);
    }
  }
}
