import { Prisma, User as PrismaUser } from '@prisma/client'

export type User = PrismaUser

export type UserCreateProps = Prisma.UserCreateInput
export type UserFindUniqueProps = Prisma.UserFindUniqueArgs
export type UserFindManyProps = Prisma.UserFindManyArgs
export type UserUpdateProps = Prisma.UserUpdateArgs
export type UserDeleteProps = Prisma.UserDeleteArgs

export interface UsersRepository {
  create(data: UserCreateProps): Promise<User>
  findUnique(props: UserFindUniqueProps): Promise<User | null>
  findMany(props?: UserFindManyProps): Promise<User[]>
  update(props: UserFindManyProps): Promise<User>
  delete(props: UserFindManyProps): Promise<User>
}
