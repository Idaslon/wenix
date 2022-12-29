import { describe, expect, it } from 'vitest'
import { validateCreatePost, validatePost } from './post'

describe('validate post creation', () => {
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

describe('validate post', () => {
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
