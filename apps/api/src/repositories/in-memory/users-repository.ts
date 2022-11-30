import { User } from "../../entities/user";
import { UsersRepository } from "../users-repository";

export class InMemoryUsersRepository implements UsersRepository {
  private items: User[] = []

  async create(user: User): Promise<void> {
    this.items.push(user)
  }

  async findUserByEmail(email: string): Promise<User | null> {
    const user = this.items.find(user => user.email === email)

    if (!user) {
      return null
    }

    return user
  }
}
