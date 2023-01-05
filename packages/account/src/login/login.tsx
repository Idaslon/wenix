import { Input, Typography } from '@wenix/ui'
import { CreateAccountText, InputsContainer, LoginButton, StyledForm, LoginLink } from './styles'

export interface LoginFormSubmitData {
  email: string
  password: string
}

interface LoginFormProps {
  onSubmit: (data: LoginFormSubmitData) => void
}

export const LoginForm = ({ onSubmit }: LoginFormProps) => {
  return (
    <StyledForm
      onSubmit={(event) => {
        event.preventDefault()

        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData.entries())

        onSubmit(data as unknown as LoginFormSubmitData)
      }}
    >
      <Typography variant="h1">Sign into Wenix</Typography>

      <InputsContainer>
        <Input required type="email" name="email" placeholder="Enter your email" />
        <Input required type="password" name="password" placeholder="Enter your password" />

        <LoginLink href="#">Forgot password</LoginLink>
      </InputsContainer>

      <LoginButton type="submit" size="large">
        Sign In
      </LoginButton>

      <CreateAccountText variant="body1">
        Do not have an account? <LoginLink href="/create-account">Create one</LoginLink>
      </CreateAccountText>
    </StyledForm>
  )
}
