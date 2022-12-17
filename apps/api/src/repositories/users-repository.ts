import { CreateUserProps, User } from '@wenix/models'

export interface UsersRepository {
  create(user: CreateUserProps): Promise<User>
  findUserByEmail(email: string): Promise<User | null>
}
