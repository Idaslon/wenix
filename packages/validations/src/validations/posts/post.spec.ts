import { describe, expect, it } from 'vitest'
import { validateCreatePost, validateUpdatePost } from './post'

describe('Validate Post Creation', () => {
  it('should valid a post creation', () => {
    expect(
      validateCreatePost({
        title: 'Updates Coming',
        description: 'Updates coming...',
        authorId: 1,
      })
    ).toStrictEqual({
      title: 'Updates Coming',
      description: 'Updates coming...',
      authorId: 1,
    })
  })

  it('should not valid a post creation without title', () => {
    expect(() =>
      validateCreatePost({
        title: undefined as any,
        description: 'Updates coming...',
        authorId: 1,
      })
    ).toThrowError('The title is required')
  })

  it('should not valid a post creation with empty title', () => {
    expect(() =>
      validateCreatePost({
        title: '',
        description: 'Updates coming...',
        authorId: 1,
      })
    ).toThrowError('The title should not be empty')
  })

  it('should not valid a post with invalid title type', () => {
    expect(() =>
      validateCreatePost({
        title: true as any,
        description: 'Updates coming...',
        authorId: 1,
      })
    ).toThrowError('The title should be a text')
  })

  it('should not valid a post creation without description', () => {
    expect(() =>
      validateCreatePost({
        title: 'Updates Coming',
        description: undefined as any,
        authorId: 1,
      })
    ).toThrowError('The description is required')
  })

  it('should not valid a post creation with empty description', () => {
    expect(() =>
      validateCreatePost({
        title: 'Updates Coming',
        description: '',
        authorId: 1,
      })
    ).toThrowError('The description should not be empty')
  })

  it('should not valid a post creation with invalid description type', () => {
    expect(() =>
      validateCreatePost({
        title: 'Updates Coming',
        description: true as any,
        authorId: 1,
      })
    ).toThrowError('The description should be a text')
  })

  it('should not valid a post creation without authorId', () => {
    expect(() =>
      validateCreatePost({
        title: 'Updates Coming',
        description: 'Updates coming...',
        authorId: undefined as any,
      })
    ).toThrowError('The author is required')
  })

  it('should not valid a post creation with invalid authorId', () => {
    expect(() =>
      validateCreatePost({
        title: 'Updates Coming',
        description: 'Updates coming...',
        authorId: '' as any,
      })
    ).toThrowError('The authorId must be a number')
  })
})

describe('Validate Post Update', () => {
  it('should valid a post update', () => {
    expect(
      validateUpdatePost({
        title: 'Updates Coming',
        description: 'Updates coming...',
      })
    ).toStrictEqual({
      title: 'Updates Coming',
      description: 'Updates coming...',
    })
  })
})
