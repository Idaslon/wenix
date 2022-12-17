import { CreateUserProps, User } from '@wenix/models'
import { UsersRepository } from '../users-repository'

export class InMemoryUsersRepository implements UsersRepository {
  private lastId = 1
  private items: User[] = []

  async create(userProps: CreateUserProps): Promise<User> {
    const user = {
      id: this.lastId + 1,
      ...userProps,
    }

    this.lastId += 1
    this.items.push(user)

    return user
  }

  async findUserByEmail(email: string): Promise<User | null> {
    const user = this.items.find((user) => user.email === email)

    if (!user) {
      return null
    }

    return user
  }
}
