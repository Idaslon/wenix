import { User } from '../entities/user';
import { UsersRepository } from '../repositories/users-repository';
import { EncryptionService } from '../services/encryption-service';
import { BaseEncryptionService } from '../services/implementation/base-encryption-service';

interface CreateUserRequest {
  name: string;
  email: string;
  password: string;
}

type CreateUserResponse = User;

export class CreateUser {
  private encryptionService: EncryptionService;

  constructor(private usersRepository: UsersRepository, encryptionService?: EncryptionService) {
    this.encryptionService = encryptionService || new BaseEncryptionService();
  }

  async execute(request: CreateUserRequest): Promise<CreateUserResponse> {
    const { name, email, password } = request;

    const userExists = await this.usersRepository.findUserByEmail(email);

    if (userExists !== null) {
      throw new Error('An user with this email already exists');
    }

    const encryptedPassword = await this.encryptionService.hashPassword(password);

    const user = new User({
      name,
      email,
      password: encryptedPassword,
    });

    this.usersRepository.create(user);

    return user;
  }
}
