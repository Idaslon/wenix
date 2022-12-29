import { z } from 'zod'
import { validateSchema } from './error'

const basePostSchema = z.object({
  title: z
    .string({
      required_error: 'The title is required',
      invalid_type_error: 'The title should be a text',
    })
    .min(1, { message: 'The title should not be empty' }),
  description: z
    .string({
      required_error: 'The description is required',
      invalid_type_error: 'The description should be a text',
    })
    .min(1, { message: 'The description should not be empty' }),
  authorId: z.number({
    required_error: 'The author is required',
    invalid_type_error: 'The authorId must be a number',
  }),
})

const createPostSchema = basePostSchema

const postSchema = basePostSchema.merge(
  z.object({
    id: z.number(),
  })
)

export type CreatePostProps = z.infer<typeof createPostSchema>
export type ValidatePostProps = z.infer<typeof postSchema>

export type Post = z.infer<typeof postSchema>

export function validateCreatePost(props: CreatePostProps) {
  const post = validateSchema(createPostSchema, props)
  return post
}

export function validatePost(props: ValidatePostProps) {
  const post = validateSchema(postSchema, props)
  return post
}
