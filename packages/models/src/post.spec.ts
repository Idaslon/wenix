import { describe, expect, it } from 'vitest'
import { validateCreatePost, validatePost } from './post'

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
    ).toThrowError()
  })

  it('should not valid a post creation with empty title', () => {
    expect(() =>
      validateCreatePost({
        title: '',
        description: 'Updates coming...',
        authorId: 1,
      })
    ).toThrowError()
  })

  it('should not valid a post creation without description', () => {
    expect(() =>
      validateCreatePost({
        title: 'Updates Coming',
        description: undefined as any,
        authorId: 1,
      })
    ).toThrowError()
  })

  it('should not valid a post creation with empty description', () => {
    expect(() =>
      validateCreatePost({
        title: 'Updates Coming',
        description: '',
        authorId: 1,
      })
    ).toThrowError()
  })

  it('should not valid a post creation without authorId', () => {
    expect(() =>
      validateCreatePost({
        title: 'Updates Coming',
        description: '',
        authorId: undefined as any,
      })
    ).toThrowError()
  })

  it('should not valid a post creation with invalid authorId', () => {
    expect(() =>
      validateCreatePost({
        title: 'Updates Coming',
        description: '',
        authorId: '' as any,
      })
    ).toThrowError()
  })
})

describe('Validate Post', () => {
  it('should valid a post', () => {
    expect(
      validatePost({
        id: 1,
        title: 'Updates Coming',
        description: 'Updates coming...',
        authorId: 1,
      })
    ).toStrictEqual({
      id: 1,
      title: 'Updates Coming',
      description: 'Updates coming...',
      authorId: 1,
    })
  })

  it('should not valid a post without id', () => {
    expect(() =>
      validatePost({
        id: undefined as any,
        title: 'Updates Coming',
        description: 'Updates coming...',
        authorId: 1,
      })
    ).toThrowError()
  })

  it('should not valid a post with invalid id', () => {
    expect(() =>
      validatePost({
        id: '' as any,
        title: 'Updates Coming',
        description: 'Updates coming...',
        authorId: 1,
      })
    ).toThrowError()
  })

  it('should not valid a post without title', () => {
    expect(() =>
      validatePost({
        id: 1,
        title: undefined as any,
        description: 'Updates coming...',
        authorId: 1,
      })
    ).toThrowError()
  })

  it('should not valid a post with empty title', () => {
    expect(() =>
      validatePost({
        id: 1,
        title: '',
        description: 'Updates coming...',
        authorId: 1,
      })
    ).toThrowError()
  })

  it('should not valid a post without description', () => {
    expect(() =>
      validatePost({
        id: 1,
        title: 'Updates Coming',
        description: undefined as any,
        authorId: 1,
      })
    ).toThrowError()
  })

  it('should not valid a post with empty description', () => {
    expect(() =>
      validatePost({
        id: 1,
        title: 'Updates Coming',
        description: '',
        authorId: 1,
      })
    ).toThrowError()
  })

  it('should not valid a post without authorId', () => {
    expect(() =>
      validatePost({
        id: 1,
        title: 'Updates Coming',
        description: '',
        authorId: undefined as any,
      })
    ).toThrowError()
  })

  it('should not valid a post with invalid authorId', () => {
    expect(() =>
      validatePost({
        id: 1,
        title: 'Updates Coming',
        description: '',
        authorId: '' as any,
      })
    ).toThrowError()
  })
})

describe('Assert error messages', () => {
  it('should match error message when not providing a title', () => {
    expect(() =>
      validateCreatePost({
        title: undefined as any,
        description: 'Is Coming...',
        authorId: 1,
      })
    ).toThrow('The title is required')
  })

  it('should match error message when the title is empty', () => {
    expect(() =>
      validateCreatePost({
        title: '',
        description: 'Is Coming...',
        authorId: 1,
      })
    ).toThrow('The title should not be empty')
  })

  it('should match error message when the title is empty', () => {
    expect(() =>
      validateCreatePost({
        title: 1 as any,
        description: 'Is Coming...',
        authorId: 1,
      })
    ).toThrow('The title should be a text')
  })

  it('should match error message when not providing a description', () => {
    expect(() =>
      validateCreatePost({
        title: 'Is Coming',
        description: undefined as any,
        authorId: 1,
      })
    ).toThrow('The description is required')
  })

  it('should match error message when the description is empty', () => {
    expect(() =>
      validateCreatePost({
        title: 'Is Coming',
        description: '',

        authorId: 1,
      })
    ).toThrow('The description should not be empty')
  })

  it('should match error message when the description is empty', () => {
    expect(() =>
      validateCreatePost({
        title: 'Is Coming',
        description: 1 as any,
        authorId: 1,
      })
    ).toThrow('The description should be a text')
  })

  it('should match error message when not providing authorId', () => {
    expect(() =>
      validateCreatePost({
        title: 'Is Coming',
        description: 'Is Coming...',
        authorId: undefined as any,
      })
    ).toThrow('The author is required')
  })

  it('should match error message when not providing authorId', () => {
    expect(() =>
      validateCreatePost({
        title: 'Is Coming',
        description: 'Is Coming...',
        authorId: '1' as any,
      })
    ).toThrow('The authorId must be a number')
  })
})
