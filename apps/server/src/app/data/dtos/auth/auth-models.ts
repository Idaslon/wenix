import { Field, ObjectType } from 'type-graphql'
import { UserModel } from '../users/users-models'

@ObjectType()
export class LoginModel {
  @Field()
  user: UserModel

  @Field()
  token: string
}
