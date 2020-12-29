import { CreateUserDTO } from '@graphql/args/CreateUserDTO';
import UserRepository, { UserDoc } from '@models/User.model';

export class UserService {
  private userRepository: typeof UserRepository;
  constructor() {
    this.userRepository = UserRepository;
  }

  async fetchUsers() {
    const users = this.userRepository.find().populate('posts');
    return users;
  }

  async fetchOneUser(id) {
    const users = this.userRepository.findById(id).populate('posts');
    return users;
  }

  checkIfEmailExist(email: string) {
    const user = this.userRepository.findOne({ email });
    return user ? true : false;
  }

  async createUser(data: CreateUserDTO): Promise<UserDoc> {
    try {
      const newUser = new this.userRepository({ ...data });
      const savedUser = await newUser.save();
      return savedUser;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
