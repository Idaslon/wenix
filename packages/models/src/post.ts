import { z } from 'zod'

const basePostSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  authorId: z.number(),
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
  const post = createPostSchema.parse(props)
  return post
}

export function validatePost(props: ValidatePostProps) {
  const post = postSchema.parse(props)
  return post
}
