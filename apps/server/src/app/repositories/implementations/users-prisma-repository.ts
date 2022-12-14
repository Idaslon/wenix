import prisma from '../../../prisma'
import {
  User,
  UserCreateProps,
  UserDeleteProps,
  UserFindManyProps,
  UserFindUniqueProps,
  UsersRepository,
  UserUpdateProps,
} from '../users-repository'

export class UsersPrismaRepository implements UsersRepository {
  create(data: UserCreateProps): Promise<User> {
    return prisma.user.create({
      data,
    })
  }

  findUnique(props: UserFindUniqueProps): Promise<User | null> {
    return prisma.user.findUnique(props)
  }

  findMany(props?: UserFindManyProps): Promise<User[]> {
    return prisma.user.findMany(props)
  }

  update(props: UserUpdateProps): Promise<User> {
    return prisma.user.update(props)
  }

  delete(props: UserDeleteProps): Promise<User> {
    return prisma.user.delete(props)
  }
}
