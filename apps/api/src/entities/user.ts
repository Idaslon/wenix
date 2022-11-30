export interface UserProps {
  name: string;
  email: string;
}

export class User {
  private readonly props: UserProps;

  get name () {
    return this.props.name;
  }

  get email () {
    return this.props.email;
  }

  constructor(props: UserProps) {
    const { name, email } = props

    if (!name) throw new Error('User must have a name')
    if (!email) throw new Error('User must have an email')

    this.props = props
  }
}
