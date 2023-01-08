import { LoginForm, LoginFormErrors, LoginFormSubmitData } from '@wenix/account'
import { styled } from '@wenix/ui'
import { useState } from 'react'
import { SEO } from '../../components/seo'
import { useAuth } from '../../contexts/auth'

const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
})

const messagesMap: { [key: string]: LoginFormErrors } = {
  'User not found': {
    email: 'Login or password is invalid',
    password: 'Login or password is invalid',
  },

  'Passwords do not match': {
    email: 'Login or password is invalid',
    password: 'Login or password is invalid',
  },
}

const _Login = () => {
  const { login } = useAuth()

  const [formErrors, setFormErrors] = useState<LoginFormErrors | undefined>(undefined)

  const handleLogin = async (data: LoginFormSubmitData) => {
    const response = await login(data).catch((error: Error) => {
      const errorsMessages = messagesMap[error.message]
      setFormErrors(errorsMessages)
    })

    console.log(response)
  }

  return (
    <Container>
      <SEO title="Login" />

      <LoginForm onSubmit={handleLogin} errors={formErrors} />
    </Container>
  )
}

export default _Login
