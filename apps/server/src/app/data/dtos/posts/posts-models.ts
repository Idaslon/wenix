import { Field, ObjectType } from 'type-graphql'
import { UserModel } from '../users/users-models'

@ObjectType()
export class PostModel {
  @Field()
  id: number

  @Field()
  title: string

  @Field()
  description: string

  @Field()
  author: UserModel
}
