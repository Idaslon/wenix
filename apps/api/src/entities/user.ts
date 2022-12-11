export interface UserProps {
  name: string
  email: string
  password: string
}

export class User {
  private readonly props: UserProps

  get name() {
    return this.props.name
  }

  get email() {
    return this.props.email
  }

  get password() {
    return this.props.password
  }

  constructor(props: UserProps) {
    const { name, email, password } = props

    if (!name) throw new Error('User must have a name')
    if (!email) throw new Error('User must have an email')
    if (!password) throw new Error('User must have a password')

    this.props = props
  }
}

// Zod
// Lint
