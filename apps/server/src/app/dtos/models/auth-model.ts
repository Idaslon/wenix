import { Field, ObjectType } from 'type-graphql'
import { UserModel } from './user-model'

@ObjectType()
export class LoginModel {
  @Field()
  user: UserModel

  @Field()
  token: string
}
