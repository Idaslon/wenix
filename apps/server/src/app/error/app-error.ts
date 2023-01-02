import { baseErrorMessages, ErrorMessagesMapping } from './error-messages'

export interface AppErrorProps {
  message?: string
  slug?: keyof ErrorMessagesMapping
}

export class AppError extends Error {
  public slug: string | undefined

  constructor(props: string | AppErrorProps) {
    if (typeof props === 'string') {
      super(props)
      return
    }

    const message = props.message || baseErrorMessages[props.slug || 'default']

    super(message)
    this.slug = props.slug
  }
}
