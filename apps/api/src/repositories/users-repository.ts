import { User } from '@wenix/models'

export interface UsersRepository {
  create(user: User): Promise<void>
  findUserByEmail(email: string): Promise<User | null>
}
