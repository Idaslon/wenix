import { z } from 'zod'
import { validateSchema } from '../../utils'

const titleSchema = z
  .string({
    required_error: 'The title is required',
    invalid_type_error: 'The title should be a text',
  })
  .min(1, { message: 'The title should not be empty' })

const descriptionSchema = z
  .string({
    required_error: 'The description is required',
    invalid_type_error: 'The description should be a text',
  })
  .min(1, { message: 'The description should not be empty' })

const authorIdSchema = z.number({
  required_error: 'The author is required',
  invalid_type_error: 'The authorId must be a number',
})

const createPostSchema = z.object({
  title: titleSchema,
  description: descriptionSchema,
  authorId: authorIdSchema,
})

const updatePostSchema = z.object({
  title: titleSchema.optional(),
  description: descriptionSchema.optional(),
})

export type CreatePostProps = z.infer<typeof createPostSchema>
export type UpdatePostProps = z.infer<typeof updatePostSchema>

export function validateCreatePost(props: CreatePostProps) {
  const post = validateSchema(createPostSchema, props)
  return post
}

export function validateUpdatePost(props: UpdatePostProps) {
  const post = validateSchema(updatePostSchema, props)
  return post
}
