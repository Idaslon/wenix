import { Field, ObjectType } from 'type-graphql'
import { UserModel } from './user-model'

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
