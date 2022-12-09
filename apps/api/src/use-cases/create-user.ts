import { User } from "../entities/user"
import { UsersRepository } from "../repositories/users-repository"

interface CreateUserRequest {
  name: string
  email: string
  password: string
}

type CreateUserResponse = User

export class CreateUser {
  constructor(
    private usersRepository: UsersRepository
  ) {}

  async execute(request: CreateUserRequest): Promise<CreateUserResponse> {
    const { name, email, password } = request

    const userExists = await this.usersRepository.findUserByEmail(email)

    if (userExists !== null) {
      throw new Error('An user with this email already exists')
    }

    const user = new User({
      name,
      email,
      password
    })

    this.usersRepository.create(user)

    return user
  }
}
